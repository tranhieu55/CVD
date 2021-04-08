import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"





export default function Instagram ({input}) {
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
    `
    )
    const tokens = input.primary.access_token.find(item => item.text);
    const token = tokens.text;
    const [post , setPost] = useState([]);

    const url = 'https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=' + token 
    async function getPhoto(){
        const data = await fetch(url,{
            method: 'GET',
             headers: {
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then((responseJson) => {
            return responseJson;
          })
          .catch((error) => {
            console.log("loi============")
          });
        setPost(data);
        console.log(data);
    }
    useEffect(() => {
        getPhoto();
    }, [])
    return (
        <Container>
            <SubTitle>#createbyconvert</SubTitle>
            <Title>{input.primary.title.map(item => item.text)}</Title>
            <List>
                {post?.data?.map((item, index) => (
                    <ListPost key={index} as ={Link} to ={item.permalink}>
                        <Img
                            src = {item.media_url}
                            alt = {item.permalink}
                        ></Img>
                    </ListPost>
                ))}
            </List>
        </Container>
    )
}

const Container = styled.div`
    height: 466px;
    width: 1536px;
    margin: 0 auto;
    margin-top: 96px;
`
const ListPost = styled.div`
    height: 360px;
    display: flex;
    justify-content: space-between;
`
const Img = styled.img`
    width: 360px;
`
const List = styled.div`
    height: 360px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 23px;
`
const Title = styled.h1`
    height: 56px;
    width: 566px;
    color: #101010;
    font-family: Calibre Bold;
    font-size: 64px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 56px;
    margin-bottom: 0px;
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
    &::after{
        position: absolute;
        right: calc(100% + 17px);
        top: 41%;
        display: block;
        content: "";
        width: 63px;
        height: 2px;
        background: #fecf09
    }
`