import React from "react"
import Layout from "../components/layout"

import "./contact.css"

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <Layout>
                <section className="form-content">
                    <h1 className="contact-title">Send me an email</h1>
                    <form method="POST" action="https://formspree.io/xknqpdgd"
                          onSubmit={this.submitForm}>
                        <label>
                            <div className="input-label">Name</div>
                        <input type="text" name="name" id="name" className="form-input"/>
                        </label>
                        <br />
                        <label>
                            <div className="input-label">Email</div>
                        <input type="email" name="_replyto" id="email" className="form-input"/>
                        </label>
                        <br />
                        <label>
                            <div className="input-label">Subject</div>
                        <input type="text" name="subject" id="subject" className="form-input"/>
                        </label>
                        <br />
                        <label>
                            <div className="input-label">Message</div>
                        <textarea name="message" id="message" rows="5" className="form-input"/>
                        </label>
                        <br />
                        <div className="button-container">
                            {status === "SUCCESS" ? <p className="result-msg">Thanks!</p> : 
                                                    <><button type="submit" name="submit" className="form-button submit">Send</button>
                                                    <input type="reset" value="Clear" className="form-button"/></>}
                            {status === "ERROR" && <p className="result-msg">Ooops! There was an error.</p>}
                        </div>
                        <input name="_gotcha" type="text" style={{display: `none`}} />
                    </form>
                </section>
            </Layout>
        )
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
    }
}

export default ContactPage