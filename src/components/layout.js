import React from "react"
import { Link } from "gatsby"
import "../components/layout.css"


class Layout extends React.Component {
    render() {
        return (
            <div id="website">
                <div id="header-wrapper">
                    <header>
                        <Link to="/" className="normalized-link">
                        <h3>Eddie Hatfield</h3>
                        </Link>
                    </header>
                    <nav>
                        <Link to="/projects" className="normalized-link">Projects</Link>
                        <p>
                            <a href="https://github.com/deadbird11"
                                className="nav-link"
                                target="_blank"
                                rel="noopener noreferrer">
                            Github
                        </a>
                        </p>
                        <a href={`resume.pdf`} download className="normalized-link">Resume</a>
                        <Link to="/contact" className="normalized-link">Contact</Link>
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