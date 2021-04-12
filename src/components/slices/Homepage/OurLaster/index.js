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
                        vitri={index}
                    ></Img>
                    <SubTitle>June 25, 2019</SubTitle>
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
    position: relative;
    margin: 96px 184px 0px;
    @media(max-width: 600px){
      height: 862px;
      margin: 32px 16px 37px;
    }
    @media(min-width: 600px){
      height: 1243px;
      margin: 50px 16px 37px;
    }
    @media(min-width: 1024px){
      height: 716px;
      margin: 50px 16px 37px;
    }
    @media(min-width: 1600px){
      margin: 96px 184px 0px;
    }
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
  @media(max-width: 600px){
    font-size: 40px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 54px;
    text-align: center;
    height: 38px;
    width: 285px;
  }
`
const Messagings = styled.h4`
  color: #262626;
  font-family: Calibre;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 30px;
  text-align: center;
  margin: 16px 152px 48px;
  @media(max-width: 600px){
    font-size: 17px;
    letter-spacing: 0;
    line-height: 24px;
    text-align: center;
    margin: 5px 0px 24px;
  }
`  

const ListPost = styled.div`
  height: 517px;
  width: 606px;
  @media(max-width: 600px){
    height: 351px;
    width: 100%;
    margin-bottom: 20px;
  }
  @media(min-width: 768px){
    width: 100%;
    margin-bottom: 16px;
  }
  @media(min-width: 1024px){
    width: 49%;
    height: 517px;
    }
`


const Img = styled.img`
   width: ${props => props.vitri === 1 ? '80%': '100%'};
    height: ${props => props.vitri === 1 ? '360px': '400px'};
    margin-left: 32px;
    margin-top: ${props => props.vitri === 1 ? '20px': '0px'};
  object-fit: cover;
  @media(max-width: 600px){
    width: 100%;
    height: 240px;
    margin-left: 0px;
  }
  @media(min-width: 768px){
    width: 100%;
    margin-left: 0px;
  }
  @media(min-width: 1024px){
    width: ${props => props.vitri === 1 ? '80%': '100%'};
    height: ${props => props.vitri === 1 ? '360px': '400px'};
    margin-left: 32px;
    margin-top: ${props => props.vitri === 1 ? '20px': '0px'};
  }
`
const TitlePost = styled.h4`    
  height: 64px;
  color: #111111;
  font-family: Calibre Semibold;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 32px;
  margin-left: 80px;
  @media(max-width: 600px){
    height: 72px;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.25px;
    line-height: 26px;
    margin-left: 48px;
  }
  @media(max-width: 320px){
    width: 249px;
  }
`
const Content = styled.span`
  height: 520px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 600px){
    height: 723px;
    width: 100%;
    display: block;
  }
  @media(min-width: 600px){
    width: 100%;
    display: block;
  }
  @media(min-width: 1024px){
    height: 520px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    }
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
  @media(max-width: 600px){
    height: 14px;
    font-family: Calibre;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 14px;
    margin-left: 50px;
    margin-top: 16px;
    &::after{
      width: 32px;
      right: calc(100% + 19px);
    }
  }
  @media(min-width: 768px){
    margin-left: 112px;
  }
`


