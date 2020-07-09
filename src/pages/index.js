import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
//import Profile from "../components/profile"

import "./index.css"

class IndexPage extends React.Component {
    render() {
      console.log(this.props);
        return (
          <Layout>
            <section>
                <p className="profile-title">Welcome</p>
                <article className="profile">
                  <figure>
                    <Img style={{
                      borderRadius: `100px`,
                      float: `right`,
                      border: `2px solid white`,
                      }} 
                      fixed={this.props.data.file.childImageSharp.fixed} 
                    />
                  </figure>
                  My name is Eddie Hatfield. Ever since 8th grade, I've been interested in any programming I can get access to. 
                </article>
            </section>
          </Layout>
        )
    }
}


export default IndexPage

export const query = graphql`
query {
    file(sourceInstanceName: {eq: "static"}, name: {eq: "tldr_card"}) {
        childImageSharp {
          fixed(width:200,height:200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
}
`