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
                  <div className="profile-pic">
                    <Img style={{
                      borderRadius: `110px`,
                      float: `right`,
                      border: `2px solid white`,
                      boxShadow: `0px 5px 12px #555555`,
                      }} 
                      fixed={this.props.data.file.childImageSharp.fixed} 
                    />
                    <div className="bio themed">
                      <div className="bio-text">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                      </div>
                  </div>
                  </div>
                  
                </article>
            </section>
          </Layout>
        )
    }
}


export default IndexPage

export const query = graphql`
query {
    file(sourceInstanceName: {eq: "static"}, name: {eq: "prof_pic"}) {
        childImageSharp {
          fixed(width:220,height:220) {
            ...GatsbyImageSharpFixed
          }
        }
      }
}
`