import React from "react"
import Footer from "../components/footer"
import Header from "./../components/header"
import { AppContainer } from "./../components/container"

const ContactPage = () => {
  return (
    <AppContainer>
      <Header />
      <h1>Contact</h1>
      <p>tel: 89025078592</p>
      <p>email: evgeny.frontend@gmail.com</p>
      <p>
        <a href="https://vk.com/johnnyk1992" target="_blank">
          VK
        </a>
      </p>
      <Footer />
    </AppContainer>
  )
}

export default ContactPage
