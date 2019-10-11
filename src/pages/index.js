import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Post from "./../components/post"

const AppWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

const IndexPage = () => {
  return (
    <AppWrapper>
      <Post />
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </AppWrapper>
  )
}

export default IndexPage
