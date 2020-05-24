import React from "react"

import Layout from "../components/layout"
import ProjectCard from "../components/project-card"

import "./projects.css"

class ProjectsPage extends React.Component {
    cardInfoList = [
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

    cards = this.cardInfoList.map((cardInfo) => 
            <ProjectCard title={cardInfo.title}
                         info ={cardInfo.text} 
                         className="list-item" />
    )

    render() {
        
        return (
            <div>
                <h2>Projects</h2>
                <section>
                    <ul>{this.cards}</ul>
                </section>
            </div>
        )
    }
}

export default () => <Layout><ProjectsPage /></Layout>