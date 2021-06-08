import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import IMG from "../../Image"

const OurWorkDesktop = ({ dataHeaderOurwork }) => {
  const data = dataHeaderOurwork.edges[0]?.node?.body
  return (
    <Container>
      <Body>
        <ListOurWork>
          <SubTitle>{data[0]?.primary?.title[0]?.text}</SubTitle>
          {data[0]?.fields[0]?.content?.map((item, key) => {
            return (
              <OurWork key={key}>
                <Link href="#">{item?.text}</Link>
              </OurWork>
            )
          })}
        </ListOurWork>
        <Grid>
          <ListCaseStudy>
            <SubTitle>{data[1]?.primary?.title[0]?.text}</SubTitle>
            <DivIMG
              as={Link}
              className="imagefull mask"
              // to={
              //   "projects/" +
              //   `${dataServices[2]?.primary.launches_project.relationship_to_project_category._meta.uid}/` +
              //   `${dataServices[2]?.primary.launches_project._meta.uid}`
              // }
            >
              <IMG
                src={data[1]?.fields[0]?.image_feautured?.url}
                objectFit="cover"
                heightPercent="100"
                alt={data[1]?.fields[0]?.image_feautured?.alt}
              />
              <TitleImageBlog>
                <Span>{data[1]?.fields[0]?.sub_image[0]?.text}</Span>
                <H3>{data[1]?.fields[0]?.title_image[0]?.text}</H3>
              </TitleImageBlog>
            </DivIMG>
          </ListCaseStudy>
          <ListImage>
            <SubTitle>{data[2]?.primary?.title[0]?.text}</SubTitle>
            <BlockImage>
              {data[2]?.fields?.map((item, index) => {
                return (
                  <Img
                    key={index}
                    src={item?.image_launched?.url}
                    alt={item?.image_launched?.alt}
                  />
                )
              })}
            </BlockImage>
          </ListImage>
        </Grid>
      </Body>
    </Container>
  )
}

export default OurWorkDesktop

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 59px;
  padding-top: 31px;
  @media (min-width: 992px) {
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`

const Body = styled.div`
  display: grid;
  grid-gap: 48px;
  grid-template-columns: auto auto;

  @media (max-width: 1366px) {
    grid-gap: 24px;
  }
  @media (max-width: 1300px) {
    grid-gap: 24px;
  }
`
const ListOurWork = styled.div`
  min-width: 300px;
`
const OurWorks = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 8px;
`

const OurWork = styled.p`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 57px;
  margin-bottom: 5px;
  a,
  a:focus,
  a:active,
  a:visited,
  a:hover {
    color: #222222;
    text-decoration: none;
  }
  border-bottom: 1px solid #eeeeee;
`
const SubTitle = styled.h6`
  margin-bottom: 10px;
  color: #999999;
  font-family: Calibre Semibold;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  text-transform: uppercase;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 48px;

  @media (max-width: 1366px) {
    grid-gap: 24px;
  }
`

const ListCaseStudy = styled.div`
  max-width: 470px;
  .imagefull {
    height: 300px !important;
    width: 100%;
    cursor: pointer;
  }
  .mask ::before {
    position: absolute;
    content: "";
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    height: 300px;
    width: 100%;
    left: 0;
    opacity: 30%;
  }
`
const CaseStudy = styled.div`
  width: 100%;
  margin-top: 8px;
  img {
    width: 100%;
    height: 100%;
  }
`
const ListImage = styled.div`
  min-width: 409px;
`
const BlockImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 7px;
  margin-top: 15px;
`
const Img = styled.img`
  width: 198.5px;
  height: 143px;
  object-fit: cover;
`
const DivIMG = styled.div`
  overflow: hidden;
  transition: all 200ms ease-in;
  position: relative;
  display: inline-block;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    background-color: #fecf09;
    height: 5px;
    transition: all 0.4s ease-in;
  }
  :hover {
    ::after {
      width: 100%;
    }
  }
`
const TitleImageBlog = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 5rem;
  left: 6rem;
  cursor: pointer;

  @media only screen and (min-width: 992px) {
    bottom: 1rem;
    left: 1rem;
  }
  @media only screen and (min-width: 1366px) {
    top: 223px;
    left: 27px;
  }
`
const H3 = styled.h3`
  color: white;
  font-size: 48px;
  font-family: "Calibre Bold";
  margin: 0;
  padding: 0;
  @media (max-width: 1200px) {
    font-size: 32px;
  }
`
const Span = styled.span`
  font-weight: bold;
  color: #fecf09 !important;
  font-size: 18px !important;
  margin-bottom: 5px;
`
