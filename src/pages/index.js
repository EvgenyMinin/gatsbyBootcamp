import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Post from "./../components/post"
import Footer from "../components/footer"
import Header from "./../components/header"
import { AppContainer } from "./../components/container"

const IndexPage = () => {
  return (
    <AppContainer>
      <Header />
      <Post />
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
      <Footer />
    </AppContainer>
  )
}

export default IndexPage
