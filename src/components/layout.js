import React from "react"
import Header from "./header"
import Footer from "./footer"
import { AppContainer } from "./container"
import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <AppContainer>
      <Header />
      <div>{children}</div>
      <Footer />
    </AppContainer>
  )
}

export default Layout
