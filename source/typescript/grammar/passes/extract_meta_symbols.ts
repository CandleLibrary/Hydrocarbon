import { traverse } from "@candlelib/conflagrate";
import { HCG3Grammar, HCG3Symbol } from "../../types/grammar_nodes";

export function extractMetaSymbols(grammar: HCG3Grammar, error: Error[]) {
    for (const production of grammar.productions) {
        for (const body of production.bodies) {
            body.excludes = [];
            body.reset = [];
            body.ignore = [];
            for (const { node, meta: { mutate, index } } of traverse(body, "sym").makeMutable()) {
                const sym: HCG3Symbol = <any>node;

                if (sym.meta) {
                    switch (sym.type) {
                        case "meta-exclude":

                            if (!body.excludes[index])
                                body.excludes[index] = [];

                            body.excludes[index].push(sym.sym);
                            break;
                        case "meta-ignore":
                            if (!body.ignore[index])
                                body.ignore[index] = [];

                            body.ignore[index].push(...sym.sym);
                            break;
                        case "meta-reset":
                            
                            if (!body.reset[index])
                                body.reset[index] = [];

                            body.reset[index].push(...sym.sym);
                            break;
                        case "meta-reduce":
                        case "meta-error":
                            break;
                    }


                    mutate(null);
                }
            }
        }
    }
}