/* 
 * Copyright (C) 2021 Anthony Weathersby - The Hydrocarbon Parser Compiler
 * see /source/typescript/hydrocarbon.ts for full copyright and warranty 
 * disclaimer notice.
 */
import { TransitionNode, TRANSITION_TYPE } from "../../types/transition_node.js";
import { Symbol } from "../../types/symbol.js";
import { Item } from "../../utilities/item.js";

export function createTransitionNode(
    items: Item[],
    symbols: Symbol[],
    transition_type: TRANSITION_TYPE,
    offset: number = -1,
    peek_level: number = -1,
    UNRESOLVED_LEAF: boolean = false
): TransitionNode {
    return <TransitionNode>{
        UNRESOLVED_LEAF: UNRESOLVED_LEAF,
        PROCESSED: false,
        code: null,
        hash: "",
        symbols,
        transition_type,
        items,
        offset,
        peek_level,
        nodes: []
    };
}
