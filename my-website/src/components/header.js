import React from "react"
import { Link } from "gatsby"

import "./header.css"

class Header extends React.Component {
    render() {
        return (
        <header className="header">
            <div className="header-links">
                <Link to="/"
                    activeStyle={{
                        color: `white`,
                        fontWeight: `bold`,
                        textDecoration: `none`,
                        flexGrow: 2
                    }}>
                Eddie Hatfield
                </Link>  
                <div>
                    Projects
                </div>
                <Link to="/"
                    activeStyle={{
                        color: `white`,
                        textDecoration: `none`,
                    }}>Contact</Link>
                <a href="https://github.com/deadbird11"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}>Github</a>
            </div>
        </header>
        );
     }
}

export default Header