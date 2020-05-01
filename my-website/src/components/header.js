import React from "react"
import { Link } from "gatsby"

import "./header.css"

class Header extends React.Component {
    render() {
        return (
        <header className="header">
            <div className="header-links">
                <Link to="/"
                    style={{
                        flexGrow: 2,
                        fontWeight: `bold`
                    }}
                    className="header-item">
                    Eddie Hatfield
                </Link>  
                <div className="header-item">
                    Projects
                </div>
                <Link to="/"
                    className="header-item">
                    Contact
                </Link>
                <a href="https://github.com/deadbird11"
                   className="header-item"
                   target="_blank">
                       Github
                </a>
            </div>
        </header>
        );
     }
}

export default Header