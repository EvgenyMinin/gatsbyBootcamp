import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>This is about page</h1>
      <p>I'm 27 years old.</p>
      <p>
        <Link to="/contact">Contact me.</Link>
      </p>
    </div>
  )
}

export default AboutPage
