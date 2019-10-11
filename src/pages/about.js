import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>This is about page</h1>
      <p>I'm 27 years old.</p>
      <p>
        <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
