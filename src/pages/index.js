import React from "react"
import { Link } from "gatsby"
import Post from "./../components/post"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Post />
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
