<h1 align=center>
    <img src="./flavor/cfw-flame-w-lib.svg" type="text/svg" rel="svg" height=80>
</h1>

<h3 align=center>Recursive Descent Parser Compiler</h3>

<p align=center> <sub><b>v0.7.1</b></sub> </p>


Reads custom **.hcg** grammar files and builds recursive descent parsers. Currently supports parser targets for Javascript, Typescript, and WebAssembly

## Usage

#### Write A Grammar

```ini
# my_json_like_language.hcg
@IGNORE g:ws g:nl

<> JSON > object                                   

<> value > object
    | array
    | t:true                                        f:r{ true }
    | t:false                                       f:r{ false }
    | t:null                                        f:r{ null }
    | tk:number                                     f:r{ parseFloat($sym1) }
    | tk:string                                     f:r{ $sym1.slice(1,-1) }

<> object > \{  element(*\, )  \}                   f:r{ Object.fromEntries($$sym2 || [])  }

<> element > tk:string \: value                     f:r{ [$sym1.slice(1,-1), $sym3] }

<> array > \[ value(*\, ) \]                        f:r{ $$sym2 || [] }

<> number > g:num ( \. g:num )? ( \e g:num )?

<> string > \" (RST g:nl) ( g:id | g:num | g:sym )(*) \"
```


#### Install Hydrocarbon & Compile Parser
```bash
:~$ yarn global add @candlefw/hydrocarbon

:~$ hydrocarbon compile --recognizer wasm --completer js \./my_json_like_language.hcg
```

#### Use Parser

```js
import json_parse from "./parser.js";

const { result } = json_parse('{"Hello World":[3, 1, 4, 1, 5, 9.265] }');

result[0]        // => { 'Hello World' : [3, 1, 4, 1, 5, 9.265]  }
typeof result[0] // => "object"

```

# Version 1 Feature set

- [*] Grammer for creating parsers 
- Compile parser for use TypeScript/Javascript with Web Assembly Recognizer
- Production Selection to parse individual productions instead of the goal production
- TypeScript Definitions for parser, recognizer & environment
- Documentation for the above features.

# Version 2 Feature set
- Streaming Parsing & Restartable recognition 
- Parallel Parsing - Allow blocks to be parsed concurrently
- Automatic AST generating 
- Online Demonstration 
- Syntax Highlighting Plugin
- Revisions to Grammer
- Support for other grammar files.

# Version 3 Feature set
- Rewrite parser compiler in a compiled language
- Make parser front end for other languages

# Motivation

The primary reason this exists is to provide a flexible, easy to use parser compiler to handle the parsing demands of CandleFW libraries such as Wick, JS, TS, Wax, and CSS. It provides a way of rapidly define new language syntax and is able combine grammars of different languages into one meta-parser. 

# Parser Design

The core functionality of a Hydrocarbon parser is split across two major parts, a **recognizer** and a **completer**. 

The **recognizer** performs the heavy lifting by parsing a text input, identifying sequences of text that belong to productions of the grammar, and generating parse actions. There are four actions the recognizer can issue: ACCEPT, SHIFT, REDUCE, and SKIP. These actions are encoded in 32bit integers and stored in an action buffer. 

The **completer** reads actions from the action buffer, and applies them to the text input. It may also call user defined functions that accepts tokens generated by SHIFT actions. These functions may optionally return values that can be received by other custom functions. Both tokens, and values returned from the custom functions, get pushed to an output stack, which then returned by the **completer** once it finishes applying the parse actions. A primary use of the **completer** is to construct ASTs (Abstract Syntax Trees) from the text input, but it can be used for other tasks such as generating text highlighting or serving as a script interpreter.

The split functions allow the **recognizer** to be defined using C/C++ friendly syntax that is then compiled to a WASM module. The **completer** is written in TypeScrip/JavaScript. Future work will allow both the completer and the recognizer to be used in  languages other than TypeScript/JavaScript.

# Documentation

- Grammar - TODO
- Parser - TODO
- CLI - TODO + see below

# CLI Usage

### ``hydrocarbon compile <arguments?> <file path to .hcg>``

Compiles a parser from a Hydrocarbon grammar file

### Optional Arguments
| Argument | Value | Description |
|--|:--:|--|
| `--workers` |  `<number>`| Number of worker threads used to compiler parser. <br> Defaults to 1|
| `--output_dir` |  `<file path>`| Output directory for parser.<br> Defaults to the CWD|
| `--name` |  `<string>`| Name to give the parser file.<br> Defaults to 'parser'|
| `--recognizer_type` |  `<js \| wasm>`| Type of recognizer to create may either be `wasm` or `js`.<br> Defaults to `js`|
| `--completer_type` |  `<ts \| js>`| Type of recognizer to create may either be `ts` or `js`.<br> Defaults to `js`|
| `--annotations` | none | Add annotated comments to recognizer.<br> Only applicable when the recognizer is a `js` type.|

# Contribution

If you have any problems using hydrocarbon, or would like to suggest a new feature, please open an [issue](https://github.com/CandleFW/hydrocarbon/issues).

If you would like to contribute to the development of hydrocarbon, fork the repository, create and develop on a new branch, and create a pull request from your forked repo.

# License

[MIT](./LICENSE)

