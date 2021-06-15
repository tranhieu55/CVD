import React from "react"
import styled from "styled-components"
import ArticleTile from "../BlogArticleTiles/ArticleTile"

function BlogArticleTiles({ input }) {
  return (
    <Container>
      <Body>
        <Blog>
          {input?.fields.map((element, index) => (
            <ArticleTile key={index} input={element} />
          ))}
        </Blog>
      </Body>
    </Container>
  )
}

export default BlogArticleTiles

const Container = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;

  @media (max-width: 600px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`

const Body = styled.div`
  display: flex;
  justify-content: center;
`
const Blog = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 26px;

  @media (max-width: 1366px) {
    grid-column-gap: 14px;
  }
  @media (max-width: 1211px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 600px) {
    grid-gap: 16px;
  }
`
