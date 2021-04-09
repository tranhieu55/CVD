import React, { querySelector, querySelectorAll, useState} from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"



const OurLaster = ({ input }) => {
    console.log({input});
  const data = useStaticQuery(graphql`
    query queryOurLaster {
        prismic {
            allHomepages {
              edges {
                node {
                  body {
                    ... on PRISMIC_HomepageBodyFeatured_posts {
                      type
                      label
                      primary {
                        title
                        messaging
                      }
                      fields {
                        posts {
                          _linkType
                          ... on PRISMIC_Post {
                            title
                            post_image
                          }
                        }
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
    const Titles = input.primary.title.map(item => item.text);
    const Messaging = input.primary.messaging.map(item => item.text);

   
  return (
    <OurLasters>
        <Title>{Titles}</Title>
        <Messagings>{Messaging}</Messagings>
        <Content >
            {input.fields.map((item, index) => (
                <ListPost key={index} >
                    <Img
                        src={item.posts.post_image.url}
                    ></Img>
                    <SubTitle>#createbyconvert</SubTitle>
                    <TitlePost>
                        {item.posts.title.map(item => item.text)}
                    </TitlePost>
                </ListPost>
            ))}
        </Content>
    </OurLasters>
  )
}

export default OurLaster


const OurLasters = styled.div`
    height: 716px;
    width: 1232px;
    position: relative;
    margin-top: 96px;
    margin-left : auto;
    margin-right: auto;
`

const Title = styled.h1`
  height: 72px;
  width: 569px;
  color: #101010;
  font-family: Calibre Bold;
  font-size: 80px;
  font-weight: bold;
  letter-spacing: -2px;
  line-height: 72px;
  text-align: center;
  margin: 0 auto;
`
const Messagings = styled.h4`
  height: 60px;
  width: 928px;
  color: #262626;
  font-family: Calibre;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 30px;
  text-align: center;
  margin-top: 16px;
  margin-left : auto;
  margin-right: auto;
  margin-bottom: 48px;
`  

const ListPost = styled.div`
  height: 517px;
  width: 606px;
`


const Img = styled.img`
  height: 400px;
  width: 573px;
  margin-left: 32px;
`
const TitlePost = styled.h4`    
  height: 64px;
  width: 516px;
  color: #111111;
  font-family: Calibre Semibold;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 32px;
  margin-left: 80px;
`
const Content = styled.span`
  height: 520px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const SubTitle = styled.h4`
    position: relative;
    height: 16px;
    width: 94px;
    color: #999999;
    font-family: Calibre Semibold;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 16px;
    margin-left: 80px;
    margin-top: 33px;
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


