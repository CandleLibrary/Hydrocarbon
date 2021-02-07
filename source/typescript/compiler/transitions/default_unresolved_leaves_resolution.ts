import { Grammar, ProductionBody } from "../../types/grammar.js";
import { Production } from "../../types/production.js";
import { Leaf, TransitionNode, TRANSITION_TYPE } from "../../types/transition_node.js";
import { RenderBodyOptions } from "../../types/render_body_options";
import { MultiItemReturnObject } from "../../types/state_generating";
import { rec_glob_lex_name, rec_state, rec_state_prod } from "../../utilities/global_names.js";
import { Item, ItemIndex } from "../../utilities/item.js";
import { buildItemMaps } from "../../utilities/item_map.js";
import { renderItem } from "../../utilities/render_item.js";
import { SC } from "../../utilities/skribble.js";
import { getUniqueSymbolName } from "../../utilities/symbol.js";
import { compileProductionFunctions } from "../function_constructor.js";
import { addIntermediateLeafStatements } from "./add_leaf_statements.js";
export function default_resolveUnresolvedLeaves(node: TransitionNode, nodes: TransitionNode[], options: RenderBodyOptions): MultiItemReturnObject {

    const

        items = nodes.flatMap(s => s.items).setFilter(i => i.id),

        expected_symbols = nodes.flatMap(s => s.symbols).setFilter(getUniqueSymbolName),

        anchor_state = SC.Variable("anchor_state:unsigned"),

        root: SC = (new SC),

        IS_LEFT_RECURSIVE_WITH_FOREIGN_PRODUCTION_ITEMS = nodes.some(i => i.transition_type == TRANSITION_TYPE.IGNORE),

        out_prods: number[] = [],

        out_leaves: Leaf[] = [];

    let FALLBACK_REQUIRED = items.every(i => i.atEND);

    if (!FALLBACK_REQUIRED)
        try {
            const
                { grammar } = options,
                productions: Production[] = createVirtualProductions(items, grammar);


            const { RDOptions, GOTO_Options, RD_fn_contents, GOTO_fn_contents }
                = compileProductionFunctions(options.grammar, options.helper, productions, expected_symbols);

            addIntermediateLeafStatements(
                RD_fn_contents,
                GOTO_fn_contents,
                SC.Variable("testA"),
                RDOptions,
                GOTO_Options
            );

            root.addStatement(RD_fn_contents, GOTO_Options.NO_GOTOS ? undefined : GOTO_fn_contents);

            if (options.scope == "RD")
                root.addStatement(SC.Declare(SC.Assignment(rec_state_prod, "0xFFFFFFFF")));

            let leaf = root;// prev_prods;

            for (let i = 0; i < items.length; i++) {

                const item = items[i];

                item[ItemIndex.offset] = item[ItemIndex.length];
                const v_prod = productions[i];
                const prod = item.getProduction(grammar).id;


                out_prods.push(prod);


                const _if = SC.If(SC.Binary("prod", "==", v_prod.id));
                let _if_leaf = new SC;
                _if.addStatement(_if_leaf);
                _if_leaf = renderItem(_if_leaf, item, options);

                leaf.addStatement(_if);
                leaf = _if;

                out_leaves.push({
                    prods: [prod],
                    root: _if,
                    leaf: _if_leaf,
                    hash: "----------------",
                    transition_type: TRANSITION_TYPE.ASSERT_END,
                });
            }

        } catch (e) {
            root.statements.length = 0;
            root.addStatement(e.stack);
            FALLBACK_REQUIRED = true;
        }

    if (FALLBACK_REQUIRED) {


        root.addStatement(
            SC.Declare(
                SC.Assignment("mk:int", SC.Call("mark")),
                SC.Assignment("anchor:Lexer", SC.Call(SC.Member(rec_glob_lex_name, "copy"))),
                SC.Assignment(anchor_state, rec_state)
            ));

        let leaf = root, FIRST = true;// prev_prods;

        for (const { code, items, prods, leaves } of nodes.filter(i => i.transition_type !== TRANSITION_TYPE.IGNORE)) {


            out_prods.push(...prods);
            out_leaves.push(...leaves);

            leaf.addStatement(SC.Comment(items));

            if (FIRST) {

                leaf.addStatement(
                    SC.Comment(prods),
                    code
                );

            } else {
                leaf.addStatement(
                    SC.Assignment(rec_state, SC.Call(
                        "reset:bool",
                        "mk",
                        "anchor:Lexer",
                        rec_glob_lex_name,
                        anchor_state
                    )),
                    code,
                    SC.Empty()
                );

            }

            // prev_prods = prods;

            FIRST = false;
        }

        if (IS_LEFT_RECURSIVE_WITH_FOREIGN_PRODUCTION_ITEMS) {
            leaf.addStatement(
                SC.Assignment(rec_state, SC.Call(
                    "reset:bool",
                    "mk",
                    "anchor:Lexer",
                    rec_glob_lex_name,
                    anchor_state
                )),
                SC.Empty()
            );
        }
    }

    return { root, leaves: out_leaves, prods: out_prods.setFilter() };
}

function remapBodyModifiers<B>(map: Map<number, B>, item: Item): Map<number, B> {
    return new Map([...map.entries()]
        .filter(([number]) => number >= item.offset)
        .map(([number, value]) => [number - item.offset, value]));
}

function createVirtualProductions(items: Item[], grammar: Grammar) {
    const productions: Production[] = [];

    //Create virtual productions for this state. 
    for (const item of items) {



        const
            body = item.body_(grammar),
            sym = body.sym.slice(item.offset),
            virtual_body = <ProductionBody>{
                id: grammar.bodies.length,
                name: `virtual-body-${item.id}`,
                BUILT: true,
                FORK_ON_ENTRY: false,
                error: null,
                sym: sym,
                excludes: remapBodyModifiers(body.excludes, item),
                reset: remapBodyModifiers(body.reset, item),
                ignore: remapBodyModifiers(body.ignore, item),
                length: sym.length,
                uid: sym.map(getUniqueSymbolName).join(":"),
                production: null,
            },

            production = <Production>{
                id: grammar.length,
                name: `virtual-${item.id}`,
                type: "production",
                HAS_EMPTY: false,
                CHECKED_FOR_EMPTY: false,
                IMPORTED: false,
                bodies: [virtual_body],
            };

        virtual_body.production = production;

        grammar.bodies.push(virtual_body);
        grammar.push(production);
        productions.push(production);
    }

    buildItemMaps(grammar, productions);

    return productions;
}
