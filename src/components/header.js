import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  h1 {
    color: lightgreen;
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    & li {
      margin-right: 10px;
      & a {
        text-decoration: none;
        padding: 10px 0;
      }
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <h1>Evgeny Minin</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header
