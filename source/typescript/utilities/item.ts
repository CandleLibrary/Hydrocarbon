import { EOF_SYM, Grammar, ProductionBody } from "../types/grammar.js";
import { Production } from "../types/production";
import { Symbol } from "../types/symbol";
import { SymbolType } from "../types/symbol_type";
import { getRootSym, getUniqueSymbolName, isSymAProduction, SymbolToStringUnformatted } from "./symbol.js";

export const enum ItemIndex {
    body_id = 0,
    length = 1,
    offset = 2
}
export class ItemGraphNode {
    subitems: ItemGraphNode[];
    supitems: ItemGraphNode[];
    item: Item;

    id?: number;
    name?: string;

    /**
     * Higher score represents a greater depth from the root nodes. 
     */
    score?: number;
}
export class Item extends Array {

    static fromArray(array: Array<any>): Item {
        if (array instanceof Item) return new Item(array.body, array.len, array.offset, array.follow);

        const new_item = new Item(array[ItemIndex.body_id], array[ItemIndex.length], array[ItemIndex.offset], (<Item>array).follow);

        new_item.IS_LR = array.IS_LR;

        return new_item;
    }

    IS_LR: Boolean;

    USED: boolean;
    follow: Symbol;

    constructor(body_id: number, length: number, offset: number, follow: Symbol = EOF_SYM) {
        //@ts-ignore
        super(body_id, length, offset);

        this.follow = follow;

        this.USED = false;

        this.IS_LR = false;
    }

    get atEND(): boolean {
        return this.offset >= this.len;
    }

    get v(): string | number {
        return getUniqueSymbolName(this.follow);
    }

    get id(): string {
        return "" + this.body + ":" + this.len + ":" + this.offset + "|-";
    }

    get full_id(): string {
        return this.id + this.v;
    }

    get body(): number {
        return this[ItemIndex.body_id];
    }

    get len(): number {
        return this[ItemIndex.length];
    }


    get offset(): number {
        return this[ItemIndex.offset];
    }

    body_(grammar: Grammar): ProductionBody {
        return grammar.bodies[this.body];
    }

    sym(grammar: Grammar): Symbol {
        return this.body_(grammar).sym[this.offset];
    }

    render(grammar: Grammar): string {

        const a = this.body_(grammar).sym
            .map(sym => sym.type == SymbolType.PRODUCTION ? { val: "\x1b[38;5;8m" + grammar[sym.val].name.replace(/\$/, "::\x1b[38;5;153m") } : sym)
            //@ts-ignore
            .flatMap((sym, i) => (i == this.offset) ? ["\x1b[38;5;226m•", SymbolToString(sym)] : SymbolToString(sym));
        if (a.length == this.offset)
            a.push("\x1b[38;5;226m•");
        return a.join(" ");
    }

    renderUnformatted(grammar: Grammar): string {

        const a = this.body_(grammar).sym
            .map(sym => sym.type == SymbolType.PRODUCTION ? Object.assign({}, sym, { val: grammar[sym.val].name }) : sym)
            .map(sym => getRootSym(sym, grammar))
            //@ts-ignore
            .flatMap((sym, i) => (i == this.offset) ? ["•", SymbolToStringUnformatted(sym)] : SymbolToStringUnformatted(sym));
        if (a.length == this.offset)
            a.push("•");

        return a.join(" ");
    }

    renderUnformattedWithProductionAndFollow(grammar: Grammar): string {
        return this.renderUnformattedWithProduction(grammar) + "|" + this.follow.val;
    }

    renderUnformattedWithProduction(grammar: Grammar): string {
        return (this.getProduction(grammar).id + ":" + this.body) + " " + this.body_(grammar).production.name + "=>" + this.renderUnformatted(grammar);
    }

    renderWithProduction(grammar: Grammar): string {
        return `\x1b[48;5;233m\x1b[38;5;226m[ ${this.renderProductionName(grammar)} \x1b[38;5;226m⇒ ${this.render(grammar)} \x1b[38;5;226m]\x1b[0m`;
    }

    renderWithProductionAndFollow(grammar: Grammar): string {
        //@ts-ignore
        return `\x1b[48;5;233m\x1b[38;5;226m[ ${this.renderProductionName(grammar)} \x1b[38;5;226m⇒ ${this.render(grammar)}, ${this.v} \x1b[38;5;226m]\x1b[0m`;;
    }

    getProduction(grammar: Grammar): Production {
        //@ts-ignore
        return this.body_(grammar).production;
    }

    getProductionAtSymbol(grammar: Grammar): Production {
        //@ts-ignore
        const prod = this.sym(grammar).val;

        return grammar[prod];
    }


    renderProductionName(grammar: Grammar): string {
        //@ts-ignore
        return `\x1b[38;5;8m${this.body_(grammar).production.name.replace(/\$/, "::\x1b[38;5;153m")}`;
    }

    renderProductionNameWithBackground(grammar): string {
        //@ts-ignore
        return `\x1b[48;5;233m\x1b[38;5;8m ${this.body_(grammar).production.name.replace(/\$/, "::\x1b[38;5;153m")} \x1b[0m`;
    }

    renderSymbol(grammar: Grammar): string {
        const sym = this.sym(grammar);
        //@ts-ignore
        return `\x1b[48;5;233m ${SymbolToString(sym)} \x1b[0m`;
    }

    increment(): Item | null {
        if (this.offset < this.len) {

            const item = new Item(this.body, this.len, this.offset + 1, this.follow);
            item.IS_LR = this.IS_LR;
            return item;
        }
        return null;
    }

    decrement(): Item | null {
        if (this.offset > 0) {
            const item = new Item(this.body, this.len, this.offset - 1, this.follow);
            item.IS_LR = this.IS_LR;
            return item;
        }
        return this;
    }

    match(item: Item): boolean {
        return item.id == this.id;
    }

    toString(): string {
        return this.id;
    }

    getFunctions(grammar: Grammar) {
        const body = this.body_(grammar);

        if (this.atEND) {
            return body.functions.filter(fn => {
                return fn.offset >= this.offset;
            });
        } else {
            return body.functions.filter(fn => {
                return fn.type == "INLINE" && fn.offset == this.offset;
            });
        }
    }

}
export function getAccompanyingItems(grammar: Grammar, active_productions: number[], items: Item[], out: Item[] = [], all = false) {

    const prod_id = new Set(active_productions);

    const to_process = [];

    for (const item of items.reverse()) {
        if (!item || item.atEND) continue;

        const sym = item.sym(grammar);
        if (isSymAProduction(sym) && prod_id.has(<number>sym.val)) {

            out.push(item);
            if (item.increment().atEND) {
                to_process.push(item);
            }
        }
    }
    if (all)
        for (const item of to_process) {
            getAccompanyingItems(grammar, item.getProduction(grammar).id, items, out, all);
        }
    return out;
}

export function itemsToProductions(items: Item[], grammar: Grammar): number[] {
    return items.map(i => i.getProduction(grammar).id);
}


export function doItemsHaveSameSymbol(items: Item[], grammar: Grammar) {
    return items.every(i => !i.atEND && i.sym(grammar).val == items[0].sym(grammar).val);
}