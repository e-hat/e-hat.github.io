import React from "react"

import Layout from "../components/layout"
import ProjectCard from "../components/project-card"

import "./projects.css"

class ProjectsPage extends React.Component {
    cardInfoList = [
        {
            title: 'Title1',
            text: 'BLAH BLAH LDKJFLJ;AJ;LFJALD;SJFD;JAF;LSAJ;LFDJL;AJFL;AJL;DSJF;LAJL;DSFJA;LKSDJFL;AJL;KDSJF;LAJDFJAJDFJALJDFAD FADFAJDFLJADJF;LADJFSD',
        },
        {
            title: 'Title1',
            text: 'BLAH BLAH LDKJFLJ;AJ;LFJALD;SJFD;JAF;LSAJ;LFDJL;AJFL;AJL;DSJF;LAJL;DSFJA;LKSDJFL;AJL;KDSJF;LAJDFJAJDFJALJDFAD FADFAJDFLJADJF;LADJFSD',
        },
        {
            title: 'Title1',
            text: 'BLAH BLAH LDKJFLJ;AJ;LFJALD;SJFD;JAF;LSAJ;LFDJL;AJFL;AJL;DSJF;LAJL;DSFJA;LKSDJFL;AJL;KDSJF;LAJDFJAJDFJALJDFAD FADFAJDFLJADJF;LADJFSD',
        },
    ]

    render() {
        const cards = this.cardInfoList.map((cardInfo) => 
            <ProjectCard title={cardInfo.title}
                         info ={cardInfo.text} 
                         className="list-item" />
        )
        return (
            <div>
                <h2>Projects</h2>
                <section>
                    <ul>{cards}</ul>
                </section>
            </div>
        )
    }
}

export default () => <Layout><ProjectsPage /></Layout>