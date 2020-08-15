import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
//import Profile from "../components/profile"

import "./index.css"

function IndexPage(props) {
  return (
    <Layout>
      <section>
          <p className="profile-title">Welcome</p>
          <article className="profile">
            <div className="profile-pic">
              <Img style={{
                borderRadius: `110px`,
                border: `2px solid white`,
                boxShadow: `0px 5px 12px #555555`,
                margin: `10px`,
                }} 
                fixed={props.data.file.childImageSharp.fixed} 
            />
            </div>
          <p className="bio-text">My name is Eddie Hatfield.</p>
          <p className="bio-text">I'm an undergraduate at Tufts University studying Computer Science and Applied Math.</p>
          <p className="bio-text">My interests lie in a number of fields, ranging from web development and artificial intelligence to numerical methods and computer graphics.</p>
          <p className="bio-text">Pretty much, I love math and I love programming, and I especially love when I can do math <i>while</i> I'm programming.</p>
          </article>
      </section>
    </Layout>
  );
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