import React from "react"
import styled from "styled-components"
import BannerBlogDetails from "../components/Banner/BannerBlogDetails"
import Layout from "../components/Layout"
import moment from "moment"
import { RichText } from "prismic-reactjs"
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share"

const BlogDetails = props => {
  // get location
  const { location } = props

  const dataIcon = props
    ? props.data?.prismic?.post?.body?.filter(item =>
        item?.type ? item?.type === "socical_icons" : ""
      )
    : []
  // const dataIconMap = dataIcon?.map(item =>
  //   item?.fields?.map(item => item?.icon_image.url)
  // )
  // console.log("akvkvkv", dataIconMap)
  const dataText = props
    ? props.data.prismic.post?.body?.filter(item =>
        item?.type ? item?.type === "tag_for_post" : ""
      )
    : []

  return (
    <Layout location="/blog-details">
      <BannerBlogDetails
        titles={props.data?.prismic?.post?.title?.map(item =>
          item.text ? item.text : item
        )}
        sub={moment(props.data?.prismic?.post?.date_created)?.format("LL")}
      ></BannerBlogDetails>
      <Img
        src={
          props.data?.prismic?.post?.post_image?.url
            ? props.data?.prismic?.post?.post_image?.url
            : ""
        }
        alt={
          props.data?.prismic?.post.post_image?.alt
            ? props.data?.prismic?.post.post_image?.alt
            : ""
        }
      ></Img>
      <Container>
        {props &&
          props.data?.prismic?.post?.contenr_description?.map((item, index) => (
            <Text key={index}>{item.text}</Text>
          ))}
        <TextImg>
          <Texxt>
            {RichText.render(
              props.data?.prismic?.post?.content
                ? props.data?.prismic?.post?.content
                : ""
            )}
          </Texxt>
        </TextImg>
        <Fotters>
          <DivIcon>
            {dataIcon ? (
              dataIcon?.map((item, key) =>
                item?.fields?.map((x, index) => {
                  switch (index * 1) {
                    case 0:
                      return (
                        <FacebookShareButton key={index} url={location.href}>
                          <Icon
                            key={index}
                            value={index}
                            src={x?.icon_image?.url ? x?.icon_image?.url : ""}
                            alt={x?.icon_image?.alt ? x?.icon_image?.alt : ""}
                          />
                        </FacebookShareButton>
                      )
                    case 1:
                      return (
                        <TwitterShareButton key={index} url={location.href}>
                          <Icon
                            value={index}
                            src={x?.icon_image?.url ? x?.icon_image?.url : ""}
                            alt={x?.icon_image?.alt ? x?.icon_image?.alt : ""}
                          />
                        </TwitterShareButton>
                      )
                    case 2:
                      return (
                        <EmailShareButton key={index} url={location.href}>
                          <Icon
                            value={index}
                            src={x?.icon_image?.url ? x?.icon_image?.url : ""}
                            alt={x?.icon_image?.alt ? x?.icon_image?.alt : ""}
                          />
                        </EmailShareButton>
                      )
                    default:
                      return (
                        <FacebookShareButton key={index} url={location.href}>
                          <Icon
                            value={index}
                            src={x?.icon_image?.url ? x?.icon_image?.url : ""}
                            alt={x?.icon_image?.alt ? x?.icon_image?.alt : ""}
                          />
                        </FacebookShareButton>
                      )
                  }
                })
              )
            ) : (
              <></>
            )}
          </DivIcon>
          <DivText>
            <FirstTexts>Tags</FirstTexts>
            {dataText[0]?.fields?.map((item, index) => (
              <Texts key={index}>{item.tag_item ? item.tag_item : ""}</Texts>
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
  width: 100%;

  @media (max-width: 600px) {
    max-width: 343px;
    margin: 16px auto 32px;
  }
  @media (max-width: 360px) {
    max-width: 300px;
    margin: 16px auto 32px;
  }
  @media (min-width: 600px) {
    max-width: 586px;
    margin: 20px auto 40px;
  }
  @media (min-width: 768px) {
    max-width: 716px;
    margin: 20px auto 40px;
  }
  @media (min-width: 1200px) {
    margin-top: 60px;
    margin-left: 260px;
    margin-bottom: 80px;
    max-width: 716px;
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
  p {
    margin-bottom: 0px;
    color: #222222;
    font-family: Calibre Regular;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 28px;
    strong {
      color: #101010;
      font-family: Calibre Medium;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 20px;
    }
  }
  .block-img {
    img {
      width: 100%;
      height: 428px;
      margin-top: 17px;
      margin-bottom: 40px;
      object-fit: cover;
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
  @media (max-width: 600px) {
    img {
      height: 204px;
      margin-top: 6px;
      margin-bottom: 24px;
      object-fit: cover;
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
  margin-top: 23px;
  button {
    margin-right: 16.5px;
    &:focus {
      outline: none;
    }
  }

  @media (max-width: 600px) {
    margin-top: 24px;
  }
`
const Icon = styled.img`
  width: ${({ value }) => (value === 0 ? "12.5px" : "")};
  width: ${({ value }) => (value === 1 ? "21.5px" : "")};
  width: ${({ value }) => (value === 2 ? "18px" : "")};
  height: ${({ value }) => (value === 0 ? "19.5px" : "")};
  height: ${({ value }) => (value === 1 ? "17.53px" : "")};
  height: ${({ value }) => (value === 2 ? "14px" : "")};
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
  font-family: "Calibre Semibold";
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
   /* color: ${props => (props.key === 1 ? "#999999" : "#22222")}; */
  color: #222222;
  font-family: "Calibre Regular";
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
