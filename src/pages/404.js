import React from "react"
import { Link } from "gatsby"

import "./404.css"

function PageNotFound() {
    return (
        <div className="error-div">
            <code className="error">404 error</code>
            <p>Oops -- <Link to="/">back to safety!</Link></p>
        </div>
    );
}

export default PageNotFound