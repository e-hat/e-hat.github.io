import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import ProjectCard from "../components/project-card"

import "./projects.css"

class ProjectsPage extends React.Component 
{
    render() {
        const cardInfoList = [
            {
                title: 'tldr',
                text: 'A simple command line tool for retrieving concise explanations of other commands, written in Go.',
                img: <Img fixed={this.props.data.first.childImageSharp.fixed} />,
                href: "https://github.com/deadbird11/tldr"
            },
            {
                title: 'SGA',
                text: 'SGA (Simple Genetic Algorithm) is a genetic algorithm written in C++ that is entirely customizable.',
                img: <Img fixed={this.props.data.second.childImageSharp.fixed} />,
                href: "https://github.com/deadbird11/SGA"
            },
            {
                title: 'Title1',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                img: <Img fixed={this.props.data.first.childImageSharp.fixed} />,
                href: "https://github.com/deadbird11/tldr"
            },
        ]

        const cards = cardInfoList.map((cardInfo) => 
            <ProjectCard title={cardInfo.title}
                         info={cardInfo.text} 
                         className="list-item"
                         img={cardInfo.img}
                         href={cardInfo.href}
                         />
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
    first: file(sourceInstanceName: {eq: "static"}, name: {eq: "tldr_card"}) {
      childImageSharp {
        fixed(width:180,height:80) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    second: file(sourceInstanceName: {eq: "static"}, name: {eq: "evolution"}) {
        childImageSharp {
          fixed(width:180,height:80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
  }
`