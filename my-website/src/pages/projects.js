import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import ProjectCard from "../components/project-card"

import "./projects.css"

const CARD_W = 240;
const CARD_H = 250;

class ProjectsPage extends React.Component 
{
    render() {
        const cardInfoList = [
            {
                title: 'tldr',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            },
            {
                title: 'Title1',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            },
            {
                title: 'Title1',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            },
        ]

        const cards = cardInfoList.map((cardInfo) => 
            <ProjectCard title={cardInfo.title}
                         info={cardInfo.text} 
                         className="list-item"
                         img={<Img fixed={this.props.data.file.childImageSharp.fixed} />}
                         />
        )

        return (
            <Layout>
                <div><i></i></div>
                <h2>Projects</h2>
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
    file(sourceInstanceName: {eq: "static"}, name: {eq: "tldr_card"}) {
      childImageSharp {
        fixed(width:180,height:80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`