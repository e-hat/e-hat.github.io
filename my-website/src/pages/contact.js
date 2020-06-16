import React from "react"
import Layout from "../components/layout"

class ContactPage extends React.Component {
    render() {
        return (
            <Layout>
                <h1>
                    Contact
                </h1>
                <p>Send me an email at efthatfield@gmail.com, or check out my 
        {' '}<a style={{color: `white`}} href="https://www.linkedin.com/in/eddie-hatfield-078a27160/">LinkedIn profile.</a>
        {' '} My github is <a style={{color:`white`}}href="https://github.com/deadbird11">@deadbird11</a>.</p>
            </Layout>
        )
    }
}

export default ContactPage