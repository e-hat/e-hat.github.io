import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "./404.css"

class PageNotFound extends React.Component {
    render() {
        return (
            <div>
            <section>
                <h1>404 Error - Page Not Found</h1>
                <article>
                    The website can't find the page you were looking for. 
                    Click{` `}<Link to="/" style={{color:`white`}}>here</Link>{` `}to go to the home page.
                </article>
            </section>
            </div>
        )
    }
}

export default () => <Layout><PageNotFound /></Layout>