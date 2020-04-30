import React from "react"
import "./header.css"
import { Link } from "gatsby"

class Header extends React.Component {
    render() {
        return (
        <header>
            <div id="link-container">
                <Link to="/"
                    activeStyle={{
                        color: `white`,
                        fontWeight: `bold`,
                        textDecoration: `none`,
                    }}>
                Eddie Hatfield
                </Link>  
                <Link to="/"
                    activeStyle={{
                        color: `white`,
                        textDecoration: `none`,
                    }}>Projects</Link>
                <Link to="/"
                    activeStyle={{
                        color: `white`,
                        textDecoration: `none`,
                        width: ``
                    }}>Contact</Link>
                <Link href="https://github.com/deadbird11"
                    activeStyle={{
                        color: `white`,
                        textDecoration: `none`,
                    }}>Github</Link>
            </div>
        </header>
        );
     }
}

export default Header