import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "fontsource-noto-sans-jp"

import "./index.css"

function IndexPage(props) {
  return (
    <div className="website">
      <section>
          <article className="profile">
            <h1 className="profile-title">eddie hatfield</h1>
            <div className="image">
              <Img 
              style={{
                marginBottom: `10px`,
                margin: `auto`,
              }}
              imgStyle={{
              }} fixed={props.data.file.childImageSharp.fixed} />
            </div>
            <div className="text-section">
            <code className="section-title code">about</code>
            <p className="bio-text">Hi, I'm Eddie. I'm originally from Cincinnati, Ohio (aka "The Paris of the Midwest"), but I'm usually in Boston⛄ for school.  </p>
            <p className="bio-text"> I'm currently a sophomore at Tufts studying CompSci and Applied Math 🐘 and I'm a student developer on <a href="https://www.jumbocode.org/">JumboCode</a>, where we make hi-tech websites for non-profits.</p>
            <p className="bio-text">I enjoy playing ping pong🏓, playing video games🕹️, meditating 🧘‍♂️, obsessing over real-time rendering techniques🖥️, and learning more about all things programming.</p>
            <code className="section-title">resume/contact/presence</code>
            <p className="bio-text">My resume can be found <a href={`eddiehatfield_resume.pdf`} download >here</a>. You can reach me at edward.hatfield at tufts dot edu and I'm <a href="https://github.com/e-hat" >e-hat</a> on Github🐙. Oh, and my linkedin is <a href="https://www.linkedin.com/in/eddie-hatfield-078a27160">right here</a> 🤝.</p>
            <code className="section-title">projects</code>
            <p className="bio-text">
                Here are some of my favorite projects I've worked on over the years:
                <ul>
                    <li><code>efgl</code> - A rendering engine written in <code>OpenGL</code> and <code>C++</code> that implements a clustered-forward pipeline with GPU compute. At the moment, I'm adding support for PBR. <a href="https://github.com/e-hat/efgl" >github</a></li>
                    <li><code>sga</code> - A genetic algorithm framework that I wrote in modern <code>C++</code>. It allows the user to define their own genotypes, evaluation functions, crossover functions, and mutation functions and handles the actual algorithm on its own. <a href="https://github.com/e-hat/SGA">github</a></li>
                    <li><code>cycloid-animation</code> - One day, I was messing around on desmos with <a href="https://en.wikipedia.org/wiki/Cycloid" >cycloid</a> graphs and I made an animation out of them that you can find <a href="https://editor.p5js.org/deadbird/present/-1TmeUp-Q">here</a>. Note the slider on the left - it changes the level of detail that the animation is drawn with, and results in a practically infinite number of different, beautiful animations!</li>
                    <li><code>onewknd</code> - My implementation of the <a href="https://raytracing.github.io/books/RayTracingInOneWeekend.html">ray-tracing in one weekend</a> tutorial (<a href="https://github.com/e-hat/onewknd">github</a>). I'm currently working on a rewrite in <code>scala</code> to flex my functional programming skills.</li>
                    <li><code>mnist-gan</code> - One of my first forays into ML with <code>Tensorflow</code> and <code>python</code> where I implemented a <a href="https://en.wikipedia.org/wiki/Generative_adversarial_network">generative adversarial network</a> to generate handwritten digits. I used a Deep Convolution GAN (DCGAN) with a Wasserstein loss function. <a href="https://github.com/e-hat/mnistgan">github</a> </li>
                    <li><code>scramble</code> - A small program I wrote in <code>Go</code> that takes an english word and finds valid anagrams for it. <a href="https://github.com/e-hat/scramble">github</a></li>
                    <li><code>tldr</code> - Another small <code>Go</code> program that looks up other command line tools and prints a description. <a href="https://github.com/e-hat/tldr">github</a></li>
                </ul>
            </p>
            <code className="section-title">experience</code>
            <p className="bio-text">
              <ul>
                <li>Student developer, JumboCode. Fall 2020 - present.</li>
                <li>Intern, Discover Technologies. April - August 2020.</li>
                <li>Intern, Discover Technologies. May - August 2019.</li>
              </ul>
            </p>
            <code className="section-title">what i'm up to</code>
            <p className="bio-text">Right now, I'm in the optimization phase of my clustered rendering implementation on my <code>efgl</code> project (see above). This means analyzing my hardware to figure out optimal thread counts and memory layouts for my compute shaders. </p>
            <p className="bio-text">In the background, I'm watching lecture after lecture on PBR and reading through some papers to find a very modern approach to take. </p>
            <p className="bio-text">In the background of the background 🤔 I'm reading through some <code>Vulkan</code> tutorials since, after <code>efgl</code> is finished I want to tackle making a highly performant GPU-driven renderer, hopefully with support for ray-tracing!🤩</p>
            <p className="bio-text">So yes, with classes, it's a lot of stuff. But I'm loving every second of it!</p>
            </div>
          </article>
      </section>
      <footer>Copyright Eddie Hatfield © 2020</footer>
      </div>
  );
}

export default IndexPage

export const query = graphql`
query {
    file(sourceInstanceName: {eq: "static"}, name: {eq: "mountains"}) {
        childImageSharp {
          fixed(width:1000,height:220) {
            ...GatsbyImageSharpFixed
          }
        }
      }
}
`