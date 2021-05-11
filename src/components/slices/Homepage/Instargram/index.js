import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Instagram({ input }) {
  const data = useStaticQuery(graphql`
    query queryTokenInstargram {
      prismic {
        allHomepages {
          edges {
            node {
              body {
                ... on PRISMIC_HomepageBodyConnect_instagram {
                  type
                  label
                  primary {
                    access_token
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const tokens = input
    ? input.primary.access_token?.find(item => (item?.text ? item?.text : ""))
    : []
  const token = tokens?.text
  const [post, setPost] = useState([])

  const url =
    "https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=" +
    token
  async function getPhoto() {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(responseJson => {
        return responseJson
      })
      .catch(error => {})
    setPost(data)
  }
  useEffect(() => {
    getPhoto()
  }, [])
  return (
    <Container>
      <SubTitle>#CRAFTEDBYCONVERT</SubTitle>
      <Title>{input.primary.title?.map(item => item.text)}</Title>
      <List>
        {post ? (
          post?.data?.map((item, index) => (
            <ListPost
              key={index}
              as={Link}
              to={item?.permalink ? item?.permalink : ""}
              vitri={index}
            >
              <Img
                src={item?.media_url ? item?.media_url : ""}
                alt={item?.permalink ? item?.permalink : ""}
              ></Img>
            </ListPost>
          ))
        ) : (
          <></>
        )}
      </List>
    </Container>
  )
}

const Container = styled.div`
  height: 466px;
  margin: 96px 32px 0px;
  @media (max-width: 600px) {
    margin: 40px 16px 0px;
    height: 405px;
  }
  @media (max-width: 320px) {
    margin: 40px 16px 0px;
    height: 405px;
  }
  @media (min-width: 1024px) {
    height: 620px;
  }
  @media (min-width: 1366px) {
    height: 466px;
  }
  @media (min-width: 1600px) {
    margin: 96px 32px 0px;
  }
`
const ListPost = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    height: 48%;
    width: 48%;
    margin-right: ${props => (props.vitri % 2 === 0 ? "7px" : "0px")};
    margin-bottom: 14px;
  }
  @media (max-width: 320px) {
    width: 137px;
    height: 137px;
  }
  @media (min-width: 600px) {
    width: 48%;
    height: 48%;
    margin-right: ${props => (props.vitri % 2 === 0 ? "7px" : "0px")};
    margin-bottom: 14px;
  }
  @media (min-width: 1366px) {
    width: 24%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-right: 0px;
    margin-bottom: 0px;
  }
`
const Img = styled.img`
  width: 25%;
  object-fit: cover;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 600px) {
    width: 100%;
    height: 100%;
  }
`
const List = styled.div`
  height: 360px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 23px;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    height: 343px;
    width: 100%;
    margin-top: 6px;
  }
  @media (max-width: 320px) {
    height: 285px;
  }
  @media (min-width: 1024px) {
    height: 520px;
  }
  @media (min-width: 1366px) {
    height: 360px;
    display: flex;
  }
`
const Title = styled.h1`
  height: 56px;
  width: 100%;
  color: #101010;
  font-family: Calibre Bold;
  font-size: 64px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 56px;
  margin-bottom: 0px;
  @media (max-width: 600px) {
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.5px;
    line-height: 32px;
    height: 32px;
  }
`
const SubTitle = styled.h4`
  position: relative;
  height: 16px;
  width: 155px;
  color: #999999;
  font-family: Calibre Semibold;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  margin-left: 80px;
  margin-bottom: 10px;
  &::after {
    position: absolute;
    right: calc(100% + 17px);
    top: 41%;
    display: block;
    content: "";
    width: 63px;
    height: 2px;
    background: #fecf09;
  }
  @media (max-width: 600px) {
    height: 14px;
    width: 135px;
    color: #999999;
    font-family: Calibre Semibold;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 14px;
    margin-left: 50px;
    &::after {
      width: 32px;
    }
  }
`
