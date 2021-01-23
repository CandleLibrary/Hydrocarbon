import { ConstSC, ExprSC, JS, SC, VarSC } from "../utilities/skribble.js";

export type ConstantHash = string;
export type ConstantName = string;
export type ConstantObj = { original_name: VarSC | ConstSC, name: VarSC | ConstSC, code_node: SC; };
export interface Helper {
    /** List of external grammar names to integrate into the parser.
     * Names must match the name following the `as` terminal in an `IMPORT` statement.
     * Any grammars with names not present in this set will be referenced as 
     * an external variable.
     INTEGRATE: Set<string>;
     */
    /**
    * Item and state annotation comments will be added to the output.
    */
    ANNOTATED: boolean;

    /**
     * Add debug tracing code to output.
     */
    DEBUG: boolean;
    constant_map: Map<ConstantHash, ConstantObj>;

    /**
     * Facilitates dedup of constant values.
     * 
     * Add a global constant to the parser environment. 
     * Returns name to the constant. 
     */
    add_constant: (const_name: VarSC | ConstSC, const_value: SC) => VarSC | ConstSC;
    render_constants: () => { const: SC[], fn: SC[]; };
    join_constant_map: (const_map: Map<ConstantHash, ConstantObj>, dependent_string: SC) => void;
    /**
     * The ids of all production functions that are called.
     */
    referenced_production_ids: Set<number>;
}
export function constructCompilerRunner(ANNOTATED: boolean = false, DEBUG: boolean = false): Helper {
    let const_counter = 0, unique_const_set = new Set();
    const runner = <Helper>{

        INTEGRATE: new Set(),

        ANNOTATED,

        DEBUG,

        constant_map: new Map,

        referenced_production_ids: new Set,

        add_constant: (const_name: VarSC | ConstSC, const_value: SC): VarSC | ConstSC => {

            const hash = SC.Bind(<ExprSC>const_value).hash();
            let test_name = const_name.type.value;

            let actual_name: VarSC | ConstSC = null;

            const prefix = `${test_name}`;

            let value = const_name.type.val_type;

            if (!runner.constant_map.has(hash)) {

                while (unique_const_set.has(test_name))
                    test_name = prefix + ("0000" + (const_counter++)).slice(-3);

                unique_const_set.add(test_name);

                actual_name = SC[const_name.type.type == "constant" ? "Constant" : "Variable"](`${test_name}:${value}`);

                runner.constant_map.set(hash, { original_name: const_name, name: actual_name, code_node: const_value, });

            } else {
                actual_name = runner.constant_map.get(hash).name;
            }

            return actual_name;
        },

        join_constant_map(const_map: Map<ConstantHash, ConstantObj>, dependent_code: SC) {

            const dependent_data = [dependent_code, ...[...const_map.values()].map(d => d.code_node = SC.Bind(d.code_node))];

            let intermediate_names = [];

            //replace all existing hashes 
            for (const [hash, { original_name, name, code_node }] of const_map.entries()) {

                if (runner.constant_map.has(hash)) {

                    let int_name = "____intermediate___" + intermediate_names.length;

                    intermediate_names.push([int_name, runner.constant_map.get(hash).name.value]);

                    dependent_data.map(d => d.replaceVariableValue(name.type.value, int_name));
                }
            }

            for (const [old_name, new_name] of intermediate_names)
                dependent_data.map(d => d.replaceVariableValue(old_name, new_name));

            intermediate_names.length = 0;

            for (const [, { original_name, name, code_node }] of const_map.entries()) {
                const hash = SC.Bind(code_node).hash();

                if (runner.constant_map.has(hash)) {

                    let int_name = "____intermediate___" + intermediate_names.length;

                    intermediate_names.push([int_name, runner.constant_map.get(hash).name.value]);

                    dependent_data.slice(0, 1).map(d => d.replaceVariableValue(name.type.value, int_name));
                } else {

                    let const_name = runner.add_constant(original_name, code_node);

                    if (name.type.value !== const_name.type.value) {
                        let int_name = "____intermediate___" + intermediate_names.length;
                        intermediate_names.push([int_name, const_name.type.value]);
                        dependent_data.map(d => d.replaceVariableValue(name.type.value, int_name));
                    }
                }
            }

            for (const [old_name, new_name] of intermediate_names)
                dependent_data.map(d => d.replaceVariableValue(old_name, new_name));
        },
        render_constants: (): { const: SC[], fn: SC[]; } => {

            const code_fn_node = [], const_ty_node = [];

            for (const { name, code_node: node } of [...runner.constant_map.values()].sort((a, b) => {
                return a.name.value < b.name.value ? -1 : b.name.value < a.name.value ? 1 : 0;
            })) {

                const bound_node = SC.Bind(node);

                if (bound_node.type.type == "function") {

                    bound_node.expressions[0] = name;

                    code_fn_node.push(bound_node);
                } else {

                    const_ty_node.push(SC.Declare(SC.Assignment(name, <ExprSC>bound_node)));
                }
            }

            return { const: const_ty_node, fn: code_fn_node };
        },
    };

    return runner;
};
