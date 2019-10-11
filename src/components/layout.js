import React from "react"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"
import { AppContainer } from "./container"
import "../styles/index.scss"

const StyledContent = styled.div`
  flex-grow: 1;
`

const Layout = ({ children }) => {
  return (
    <AppContainer>
      <StyledContent>
        <Header />
        <div>{children}</div>
      </StyledContent>
      <Footer />
    </AppContainer>
  )
}

export default Layout
