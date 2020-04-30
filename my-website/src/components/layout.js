import React from "react"
import Header from "../components/header"
import SideNav from "../components/sidenav"
import "../components/layout.css"

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <SideNav></SideNav>
                <main>
                    {this.props.children}
                </main>
                <footer style={{color:`white`, textAlign:`center`}}>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a style={{color:`white`}}href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        )
    }
}

export default Layout