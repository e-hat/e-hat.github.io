---
title: Plume Syntax Reference
slug: plume-syntax
category: Software
---
## Philosophy

*Note: you can [skip down](#declarations-vs-expressions) to the other sections if you are in a hurry.*

I love playing around with programming languages. Each time I learn one, I learn 
a new way of thinking about a problem. I even liked learning VHDL in my digital 
circuits class, which was not a feeling I shared with many of my classmates. When 
I started programming in Scala last fall, I was amazed by the complete paradigm shift
that one of the langauge features had caused for me. This feature was the fact that 
[everything in the language is an expression](https://stackoverflow.com/questions/10022408/is-everything-a-function-or-expression-or-object-in-scala). I could now break down the problems I was solving 
in code into very pure algorithms, for example, a recursive function was cleanly cut into its 
base case and its recursive case by an if statement. 

While I could attempt to *think* about this style as I was writing C and C++, the 
languages still stood in the way as barriers.[^1] However, Scala and other 
high level languages don't give the same low level control the C and C++ do. What 
was I to do? 

Finally, I had found an excuse to make a programming language! (Yes, I'm 
ignoring rust, which just has to be *so* perfect).

So yes, having many forms of expressions is a main motivation and makes me very excited 
to use Plume when it's done. Along the way, I've used this project as an excuse to 
add some other things I have always wanted to see in the same programming language. 
I love how Go uses the `:=` to define variables. I wanted the distinction for reassignment, 
which I found in `<-`. I love how Python uses english words for boolean expressions, and 
some other stuff like that. Anyways, I've talked random thoughts for 
long enough, so here's the syntax rules that this post is actually meant for.

## Declarations vs Expressions
In Plume, there are statements. Each statement is either a *declaration* or an
*expression*. A declaration is something that does not return a value. An expression 
does return a value. 

An important note for all of the examples below is that the Plume 
lexer does not care about whitespace. This means that anywhere you see whitespace 
(and some places you don't) could be a couple spaces or 20 newlines (but please don't).
This is all to say that the whitespace and styling choices I make in these examples 
are how I like to write Plume, but they are not by any means required. 

### Types, Identifiers, and Comments
In Plume, types are a *capital* letter followed by zero or more alpha-numeric characters.

The definition for what constitutes an identifier are [specified by Parsec](https://hackage.haskell.org/package/parsec-3.1.14.0/docs/Text-Parsec-Token.html), the parsing 
library I'm using. Those rules say that an identifier can start with a letter or a '\_' 
and it can contain an alpha-numeric character or a '\_'.

Single-line comments are started with `#`. Multi-line comments work just like how 
they work in C-style languages: `/* [comment content] */`. 

These will be useful to know for the later definitions and examples.

### Declarations
Here's a comprehensive list of declarations, taken straight from [the source code](https://github.com/e-hat/plume) 
(more specifically, `src/Syntax.hs`). 

#### <u>Let</u> 
This takes the following form: `[Type] [Identifier] := [Expression]`. 
Note the use of the assignment operator, `:=`. I wanted assignment in Plume to 
be comparable to mathematical assignment, and different from reassignment.
#### <u>Reassignment</u> 
Here's the form: `[Identifier] <- [Expression]`. It's quite distinct 
from defining a new variable.
#### <u>Function Definition</u> 
Looks like: 
```
def [Identifier]([Type] [Identifier],): [Type] := [Expression]
``` 
This is a little hard to read, so here's a straightforward, Plume-y example: 
```python
def add(Int a, Int b): Int := a + b
```
Note that the parameter list is comma-separated. If the function has no parameters,
it would just be an empty pair of parentheses: `()`. Note the use of the assignment 
operator (`:=`) once again; I really enjoy the "ambiguity" between functions and 
variables in Scala, so I of course needed that here in Plume. I also find that the 
Plume syntax allows for a very intuitive definition of this function without 
any conceptual overhead.

I'll go over the built-in types in Plume later. 
#### <u>Call Declaration</u> 
This is a function call where the result is NOT used. 
Here's what it looks like: 
```
[Identifier]([Expressions],);
```
Once again, this is kind of confusing, so here's an example with our `add` function:
```python
add(5, 6);
```
Of course, this is kind of ridiculous because there is no good reason to ignore 
the result of an addition, but you get the point.

I can't stress this enough, but semicolons have a *very* specific purpose in Plume.
In its current state, they are only used in this instance: at the end of a Call Declaration.

#### <u>Block Declaration</u>
This one is pretty important. A Block Declaration consists of a list of delarations
between an opening and closing curly brace. Here's one in action (note: the code 
is complete gibberish)
```python
{
    Int a := 5
    Int b := 6
    doSomething(a, b, 22);
    a <- a + b * 20
}
```

#### <u>If Declaration</u>
Here's what one of these looks like:

```
if [Expression] => [Declaration]
else if [Expression] => [Declaration] 
...
else => [Declaration]
```
Of course, the `else if` and `else` blocks are optional. Note that the expressions 
used here must return a boolean result, or else you'll get a cheerful type error.

Also note that parentheses around the condition expression are unnecessary.

### Expressions
Expressions are statements that return values. You'll see that there is usually 
an analogous declaration for each expression, so you've already read about most 
of the syntax that's happening in Plume.

#### <u>Substitution</u>
This is something you almost don't think about. It's using a variable's name. 
Here's a "blueprint":
`[Identifier]`. Here it is in some dummy code:
```c
Int a := 22
a <- /* Here's the substitution: */ a /* substitution is over! */ + 1
```

Using this will throw an error if you haven't actually brought your variable name 
into scope yet.

#### <u>Call Expression</u>
This is pretty much the same as a Call Declaration, but it doesn't have a 
semicolon at the end. Here's an example:
```python
def function(Int a): Bool := otherFunction(a) # otherFunction returns a Bool
```
Not much is going on here.

#### <u>Block Expression</u>
Once again, this is very similar to a Block Declaration. The only difference is that 
the Block Expression is a list of zero or more declarations followed by an expression.
Here's an example:
```python
def add(Int a, Int b): Int := {
    Int intermediate := a # an intermediate value, cuz why not??
    intermediate <- intermediate + b 
    intermediate # this block expression ends in a substitution
}
```
This might make you uncomfortable without a `return`. The `return` keyword is used 
in *very* specific instances in Plume. Actually I'll explain it right now since, 
legally speaking, it's an expression.

#### <u>Return</u> 
The `return` keyword/expression is used to write functions of return type `Void`. 
It has a type that is evaluated to `Void`, but you can't actually use the type 
`Void` for a variable (yet...), so the following expression is illegal:
```python
Void v := return # get ready for an error!
```
Here's how you use the `return` expression:

```python
def doNothing(): Void := return
```

Ok that's a goofy example, so here's another:
```python
def somethingUseful(Int a): Void := {
    anotherFunc(a);
    return
}
```
Hopefully you can think of something more useful to do with your Plume code. 

#### <u>If Expressions</u>
These are analogous to If Declarations, but they are a little different. They are 
also one of my favorite parts about writing Plume. They take the following form:
```
if [Expression] => [Expression] 
else if [Expression] => [Expression]
...
else => [Expression]
```
The important difference here between If Declarations and If Expressions is that
If Expressions *require* an `else` block. This will make sense after the following example:
```python
# note: this is one of my favorite pieces of code to write in Plume
def factorial(Int n): Int := 
    if n = 1 => 1
    else     => n * factorial(n - 1)
```
What would it mean if this didn't have the `else` block? If `n != 1`, then 
who knows what would happen. So you need your `else`'s.

Of course, this means the following fun syntax is possible: 

```python 
Int answer := 
    if conditionFunc() and otherConditionFunc() => 42
    else => -1 
```
Anyways, those are If Expressions, aka my favorite part of Plume. 


#### <u>Boolean Expressions</u>
This is similar to how they work in Python. Use `and`, `or`, and `not` for operators
and `true` and `false` for literal values.

#### <u>Arithmetic Expressions</u>
This is pretty straightforward. Here's an example: `Int a := 1 + 2 / 3 * 4`. Let's 
move on.

#### <u>Relational Expressions</u>
These are practically the same as any other language, but here we use `=` instead of `==`. 

## `yield` keyword meme
The parser ain't perfect, as sometimes plume can't tell whether the next line is a part of the current expression. 
That's where the stupid `yield` keyword enters the picture.

```python
def main(): Int := {
  Int a := 5
  -4 # you would think this returns -4...
}
```
This code *should* return `-4`. However, Plume reads this as 
```python 
def main(): Int := {
  Int a := 5 - 4
}
```
which is an error, because this function no longer returns anything. In this obscure case, 
use the `yield` keyword as follows:
```python 
def main(): Int := {
  Int a := 5 
  yield -4
}
```

## Outro
This is definitely incomplete and I'll be adding to it incrementally, but it works for now. 
LMK if you have special things that you want me to explain here. My email: edward[dot]hatfield[at]tufts[dot]edu.
Or just make an issue on [the website's github](https://github.com/e-hat/e-hat.github.io). 

Or, if you *really* want to 
learn how something works, check out [the source code](https://github.com/e-hat/plume).


[^1]: <https://blog.reverberate.org/2013/08/parsing-c-is-literally-undecidable.html>
