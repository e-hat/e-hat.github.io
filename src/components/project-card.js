import React from "react"

import "../components/project-card.css"

class ProjectCard extends React.Component {
    render() {
        return (
            <div className="card themed rounded">
                <a href={this.props.href} className="project-link normalized-link">
                <h2 className="card-title"><code>{this.props.title}</code></h2>
                <div className="card-content">
                    <div className="photo rounded">{this.props.img}</div>
                    <div className="card-text">{this.props.info}</div>
                </div>
                </a>
            </div>
        )
    }
}

export default ProjectCard