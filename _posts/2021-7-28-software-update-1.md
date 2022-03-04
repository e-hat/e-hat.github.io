--- 
slug: software-update-1
title: Software Update
flair: true 
category: Software 
---
## Hello There
Hey people, or person. Not sure how many people read this. This is the first of 
some unknown number of "Software Update" posts that I'll do on here. In these posts, 
I'll go over the current state of my projects and my plans for them. I'll just 
write these up whenever I'm bored and on a road trip or something. Let's get 
into it.

## EFGL
Good old EFGL. I haven't worked on it in a while, but I do have lots of plans 
for it. The last feature I added to it was the ability to generate a sphere 
primitive so that I could show off the PBR shader I implemented. It looks pretty 
awesome, I think. 

However, the real task for this PBR feature I'm adding is to make it work 
for models loaded from files, not just random geometry I throw together on startup.
This means that I have to make loading PBR textures a part of my model loading 
pipeline. For example, instead of loading diffuse and specular textures, I need 
to load metalness, albedo, and roughness textures. The annoying part of this 
comes from the fact that I need to either find a way to get Assimp, the model 
loading library I use, to do this correctly for .obj formats or I need to find 
a new model loading library :(. 

While I don't think Assimp supports this officially, I am pretty sure that I can 
just treat the specular textures like they are metalness and diffuse textures 
like they're albedo. For roughness, I'll just shop around for what types of 
textures Assimp can load and I'll use one of those. Then I have to add an `IMaterial`
subclass for PBR textures. After this, I'll update my shader code to sample these 
values from textures instead of having them just be uniform floats. Then, and only 
then, I'll FINALLY be done with PBR and I can move on to the other stuff I want 
to do, like:
* Skyboxes. These just make things look so much better and I don't think they're 
that hard. It'll definitely involve designing a new class and whatnot but I'm up 
for it. I'm also excited to see if my wrappers for OpenGL textures are up to 
the task.
* IBL. This will take a little bit of math to get right but when it is right, it's 
going to look awesome.
* Shadowmaps. Who knows what this will do to my framerates, but it's just such a 
cool way to go about the shadow problem that I need to do it. However, I worry 
about how my shader is getting huge, since it deals with clustered shading, 
PBR lighting, IBL, and shadowmaps. Eek - forward shading is scary.
* PCSS Shadowmaps. Apparently this is as easy as switching out a PCF step in the 
shadowmap implementation.  We'll see. This would be awesome though.

Ok, that's it for EFGL, let's move on to something else.

## xm
This project is just **SO FUN**. The info is on [the github page](https://github.com/e-hat/xm),
but I'll give a quick rundown here. Pretty much, I want to make a command-line 
equivalent of the mobile app that controls my headphones, since the app has no desktop equivalent. 
The crux of this project 
is whether or not I can reverse engineer the bluetooth communication protocol that 
the app uses to talk to my headphones. I have tried many things to figure this out:

### ubertooth to the rescue?
I bought the ubertooth one, which is pretty fun to use but did not work as advertised. 
It has the capabilities to listen to bluetooth LE communications happening around it, 
which is creepy but also exactly what I needed for this project. The only issue is 
that it doesn't pick anything up. I have tried debugging it and talking to the 
creators about the issues, but it just doesn't seem to work.

### running the app on my computer??
I really thought this one would be easier. First, I tried this with the various
android emulators out there. Turns out none that I can find support bluetooth 
communication, so that's out. 

Next, I thought I'd try running Android x86 on virtual machine. This could still 
possibly work. I have gotten bluetooth to work on it. I have gotten Google Play
Store apps to run on it, which require turning on some special settings. I 
haven't gotten both to work at the same time. The issue with this is that I'm at 
the mercy of the fickleness of virtualbox, which I'm not a huge fan of. We'll 
see if this one plays out. If it does, I'm sure I'll run into some problems 
with listening to the communications, but after debugging those I should be able 
to directly see what is contained in the app's packets using Wireshark.

### The Straight Up Approach
This is the approach where I download the apk for the app and I use a decompiler 
to reverse engineer it. This one is difficult but I feel that it has the 
highest chance of working since the code for the bluetooth communications must 
be in this apk. It's not as fun as the ubertooth one and it isn't as "easy" as 
running the app on my computer and reading the bluetooth communications with 
Wireshark, but I think it's a useful experience to have and it would be super 
cool to figure it out.

This also turns out to be the most promising approach listed here. I made some 
great strides in the past week with this method: I found the location in the 
decompiled source where the value of the setting I'm interested in is serialized 
to be sent to the headphones. This is what I'll be imitating in my python code. 
However, I believe that the hard part will be finding what other metadata is 
sent in that packet or whatever. One thing that I fear is that these communications 
will be encrypted or will somehow detect that my program isn't the app, but 
we'll see.

## Plume's Compiler
This is so close yet so far from being finished. I am doing things in an ugly way 
at the moment just to make progress, but there are a couple things that will 
need to be changed. First of all, I think I need another layer of bytecode to 
further abstract away from the "quirks" of x86-64 assembly. There are so many 
little rules involved with it that it deserves a lot more thought. 

After I've finished my first "pass" of the compiler, I need to add some basic constructs, 
first and foremost for-loops. I mean seriously, what language doesn't have them 
(other than Haskell, which is the language I am writing the Plume compiler in). 
Then, I need strings/arrays on the stack. No heap nonsense yet. I also need to add 
types to my custom bytecode, which I can't believe I thought I wouldn't need. 
This will allow me to support floating point arithmetic. 

Then, whenever all the boring "necessary" stuff is out of the way, I want to start 
adding cool features to it, like pattern-matching and algebraic data types. My primary 
goal for Plume is to make it fun to write, and I have tons of fun with these two 
concepts in other programming languages. I want Plume to be weird and mix a bunch 
of different paradigms. I'm super excited to have this project to work on throughout
the rest of college and beyond.

## Outro
Ok, that's the software update. Lots of stuff on my mind as the summer winds to a
close. Thanks for reading.
