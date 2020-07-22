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
        return <Img fixed={this.props.data[name].childImageSharp.fixed} />
      }

      const cardInfoList = [
          {
            title: 'tldr',
            info: 'A simple command line tool for retrieving concise explanations of other commands, written in Go.',
            img: getImg('tldr'),
            href: "https://github.com/deadbird11/tldr",
          },
          {
            title: 'SGA',
            info: 'SGA (Simple Genetic Algorithm) is a genetic algorithm written in C++ that is entirely customizable.',
            img: getImg('sga'),
            href: "https://github.com/deadbird11/SGA",
          },
          {
            title: 'scramble',
            info: 'Command line tool written in Go for generating anagrams of a given word.',
            img: getImg('scramble'),
            href: "https://github.com/deadbird11/scramble",
          },
          {
            title: 'efgl',
            info: 'An abstraction of OpenGL with some useful features to reduce the overhead of experimenting with different rendering techniques.',
            img: getImg('scramble'),
            href: "https://github.com/deadbird11/efgl",
          },
          {
            title: 'JumboEngine',
            info: 'Game engine based on series by The Cherno on YouTube that will eventually feature a rendering engine of my own design.',
            img: getImg('scramble'),
            href: "https://github.com/deadbird11/JumboEngine",
          },
          
      ]

      const cards = cardInfoList.map((cardInfo) => 
          <ProjectCard className="list-item" {...cardInfo} />
      )

      return (
          <Layout>
              <div><i></i></div>
              <h2 style={{paddingTop: `5px`, paddingBottom: `20px`}}>Projects</h2>
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
        fixed(width:180,height:80) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    sga: file(sourceInstanceName: {eq: "static"}, name: {eq: "evolution"}) {
      childImageSharp {
        fixed(width:180,height:80) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    scramble: file(sourceInstanceName: {eq: "static"}, name: {eq: "scramble"}) {
      childImageSharp {
        fixed(width:180, height:80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`