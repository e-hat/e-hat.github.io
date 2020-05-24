import React from "react"

import "../components/project-card.css"

class ProjectCard extends React.Component {
    render() {
        return (
            <div class="card">
                <div class="card-content">
                    <img src="../../img/going_dynamic-SO.png" alt="" width="500" height="500"></img>
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