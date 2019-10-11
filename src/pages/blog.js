import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const StyledItems = styled.ol`
  list-style: none;
  margin: 0;
  .post-item {
    margin: 1rem 0;
    a {
      display: block;
      background: #f4f4f4;
      color: #000000;
      padding: 1rem;
      text-decoration: none;
      &:hover {
        background: #e4e4e4;
      }
    }
    h2 {
      margin-bottom: 0;
    }
    p {
      font-size: 0.8rem;
      color: #777777;
      font-style: italic;
    }
  }
`

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <StyledItems>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className="post-item" key={edge.node.frontmatter.title}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </StyledItems>
    </Layout>
  )
}

export default BlogPage
