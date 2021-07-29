---
layout: base
title: Homepage
styles: [index]
typeout_header: "eddie hatfield"
---
{% include subtitle.html words="programmer in boston/cincinnati" %}
{% include navigation.html %}
{% include floated-image.html side="left" src="headshot.jpg" 
    alt="A picture of me, Eddie"
        width="150px" height="auto"
        caption="me, at Disney Land, circa 2017"
        %}
{% include section-title.html words="about" %}

Hi, I'm Eddie. I'm originally from Cincinnati, Ohio (aka "The Paris of the Midwest"),
but I'm usually in Boston for school.

I'm currently a sophomore at Tufts studying CS and I'll probably end up with at 
least a minor in Math. I'm also a developer on [JumboCode](https://www.jumbocode.org/),
where we make hi-tech websites for non-profits.

I love playing ping pong, playing piano, watching tv shows, playing video games,
and learning about space (if you couldn't tell). Some of my favorite shows are 
BoJack Horseman, Curb Your Enthusiasm, and anything in the Breaking Bad universe. 

I have somewhat broad technical interests. In general, I like solving engineering problems that don't 
have easy "yes/no" answers. I think I could be interested in anything that checks that box. 
This has manifested itself in projects with computer graphics, compilers, 
reverse-engineering, and machine learning.

I am also dedicated to mastering the tools I use every day as a software engineer. 
These include vim, git, zsh, tmux, Ubuntu, Visual Studio, Firefox, DuckDuckGo, and the keyboard 
I'm typing this on. If you ever find a trick you think I'd like, please send it my way.

I am currently an intern at [Stellar Science](https://www.stellarscience.com/),
where I write C++ and do fun science stuff. I'll also mention that any opinions 
that I express here are not that of my employer. 

{% include section-title.html words="resume/contact/presence" %}
My resume can be found [here](/assets/files/eddiehatfield_resume.pdf).
You can reach me at edward.hatfield[@]tufts[.]edu and I'm [e-hat](https://github.com/e-hat)
on Github. Oh, and my linkedin is [right here](https://www.linkedin.com/in/eddie-hatfield-078a27160) 🤝

{% include section-title.html words="projects" %}

Here are some of my favorite projects I've worked on over the years:

* **plume** - A C-level programming language that compiles to x86-64 assembly.
  I am currently writing its compiler in Haskell. It has a strong static type
  system and a terse, clear syntax. I've written about it [here](/blogs)
[github](https://github.com/e-hat/plume)
* **efgl** - A rendering engine written in OpenGL and C++ that 
implements a clustered-forward pipeline with GPU compute. At the moment, 
I'm adding support for PBR. [github](https://github.com/e-hat/efgl)
* **sga** - A genetic algorithm framework that I wrote in modern C++.
It allows the user to define their own genotypes, evaluation functions, crossover 
functions, and mutation functions and handles the actual algorithm on its own. 
[github](https://github.com/e-hat/SGA)
* **cycloid-animation** - One day, I was messing around on desmos with 
[cycloid](https://en.wikipedia.org/wiki/Cycloid) graphs and I made 
an animation out of them that you can find [here](https://editor.p5js.org/deadbird/present/-1TmeUp-Q). 
Note the slider on the left - it changes the level of detail that the animation is 
drawn with, and results in a practically infinite number of different, beautiful animations!
* **onewknd** - My implementation of the 
[ray-tracing in one weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html)
tutorial ([github](https://github.com/e-hat/onewknd)). I'm currently 
working on a [rewrite in Haskell](https://github.com/e-hat/RayTracingOneWeekend-Haskell)
to flex my functional programming skills.
* **mnist-gan** - One of my first forays into ML with Tensorflow and 
python where I implemented a [generative adversarial network](https://en.wikipedia.org/wiki/Generative_adversarial_network)
to generate handwritten digits. I used a Deep Convolution GAN (DCGAN) with a Wasserstein loss function.
[github](https://github.com/e-hat/mnistgan)
* **scramble** - A small program I wrote in Go that takes an english
word and finds valid anagrams for it. [github](https://github.com/e-hat/scramble)
* **tldr** - Another small Go program that looks up other command line
tools and prints a description. [github](https://github.com/e-hat/tldr)

{% include section-title.html words="about this website" %}

The source code lives [here](https://github.com/e-hat/e-hat.github.io). 
Check it out if you want to contribute or if you want my art.
