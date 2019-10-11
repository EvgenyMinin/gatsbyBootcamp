import React from "react"
import Footer from "../components/footer"
import Header from "./../components/header"
import { AppContainer } from "./../components/container"

const BlogPage = () => {
  return (
    <AppContainer>
      <Header />
      <h1>My Blog</h1>
      <p>Posts will show up here later on.</p>
      <Footer />
    </AppContainer>
  )
}

export default BlogPage
