---
slug: hello-world
title: Hello world!
flair: true
category: Miscellaneous
---

## Welcome
This is my inaugural blog post. On this blog, I plan to talk about how I solved
certain programming problems that I have come across in my projects, discuss the
architectures of some of my solutions, and maybe talk about other, off-computer 
stuff. Mainly, I just love the idea of having my own corner of the internet that is
mine to do what I want with. 
Also, I like a lot of programming topics and so I am usually a beginner at something,
so I'd like to jot down things that I wished I knew when I started learning
a topic. 

I'll sprinkle in some of my favorite code blocks from my projects to liven things up.

```cpp
// Renderer.cpp
// performing clustered light culling on GPU in efgl
m_nActiveLights->SetData(
    0, 
    sizeof(unsigned int), 
    &N_ACTIVE_LIGHTS_CLEAR_VAL
);
m_nActiveClusters->SetData(
    0, 
    sizeof(DispatchIndirectParams), 
    &N_ACTIVE_CLUSTERS_CLEAR_VAL
);
glMemoryBarrier(GL_SHADER_STORAGE_BARRIER_BIT);

glMemoryBarrier(GL_TEXTURE_FETCH_BARRIER_BIT);
m_DepthMap->Bind(0);

m_CullClusters->Bind();
// probably important that width is divisible by group size
m_CullClusters->Dispatch(
    m_Camera.ScreenWidth  / CULL_CLUSTERS_GROUP_DIM_X, 
    m_Camera.ScreenHeight / CULL_CLUSTERS_GROUP_DIM_Y, 
    1
);

glMemoryBarrier(GL_SHADER_STORAGE_BARRIER_BIT);

m_CompressActive->Bind();
m_CompressActive->Dispatch(NUM_TILES_X, NUM_TILES_Y, NUM_TILES_Z);

glMemoryBarrier(GL_SHADER_STORAGE_BARRIER_BIT);

m_CullLights->Bind();

glm::mat4 view = m_Scene->Camera.GetViewMatrix();
m_CullLights->SetUniform("view", view);
m_CullLights->DispatchIndirect(0);
```

## Plans
### Plume
I'll probably start with a series about Plume, the programming language I am 
writing a compiler for in Haskell. It's been an awesome project because I've 
been able to tackle all sorts of problems that I was honestly scared of when I 
started. This is probably true for other programmers, but I feel like compilers 
(and their inner workings) are something that have often been in the back of my 
mind since I started programming. It *is* the thing you talk to all day with your
keyboard and occasionally yell at. I better just save this for the Plume series.

```python
# hello.plm
# plume test program
def factorial(Int n): Int :=
    if n <= 1 => 1
    else => n * factorial(n - 1)

def main(): Int := {
    Float f :=
        if 5 >= 4 => 2.0
        else => 1.0
    42
}
```

Anyway, I'll talk about the stages of the compiler and some of the fun problems 
I had to solve, and how I tried to tackle them with functional programming. Hopefully
people can read it and get a good picture of how to actually break a compiler 
project into do-able parts. 

### Beyond
Next, I'll do some writing about efgl, my OpenGL rendering engine. This was also something
that had I had a very fuzzy idea of when I started the project, but now I know
(pretty much) how to design one, or at least figure one out when I find it on 
github.

```haskell
-- Syntax.hs
-- ast definition for Plume (at least the interesting node types)
-- with special augmented node type for attaching arbitrary data
type DeclAug t = (Decl t, t)
type ExprAug t = (Expr t, t)

data Decl t
  = Let Type Identifier (ExprAug t)
  | Reassign Identifier (ExprAug t)
  | DefFn Identifier [Param] Type (ExprAug t)
  | CallDecl Identifier [ExprAug t]
  | IfDecl (ExprAug t) (DeclAug t) [(ExprAug t, DeclAug t)] (Maybe (DeclAug t))
  | BlockDecl [DeclAug t]
  deriving (Functor, Foldable, Traversable)

data Expr t
  = Subs Identifier
  | CallExpr Identifier [ExprAug t]
  | -- note that IfExpr REQUIRES an else branch, otherwise a function could only
    -- sometimes return a value
    IfExpr (ExprAug t) (ExprAug t) [(ExprAug t, ExprAug t)] (ExprAug t)
  | BlockExpr [DeclAug t] (ExprAug t)
```

After that, who knows. I'll probably have another project I'm working on by then.
Or maybe I'll write about this website. Or school/my job. 

### Outro
Maybe I'll be the only one that reads this, which is fine with me. Being a young software
engineer in college can be pretty exhausting and disheartening at times, so I'm 
excited to have a spot on the internet that documents my **development** as a **developer**.
There is so much looking ahead that, oftentimes, it is easy to forget how far you've come 
(i.e. I just started applying for summer 2022 internships when summer 2021 hasn't started!!)
I feel like three months ago, I was a completely different programmer, and I felt the same way
three months ago about myself three months before that. I'm excited to see where this progression 
takes me three months from now and I hope it never stops.

To sign off, here a little hello world program in Scala.

```scala
object HelloWorld {
    def main(args: Array[String]) = {
        println("Hello world!")
    }
}
```
