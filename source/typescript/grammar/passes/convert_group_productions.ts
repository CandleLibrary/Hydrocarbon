import { traverse } from "@candlelib/conflagrate";
import {
    HCG3Grammar,
    HCG3Production,



    HCG3ProductionBody
} from "../../types/grammar_nodes";
import {
    addBodyToProduction,

    Body_Has_Reduce_Action,
    copyBody,
    createProduction,

    createProductionSymbol,
    offsetReduceFunctionSymRefs,
    registerProduction,
    removeBodySymbol,

    replaceBodySymbol,
    Sym_Is_Group_Production
} from "../nodes/common.js";
import { getProductionSignature } from "./common.js";



export function convertGroupProductions(grammar: HCG3Grammar): HCG3Grammar {
    for (const production of grammar.productions) {
        for (const { node: body, meta: b_meta } of traverse(production, "bodies").makeMutable()) {
            let REMOVE_ORIGINAL_BODY = false;
            for (const { node, meta } of traverse(body, "sym").makeMutable()) {
                const sym: any = node;

                REMOVE_ORIGINAL_BODY = processGroupSymbol(sym, REMOVE_ORIGINAL_BODY, body, meta, production, grammar);
            }
            if (REMOVE_ORIGINAL_BODY)
                b_meta.mutate(null);
        }
    }
    return grammar;
}


export function processGroupSymbol(sym: any, body: HCG3ProductionBody, meta: any, production: HCG3Production, grammar: HCG3Grammar, index: number) {


    if (Sym_Is_Group_Production(sym)) {

        if (sym.IS_OPTIONAL) {

            const new_body = copyBody(body);

            removeBodySymbol(new_body, meta.index);

            addBodyToProduction(production, new_body);
        }

        let i = 0;

        for (const group_body of sym.val) {

            const new_body: HCG3ProductionBody = (i == sym.val.length - 1) ? body : copyBody(body);

            if (Body_Has_Reduce_Action(group_body)) {

                // Complex grouped productions (those with reduce actions) will need to be
                // turned into new productions
                const
                    new_production_name = production.name + "_group_" + index + "_" + i + "_";


                let new_production = createProduction(new_production_name, sym);

                addBodyToProduction(new_production, group_body);

                new_production = registerProduction(grammar, getProductionSignature(new_production), new_production);

                const new_production_symbol = createProductionSymbol(new_production.name, sym.IS_OPTIONAL, sym);


                if (new_body == body) {
                    meta.mutate(new_production_symbol, true);
                }
                else
                    replaceBodySymbol(new_body, meta.index, new_production_symbol);

            } else {
                // Simple grouped productions bodies with no reduce actions can rolled into the original
                // production as new bodies. Script refs will need to updated to point to the correct
                // symbol indexes after this process is completed. 
                if (new_body == body) {


                    offsetReduceFunctionSymRefs(body, meta.index, group_body.sym.length - 1);

                    meta.mutate(group_body.sym, true);
                }

                else
                    replaceBodySymbol(new_body, meta.index, ...group_body.sym);

            }


            if (new_body != body)
                addBodyToProduction(production, new_body);


            i++;
        }
    }
}
