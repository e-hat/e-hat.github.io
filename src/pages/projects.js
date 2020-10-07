import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import ProjectCard from "../components/project-card"

import "./projects.css"

class ProjectsPage extends React.Component 
{
    render() {

      let getImg = (name) => {
        return <Img fixed={this.props.data[name].childImageSharp.fixed} style={{borderRadius: `10px`}}/>
      }

      const cardInfoList = [
          
          {
            title: 'Cycloid Animation',
            info: 'A fun animation that I created a couple years ago using p5.js. Feel free to play with the slider and see what happens!',
            img: getImg('CycloidAnim'),
            href: "https://editor.p5js.org/deadbird/present/-1TmeUp-Q"
          },
          {
            title: 'SGA',
            info: 'SGA (Simple Genetic Algorithm) is a genetic algorithm written in C++ that is entirely customizable.',
            img: getImg('sga'),
            href: "https://github.com/e-hat/SGA",
          },
          {
            title: 'efgl',
            info: 'An abstraction of OpenGL with some useful features to reduce the overhead of experimenting with different rendering techniques.',
            img: getImg('efgl'),
            href: "https://github.com/e-hat/efgl",
          },
          {
            title: 'JumboEngine',
            info: 'Game engine based on series by The Cherno on YouTube that will eventually feature a rendering engine of my own design.',
            img: getImg('JumboEngine'),
            href: "https://github.com/e-hat/JumboEngine",
          },
          {
            title: 'scramble',
            info: 'Command line tool written in Go for generating anagrams of a given word.',
            img: getImg('scramble'),
            href: "https://github.com/e-hat/scramble",
          },
          {
            title: 'tldr',
            info: 'A simple command line tool for retrieving concise explanations of other commands, written in Go.',
            img: getImg('tldr'),
            href: "https://github.com/e-hat/tldr",
          },
          
          
      ]

      const cards = cardInfoList.map((cardInfo) => 
          <ProjectCard className="list-item" {...cardInfo} />
      )

      return (
          <Layout>
              <h2 style={{paddingTop: `5px`, paddingBottom: `10px`}}>Projects</h2>
              <section>
                  <ul>{cards}</ul>
              </section>
          </Layout>
      )
    }
}


export default ProjectsPage

export const query = graphql`
query {
    tldr: file(sourceInstanceName: {eq: "static"}, name: {eq: "tldr_card"}) {
      childImageSharp {
        fixed(width:220,height:80) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    sga: file(sourceInstanceName: {eq: "static"}, name: {eq: "evolution"}) {
      childImageSharp {
        fixed(width:220,height:80) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    scramble: file(sourceInstanceName: {eq: "static"}, name: {eq: "scramble"}) {
      childImageSharp {
        fixed(width:220, height:80) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    efgl: file(sourceInstanceName: {eq: "static"}, name: {eq: "efgl"}) {
      childImageSharp {
        fixed(width:220, height:80) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    JumboEngine: file(sourceInstanceName: {eq: "static"}, name: {eq: "JumboEngine"}) {
      childImageSharp {
        fixed(width:220, height:80) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    CycloidAnim: file(sourceInstanceName: {eq: "static"}, name: {eq: "CycloidAnim"}) {
      childImageSharp {
        fixed(width:220, height:80) {
          ...GatsbyImageSharpFixed
        }
      }
    },
  }
`