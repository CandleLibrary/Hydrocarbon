import { EOF_SYM } from "../../types/grammar.js";
import { RecognizerState, TRANSITION_TYPE } from "../../types/recognizer_state.js";
import { RenderBodyOptions } from "../../types/render_body_options";
import { getClosure, getFollowClosure } from "../../utilities/closure.js";
import { getFollow } from "../../utilities/follow.js";
import { getGotoItems, Item, itemsToProductions } from "../../utilities/item.js";
import { SC } from "../../utilities/skribble.js";
import { getSymbolsFromClosure } from "../../utilities/symbol.js";
import { getTransitionTree } from "../../utilities/transition_tree.js";
import { const_EMPTY_ARRAY } from "./const_EMPTY_ARRAY.js";
import { createRecognizerState } from "./create_recognizer_state.js";
import { processProductionChain } from "./process_production_chain.js";
import { buildPeekSequence } from "./yield_peek_states.js";


export function yieldCompletedItemStates(end_items: Item[], options: RenderBodyOptions, offset: number): RecognizerState[] {

    if (end_items.length == 0) return [];

    const

        output_states: RecognizerState[] = [],

        { grammar, goto_items } = options;

    let
        default_end_items: Item[] = [],
        roots = [],
        closures = [];

    if (goto_items.length > 0 && end_items.length > 1) {

        const
            original_prods = itemsToProductions(end_items, grammar),
            prods = end_items.map(i => processProductionChain(new SC, options, itemsToProductions([i], grammar))[0]),
            active_items = getGotoItems(grammar, prods, goto_items).map(i => i.increment());

        if (active_items.length == 1) {

            const
                prod = active_items[0].decrement().getProductionAtSymbol(grammar).id,
                item_index = prods.indexOf(prod),
                item = end_items[item_index],
                symbols = getSymbolsFromClosure(getClosure(active_items, grammar), grammar);

            output_states.push(createRecognizerState([item], symbols, TRANSITION_TYPE.ASSERT_END, offset));

            end_items.splice(item_index, 1);

            default_end_items = end_items;

        } else {

            let { tree_nodes } = getTransitionTree(
                grammar,
                end_items,
                options.global_production_items/*goto_items*/,
                10, 8, 200, 0,
                goto_items.filter(i => original_prods.includes(+(i.sym(grammar).val))).map(i => {

                    let
                        item = i.increment(),
                        closure = getFollowClosure(getClosure([item], grammar), goto_items, grammar);

                    const
                        index = original_prods.indexOf(i.getProductionAtSymbol(grammar).id),
                        c = closure.slice();

                    roots.push(index);

                    c.unshift(end_items[index]);

                    closures.push(c);

                    return { final: 0, sym: null, index, closure: closure };
                }));

            if (tree_nodes.length > 0) {
                output_states.push(...buildPeekSequence(
                    tree_nodes,
                    options,
                    offset,
                    (state, options, offset) => {
                        const { items } = state;
                        const selected = items.sort((a, b) => a.body - b.body);
                        state.transition_type = TRANSITION_TYPE.ASSERT_END;
                        state.items = selected.slice(0, 1);
                        state.completing = true;
                    },
                    const_EMPTY_ARRAY,
                    -1));
            } else {
                default_end_items = end_items;
            }
        }
    } else {
        default_end_items = end_items;
    }

    default_end_items = default_end_items.setFilter(i => i.id);

    for (const item of default_end_items) {

        const symbols = getFollow(item.getProduction(grammar).id, grammar);

        if (symbols.length == 0) symbols.push(EOF_SYM);

        output_states.push(createRecognizerState([item], symbols, TRANSITION_TYPE.ASSERT_END, offset + 1, 0));
    }

    return output_states;
}