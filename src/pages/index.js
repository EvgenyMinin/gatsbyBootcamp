import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Post from "./../components/post"
import Footer from "../components/footer"
import Header from "./../components/header"
import AppContainer from "./../components/container"
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
