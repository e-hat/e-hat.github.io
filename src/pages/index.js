import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
//import Profile from "../components/profile"

import "./index.css"

function IndexPage(props) {
  return (
      <section>
          <article className="profile">
          <p className="profile-title"><h1>Eddie Hatfield</h1></p>
          <code className="section-title">about</code>
          <p className="bio-text">I'm Eddie Hatfield. I'm originally from Cincinnati, Ohio ⚫🟠, but I'm usually in Boston⛄ since I'm an studying CompSci and Applied Math @ Tufts 🐘.  </p>
          <p className="bio-text">I enjoy playing ping pong🏓, playing video games🕹️, meditating 🧘‍♂️, implementing real-time rendering techniques🖥️, and learning more about all things programming.</p>
          <code className="section-title">projects</code>
          <p className="bio-text">
              Here are some of my favorite projects I've done over the years:
              <ul>
                  <li>EFGL</li>
              </ul>
          </p>
          </article>
      </section>
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