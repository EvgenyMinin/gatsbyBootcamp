import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "./../components/header"
import { AppContainer } from "./../components/container"

const AboutPage = () => {
  return (
    <AppContainer>
      <Header />
      <h1>This is about page</h1>
      <p>I'm 27 years old.</p>
      <p>
        <Link to="/contact">Contact me.</Link>
      </p>
      <Footer />
    </AppContainer>
  )
}

export default AboutPage
