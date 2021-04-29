---
title: "Chapter 0: Introduction"
slug: plume-compiler-ch0
category: Writing Plume's Compiler
---
# Welcome
## Introduction
In this series I'll be going over how I implemented each step of the compilation
process for my custom programming language, Plume, which targets x86-64 assembly. 
Plume is still under heavy 
development as a write this, but I thought it would be a nice chance to relax 
and meditate on some of my decisions. 

This post will go over the general stages of the compiler I am writing, such as 
their inputs and outputs and what invariants they establish. There's a good chance 
that other posts in the series will require working knowledge of Haskell/functional 
programming, but I think this chapter will be a high level overview that 
doesn't go into that much of detail.

The source code for the compiler lives [here](https://github.com/e-hat/plume) in
case you want to follow along, as I may be shouting out some source files.

## Overview of Stages

My compiler is broken into the following stages, each of which I will explain 
in detail:
```
Lexer --> Parser --> Scope Resolver 
--> Type checker --> Bytecode Generator 
--> Register allocater --> x86-64 Translator
```

Other compilers may have some other stages, like stages dealing with syntactic sugar
and built-in assemblers/linkers, but not mine. Also I don't do much at the moment 
about any IR optimizations, but I plan to at some point in the future. Or maybe I wont! :)

### Lexer 
The lexer for Plume (that lives in `Lexer.hs`) is mainly handled by Parsec, which 
is a parser-generator. Lexing/parsing was not a huge interest of mine for this project,
so I decided to rely on a 3rd party library to do the heavy lifting, although I did 
work quite a bit on the syntactical structure of Plume. Lexing involves breaking the source file 
into individual "tokens," based on the keywords and such of my language. In this case,
lexing allows Plume code to have arbitrary amounts of whitespace, much like C++
or Java. These tokens are pretty much the words of the programming language.

```python
Int n := 5
```
will be translated into something like this
```haskell
["Int", "n", ":=", "5"]
```
The following would be lexed in the exact same way:
```python
Int        
    n   :=    
5
```

