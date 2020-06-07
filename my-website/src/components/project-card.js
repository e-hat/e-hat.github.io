import React from "react"

import "../components/project-card.css"

class ProjectCard extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="overlay"></div>
                <h2 className="card-title">{this.props.title}</h2>
                <div className="card-content">
                    <div className="background-circle"></div>
                    <div className="photo">{this.props.img}</div>
                    <div className="card-text themed">{this.props.info}</div>
                </div>
            </div>
        )
    }
}

export default ProjectCard