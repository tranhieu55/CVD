import React from "react"
import styled from "styled-components"
import BannerBlogDetails from "../components/Banner/BannerBlogDetails"
import Layout from "../components/Layout"
import moment from "moment"
import { RichText } from "prismic-reactjs"

const BlogDetails = props => {
  
  // const dataIcon = props.data.prismic.post?.body[0].fields
  const dataText = props ? props.data.prismic.post?.body[1]?.fields : [];
  return (
    <Layout location="/blog-details">
      <BannerBlogDetails
        titles={props.data.prismic.post.title?.map(item => item.text)}
        sub={moment(props.data.prismic.post?.date_created).format("LL")}
      ></BannerBlogDetails>
      <Img
        src={props.data.prismic.post.post_image?.url}
        alt={props.data.prismic.post.post_image?.alt}
      ></Img>
      <Container>
        {props.data.prismic.post.contenr_description?.map((item, index) => (
          <Text>{item.text}</Text>
        ))}
        <TextImg>
          <Texxt>{RichText.render(props.data.prismic.post?.content)}</Texxt>
        </TextImg>
        <Fotters>
          <DivIcon>
            <Facebook href='https://www.facebook.com'></Facebook>
            <LinkedIn href='https://www.linkedin.com'></LinkedIn>
            <Twitter href='https://twitter.com'></Twitter>
          </DivIcon>
          <DivText>
            <FirstTexts>Tags</FirstTexts>
            {dataText?.map((item, index) => (
              <Texts key={index}>{item.tag_item}</Texts>
            ))}
          </DivText>
        </Fotters>
      </Container>
    </Layout>
  )
}
export default BlogDetails
const Container = styled.div`
  margin-top: 60px;
  margin-left: 260px;
  margin-bottom: 80px;
  width: 716px;

  @media (max-width: 600px) {
    width: 343px;
    margin: 16px auto 32px;
  }
  @media (max-width: 360px) {
    width: 300px;
    margin: 16px auto 32px;
  }
  @media (min-width: 600px) {
    width: 586px;
    margin: 20px auto 40px;
  }
  @media (min-width: 768px) {
    width: 716px;
    margin: 20px auto 40px;
  }
  @media (min-width: 1200px) {
    margin-top: 60px;
    margin-left: 260px;
    margin-bottom: 80px;
    width: 716px;
  }
`
const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  @media (max-width: 600px) {
    height: 240px;
  }
  @media (min-width: 600px) {
    height: 240px;
  }
  @media (min-width: 992px) {
    height: 500px;
  }
`
const Text = styled.p`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 28px;
  margin-bottom: 9px;
`

const TextImg = styled.div`
    width: 100%;
    height: auto;
    margin-top: 22px;
`
const Texxt = styled.div`
    p{
        margin-bottom: 0px;
        color: #222222;
        font-family: Calibre Regular;
        font-size: 20px;
        letter-spacing: 0;
        line-height: 28px;
        strong{
            color: #101010;
            font-family: Calibre Medium;
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: 20px;
        }
    }
    .block-img{
        img{
            width: 100%;
            height: 428px;
            margin-top: 17px;
            margin-bottom : 40px;
            object-fit: cover;
        }
        @media(max-width: 600px){
            img{
                height: 204px;
                margin-top: 6px;
                margin-bottom : 24px;
                object-fit: cover;
            }
        }
    }
    @media (max-width: 600px) {
      img {
        height: 204px;
        margin-top: 6px;
        margin-bottom: 24px;
        object-fit: cover;
      }
    }
  }
`
const Fotters = styled.div`
  width: 100%;
  height: 52px;
  border-top: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 100%;
    height: 47px;
    border-top: 1px solid #e4e4e4;
    display: flex;
    justify-content: space-between;
  }
`
const DivIcon = styled.div`
  margin-top: 30px;
  @media (max-width: 600px) {
    margin-top: 24px;
  }
`
const Facebook = styled.a`
  margin-right: 24px;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  &::before {
    content: "\f082";
    height: 21px;
    width: 20px;
    color: #999999;
    font-family: "Font Awesome 5 Brands Regular";
    font-size: 21px;
    letter-spacing: 1.5px;
    line-height: 21px;                            
  }
`

const LinkedIn = styled.a`
  margin-right: 24px;
  cursor: pointer;


  &:hover {
    text-decoration: none;
  }

  &::before {
    content: "\f0e0";
    height: 21px;
    width: 23px;
    color: #999999;
    font-family: "Font Awesome 5 Pro Regular";
    font-size: 21px;
    letter-spacing: 1.5px;
    line-height: 21px;
  }
`

const Twitter = styled.a`
  cursor: pointer;


  &:hover {
    text-decoration: none;
  }

  &::before {
    content: "\f099";
    height: 21px;
    width: 23px;
    color: #999999;
    font-family: "Font Awesome 5 Brands Regular";
    font-size: 21px;
    letter-spacing: 1.5px;
    line-height: 21px;                          
  }
`
const DivText = styled.div`
  margin-top: 31px;
  display: flex;
  @media (max-width: 600px) {
    margin-top: 23px;
    display: flex;
  }
`
const FirstTexts = styled.p`
  height: 16px;
  width: 36px;
  color: #999999;
  font-family: Calibre Semibold;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  text-transform: uppercase;
  padding-top: 4px;
`
const Texts = styled.p`
  margin-left: 16px;
  height: 24px;
  // color: ${props => (props.key === 1 ? "#999999" : "#22222")};
  color: #222222;
  font-family: Calibre Regular;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
`

export const query = graphql`
  query BlogDetailsQuery($slug: String!) {
    prismic {
      post(uid: $slug, lang: "en-gb") {
        body {
          ... on PRISMIC_PostBodyTag_for_post {
            type
            label
            fields {
              tag_item
            }
          }
          ... on PRISMIC_PostBodySocical_icons {
            type
            label
            fields {
              icon_image
              icon_imageSharp {
                uid
              }
            }
          }
        }
        title
        post_image
        meta_title
        meta_description
        keywords
        date_created
        content
        contenr_description
      }
    }
  }
`
