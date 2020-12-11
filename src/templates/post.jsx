import React from "react"
import { graphql } from "gatsby"

const Post = ({ data }) => {

  let title = data.prismic.post.title[0].text
  let content = data.prismic.post.content[0].text

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </React.Fragment>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismic {
      post(uid: $uid, lang: "en-gb") {
        title
        content
        _meta {
          uid
        }
      }
    }
  }
`
