---
title: Plume Syntax Reference
slug: plume-syntax
category: Miscellaneous
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

So yes, making expressions assignable is a main motivation and makes me very excited 
to use Plume when it's done. Along the way, I've used this project as an excuse to 
add some other things I have always wanted to see in the same programming language. 
I love how Go uses the `:=` to define variables. I wanted the distinction for reassignment, 
which I found in `<-`. I love how Python uses english words for boolean expressions, and 
some other stuff like that. Anyways, I've talked too much about random thoughts for 
long enough, so here's the syntax rules that this post is actually meant for.

## Declarations vs Expressions
In Plume, there are statements. Each statement is either a *declaration* or an
*expression*.

[^1]: <https://blog.reverberate.org/2013/08/parsing-c-is-literally-undecidable.html>
