import React from "react"
import styled from "styled-components"

const PostWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  h1 {
    color: blue;
  }
  p {
    color: red;
  }
`

const Post = () => {
  return (
    <PostWrapper>
      <h1>Hello!</h1>
      <p>I'm Evgeny, a frontend developer living in beautiful Arkhangelsk.</p>
    </PostWrapper>
  )
}

export default Post
