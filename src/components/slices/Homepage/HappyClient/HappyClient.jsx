import React, { querySelector, querySelectorAll, useState} from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import IMG from "../../../Image"
import ButtonCustom from "../../../ButtonCustom"
import OwlCarousel from 'react-horizontal-scrolling-menu';
import DragScroll from '../DragScroll'



const HappyClient = ({ input }, rootClass) => {
  const data = useStaticQuery(graphql`
    query queryHappyClient {
        prismic {
            allHomepages {
              edges {
                node {
                  body {
                    ... on PRISMIC_HomepageBodyHappy_clients {
                      type
                      label
                      primary {
                        title_happy_client
                      }
                      fields {
                        logo_client
                        qoute_of_client
                        sub_title
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
    console.log(data.prismic.allHomepages.edges[0].node.body[6].fields);
    const node = data.prismic.allHomepages.edges.map(item => item.node);
    const body = node.map(item => item.body);
    const bodys = body[0]
    const Titles = bodys[6].primary.title_happy_client.map(item => item.text);


   
  return (
    <HappyClients>
        <Title>{Titles}</Title>
        <Slides >
            {bodys[6].fields.map((item, index) => (
                <Slider key={index} >
                    <Img
                        alt={item.logo_client.alt}
                        src={item.logo_client.url}
                    >
                    </Img>
                    <Text>
                        <Content>{item.qoute_of_client.map(items => items.text)}</Content>
                    </Text>
                    <Sub>
                        <SubTilte>{item.title.map(items => items.text)}</SubTilte>
                        <SubText>{item.sub_title.map(items => items.text)}</SubText>
                    </Sub>
                </Slider>
            ))}
        </Slides>
        <Opaci></Opaci>
    </HappyClients>
  )
}

export default HappyClient


const HappyClients = styled.div`
    height: 822px;
    background-color: #F8F8F8;
    position: relative;
`

const Title = styled.h1`
    height: 72px;
    color: #101010;
    font-family: Calibre Bold;
    font-size: 80px;
    font-weight: bold;
    letter-spacing: -2px;
    line-height: 72px;
    text-align: center;
    padding-top: 100px;
    margin-bottom: 0px;
`   
const Slider = styled.div`
    height: 254px;
    width: 548px;
    margin-right: 72px;
    margin-top: 47px;

`
const Slides = styled.div`
    height: 406px;
    margin-top: 145px;
    display: flex;
    margin-left: 180px;
    overflow-x: auto;
    ::-webkit-scrollbar {
        height: 4px; 
        width: 50%;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #d5d5d5; 
        border-radius: 10px;
        margin-right: 480px;
        margin-left: 280px;
      }
       
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #BBBBBB; 
        border-radius: 10px;
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #b30000; 
      }
      :after{
        height: 24px;
        width: 28px;
        color: #AAABAB;
        font-family: "Font Awesome 5 Pro";
        font-size: 32px;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 24px;
        text-align: center;
      }
`
const Img = styled.img`
    height: 24px;
    width: 162px;
`
const Text = styled.div`    
    width: 548px;
    padding-top: 32px;
    padding-bottom: 14px;
`
const Content = styled.span`
    color: #222222;
    font-family: Calibre Regular;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 28px;
`

const SubTilte = styled.div`
    color: #222222;
    font-family: Calibre Semibold;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 22px;
`
const SubText = styled.div`
    color: #555555;
    font-family: Calibre Regular;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 22px;
`
const Sub = styled.div`
    height: 44px;
    width: 121px;
`
const Opaci = styled.div`
    height: 348px;
    width: 248px;
    background: linear-gradient(90deg, rgba(252,252,252,0) 0%, #F8F8F8 100%);
    position : absolute;
    top: 238px;
    right: 0px;
`

const Prevs = styled.div`

`