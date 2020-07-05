import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Profile from "../components/profile"

import "./index.css"

class IndexPage extends React.Component {
    render() {
      console.log(this.props);
        return (
          <Layout>
            <section>
                <Profile img={
                  <Img fixed={this.props.data.file.childImageSharp.fixed} />
                }>
                  <React.Fragment>Hello World</React.Fragment></Profile>
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