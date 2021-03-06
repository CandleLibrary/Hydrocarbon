/* 
 * Copyright (C) 2021 Anthony Weathersby - The Hydrocarbon Parser Compiler
 * see /source/typescript/hydrocarbon.ts for full copyright and warranty 
 * disclaimer notice.
 */
import { LexerError } from "./lexer_error";


/**
 * Return value of the parser.
 * 
 * Includes parser meta data.
 * 
 */
export interface ParserResultData<T> {
    /**
     * First object off the output stack
     */
    value: T;
    /**
     * Error message if parse failed to parser the input.
     */
    error: LexerError;
    /**
     * Number of cycles taken to get the result
     */
    cycles: number;
    /**
     * Total number of cycles taken in all forked paths
     */
    total_cycles: number;
    /**
     *
     */
    off: number;
    /**
     * Number of forks closures to get to the result or error
     */
    fork_depth: number;
    /**
     * cycles devided by total_cycles
     */
    efficiency: number;
}
