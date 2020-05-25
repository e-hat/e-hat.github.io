import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import ProjectCard from "../components/project-card"

import "./projects.css"

class ProjectsPage extends React.Component 
{
    render() {
        alert(JSON.stringify(this.props.data))
        const cardInfoList = [
            {
                title: 'Title1',
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
                            info ={cardInfo.text} 
                            className="list-item"
                            />
        )

        return (
            <Layout>
                <div><i></i></div>
                <h2>Projects</h2>
                <Img fixed={this.props.data.file.childImageSharp.fixed} />
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
    file(sourceInstanceName: {eq: "static"}, name: {eq: "going_dynamic-SO"}) {
      childImageSharp {
        fixed(width:240,height:250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`