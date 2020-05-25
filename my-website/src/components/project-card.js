import React from "react"

import "../components/project-card.css"

class ProjectCard extends React.Component {
    render() {
        return (
            <div class="card">
                <div class="card-content">
                    {this.props.img}
                    <h3>{this.props.title}</h3>
                    <div style={{
                        textOverflow: `ellipses`,
                        overflow: `hidden`,
                    }}>{this.props.info}</div>
                </div>
            </div>
        )
    }
}

export default ProjectCard