import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  padding: 1rem 0 3rem;
  .title {
    color: #000;
    font-size: 3rem;
    text-decoration: none;
  }
  .nav-list {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    li {
      margin-right: 10px;
    }
    &__item {
      text-decoration: none;
      font-size: 0.9rem;
      margin-right: 1.3rem;
      padding: 1rem 0.5rem 1rem 0;
      color: #999;
      &:hover {
        color: #666666;
      }
      &--active {
        color: #333333;
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <StyledHeader>
      <h1>
        <Link className="title" to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link
              className="nav-list__item"
              activeClassName="nav-list__item--active"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-list__item"
              activeClassName="nav-list__item--active"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="nav-list__item"
              activeClassName="nav-list__item--active"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="nav-list__item"
              activeClassName="nav-list__item--active"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header
