import React from "react"
import Layout from "../components/layout"

import "./contact.css"

class ContactPage extends React.Component {
    render() {
        return (
            <Layout>
                <section className="form-content">
                    <h1 className="contact-title">Send me an email</h1>
                    <form method="post" action="#">
                        <label className="label">
                            Name
                        <br />
                        <input type="text" name="name" id="name" className="form-input"/>
                        </label>
                        <br />
                        <label>
                            Email
                        <br />
                        <input type="email" name="email" id="email" className="form-input"/>
                        </label>
                        <br />
                        <label>
                            Subject
                        <br />
                        <input type="text" name="subject" id="subject" className="form-input"/>
                        </label>
                        <br />
                        <label>
                            Message
                        <br />
                        <textarea name="message" id="message" rows="5" className="form-input"/>
                        </label>
                        <br />
                        <button type="submit" id="submit" className="submit form-button">Send</button>
                        <input type="reset" value="Clear" className="form-button"/>
                    </form>
                </section>
            </Layout>
        )
    }
}

export default ContactPage