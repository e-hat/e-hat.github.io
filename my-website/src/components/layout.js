import React from "react"
import Header from "../components/header"
import "../components/layout.css"


class Layout extends React.Component {
    render() {
        return (
            <div id="website">
                <div id="header-wrapper">
                    <header><h3>Eddie Hatfield</h3></header>
                    <nav>
                        <p>Projects</p>
                        <p>
                            <a href="https://github.com/deadbird11"
                                className="header-item"
                                target="_blank">
                            Github
                        </a>
                        </p>
                        <p>Resume</p>
                        <p>Contact</p>
                    </nav>
                </div>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout