/* 
 * Copyright (C) 2021 Anthony Weathersby - The Hydrocarbon Parser Compiler
 * see /source/typescript/hydrocarbon.ts for full copyright and warranty 
 * disclaimer notice.
 */
import { Lexer } from "@candlelib/wind";
import { ParserResultData } from "./parser_result_data.js";
import { LexerError } from "./lexer_error.js";


export function errorReport<T>(tk: number, lex: Lexer, off: number, cycles: number, total_cycles: number, fork_depth: number): ParserResultData<T> {
    if (tk == 0) {
        return {
            value: null,
            error: new LexerError("Unexpected end of input", lex),
            cycles,
            total_cycles,
            off,
            fork_depth,
            efficiency: 0
        };
    } else {
        lex.tl = 0;
        lex.next();
        return {
            value: null,
            error: new LexerError(`Unexpected token -> ${lex.tx}`, lex),
            cycles,
            total_cycles,
            off,
            fork_depth,
            efficiency: 0
        };
    }
}
