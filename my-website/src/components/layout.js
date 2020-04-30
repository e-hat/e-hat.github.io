import React from "react"
import Header from "../components/header"

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <main>
                    {this.props.children}
                </main>
                <footer style={{color:`white`}}>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        )
    }
}

export default Layout