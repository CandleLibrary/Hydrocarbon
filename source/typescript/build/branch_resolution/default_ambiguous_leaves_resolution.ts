/* 
 * Copyright (C) 2021 Anthony Weathersby - The Hydrocarbon Parser Compiler
 * see /source/typescript/hydrocarbon.ts for full copyright and warranty 
 * disclaimer notice.
 */
import { sk } from "../../skribble/skribble.js";
import { SKBlock, SKExpression } from "../../skribble/types/node";
import { RenderBodyOptions } from "../../types/render_body_options";
import { MultiItemReturnObject } from "../../types/transition_generating";
import { Leaf, TransitionNode, TRANSITION_TYPE } from "../../types/transition_node.js";
import { createBranchFunctionSk } from "../../utilities/code_generating.js";
import { getUniqueSymbolName, Sym_Is_A_Production } from "../../grammar/nodes/symbol.js";
import { createVirtualProductionSequence } from "../function_constructor.js";

const SC = null;
export function default_resolveUnresolvedLeaves(node: TransitionNode, nodes: TransitionNode[], options: RenderBodyOptions): MultiItemReturnObject {

    const

        items = nodes.flatMap(s => s.items).setFilter(i => i.id),

        expected_symbols =
            nodes.flatMap(s => s.symbols).setFilter(getUniqueSymbolName)
                .concat(
                    items.flatMap(i => {
                        const sym = i.sym(options.grammar);
                        if (!Sym_Is_A_Production(sym))
                            return sym;
                        return [];
                    })
                ),

        SHOULD_IGNORE = options.extended_goto_items.some(i => items.some(item => i.body == item.body)),

        IS_LEFT_RECURSIVE_WITH_FOREIGN_PRODUCTION_ITEMS = nodes.some(i => i.transition_type == TRANSITION_TYPE.IGNORE),

        out_prods: number[] = [],

        out_leaves: Leaf[] = [];
    /*
if (SHOULD_IGNORE) {

return {
root: [sk`return: ${options.production_ids[0]}`],
leaves: [{
root: [],
leaf: [],
prods: [],
original_prods: [],
hash: "",
transition_type: TRANSITION_TYPE.IGNORE
}],
prods: out_prods.setFilter()
};
}
*/

    let root: SKExpression[] = [];

    for (const node of nodes)
        for (const leaf of node.leaves)
            leaf.INDIRECT = true;

    let FALLBACK_REQUIRED = items.some(i => i.atEND);
    let v_depth = options.VIRTUAL_LEVEL;

    if (!FALLBACK_REQUIRED)
        try {
            root = createVirtualProductionSequence(options, items, expected_symbols, out_leaves, out_prods);
        } catch (e) {
            //throw e;

            if (v_depth > 0) throw e;

            root.length = 0;

            FALLBACK_REQUIRED = true;
        }

    if (FALLBACK_REQUIRED) {

        const
            USE_BACKTRACKING = !nodes.some(n => n.transition_type == TRANSITION_TYPE.ASSERT_END),
            USE_FORKING = true,
            output_nodes = nodes.filter(i => i.transition_type !== TRANSITION_TYPE.IGNORE);

        if (USE_BACKTRACKING) {

            const statements = createBackTrackingSequence(
                options,
                output_nodes,
                out_prods,
                out_leaves,
                IS_LEFT_RECURSIVE_WITH_FOREIGN_PRODUCTION_ITEMS
            );

            root.push(...statements);

        } else if (USE_FORKING) {

            const statements = createForkSequence(
                options,
                output_nodes,
                out_prods,
                out_leaves,
            );

            root.push(...statements);
        } else
            throw new Error(
                `Unable to resolve parsing ambiguities \n${items.map(i => i.renderUnformattedWithProduction(options.grammar)).join("\n")} `
            );
    }

    return { root, leaves: out_leaves, prods: out_prods.setFilter() };
}

function createBackTrackingSequence(
    options: RenderBodyOptions,
    output_nodes: TransitionNode[],
    out_prods: number[],
    out_leaves: Leaf[],
    IS_LEFT_RECURSIVE_WITH_FOREIGN_PRODUCTION_ITEMS: boolean
): SKExpression[] {

    let I = 0;

    const out: SKExpression[] = [];

    out.push(
        <SKExpression>sk`[mut] origin:Lexer = l.copyInPlace()`,
        <SKExpression>sk`[mut] s_ptr:u32 = data.stack_ptr`,
        <SKExpression>sk`[mut] r_ptr:u32 = data.rules_ptr`
    );

    //Combine production that transition on the same symbol



    for (const { code, items, prods, leaves } of output_nodes) {

        out_prods.push(...prods);
        out_leaves.push(...leaves);


        const block = <SKBlock>sk`{}`;
        const ret = code.filter(sk => sk.type == "return")[0];
        const remaining = code.filter(sk => sk.type != "return");
        block.expressions = remaining;
        block.expressions.push(sk`[mut] output:array___ParserData$ptr = Array(1);`);
        block.expressions.push(sk`[mut] result:i32 = run(&>data, output, 0, 1, 0);`);

        const call_name = createBranchFunctionSk([
            sk`return : -${prods[0]}`
        ], options);

        block.expressions.unshift(<SKExpression>sk`pushFN(data, &> ${call_name})`);

        const resolve = <SKBlock>sk`if ( result > 0 && ${prods.map(p => `((*>output[0]).prod) == -${p}`).join(" || ")} ) : {
                data.sync(output[0]);
                ${ret || "return : data.rules_ptr"}
            }`;

        leaves.map(l => l.BACKTRACK == true);
        block.expressions.push(resolve);

        out.push(block);

        out.push(
            <SKExpression>sk`reset(data, origin, s_ptr, r_ptr)`
        );
    }

    out.push(sk`return :-1`);

    return out;
}

function createForkSequence(
    options: RenderBodyOptions,
    output_nodes: TransitionNode[],
    out_prods: number[],
    out_leaves: Leaf[],
): SKExpression[] {

    let I = 0;


    const out: SKExpression[] = [];


    for (const { code, items, prods, leaves } of output_nodes) {

        out_prods.push(...prods);
        out_leaves.push(...leaves);

        const call_name = createBranchFunctionSk(code, options);

        if (I++ == output_nodes.length - 1) {
            out.push(
                <SKExpression>sk`pushFN(data, &> ${call_name})`
            );
        } else {
            out.push(
                <SKExpression>sk`[static] fk${I}:__ParserData$ptr = fork(data, db);`,
                <SKExpression>sk`pushFN(*> fk${I}, &> ${call_name})`
            );
        }
    }

    out.push(<SKExpression>sk`return:0`);

    return out;
}
