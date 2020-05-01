import React from "react"
import { graphql } from "gatsby"

const Post = ({ data: { post } }) => {
  const { data } = post
  return (
    <React.Fragment>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </React.Fragment>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismic{
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