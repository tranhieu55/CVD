import React from "react"
import styled from "styled-components"
import IMG from "../Image"
import { Link } from "gatsby"

function CardProjectItem(props) {
  const { input, resize } = props
  return (
    <ListBlogStyle>
      <Rows className="row">
        {input.fields?.map((edge, index) => (
          <Colum
            className={`${input.length === 3 ? "col-md-4" : "col-md-6"}`}
            key={index}
          >
            <DivIMG
              as={Link}
              to={`/projects/${edge?.case_study?.relationship_to_project_category?._meta?.uid}/${edge?.case_study?._meta?.uid}`}
            >
              <Img
                alt={edge?.case_study?.project_header_image?.alt}
                src={edge?.case_study?.project_header_image?.url}
              />
              <Phur></Phur>
            </DivIMG>
            <TitleImageBlog>
              <Span>{edge?.case_study?.name_category_of_project}</Span>
              <H3>{edge?.case_study?.project_name?.map(item => item.text)}</H3>
            </TitleImageBlog>
          </Colum>
        ))}
      </Rows>
    </ListBlogStyle>
  )
}

export default CardProjectItem

const ListBlogStyle = styled.div`
  margin-top: 48px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 96px;
  .col-md-6 {
    margin-bottom: 22px;
    padding: 0 16px;
  }
  .img {
    width: 100%;
    object-fit: cover;
    position: relative;
  }
  .btn-studies {
    background-color: transparent;
    color: #101010;
  }
  .btn-studies:hover {
    background-color: #fecf09;
    color: #101010;
  }
  @media (max-width: 600px) {
    height: auto;
    margin: 48px 16px 0px;
  }
`
const DivIMG = styled.div`
  overflow: hidden;
  transition: all 0.4s ease-in;
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
    height: 6px;
    transition: all 0.4s ease-in;
  }

  :hover {
    img {
      transition: all 0.4s ease-in;
      transform: scale(1.05);
    }
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`
const Phur = styled.div`
  position: absolute;
  opacity: 0.3;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  height: 50%;
  width: 100%;
  bottom: 0;
`
const Rows = styled.div`
  @media (max-width: 600px) {
    margin-top: 11px;
  }
`
const Colum = styled.div`
  a {
    width: 100%;
  }
  @media (max-width: 600px) {
    height: 245px;
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 8px !important;
  }
`
const TitleImageBlog = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 5rem;
  left: 6rem;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    bottom: 25px;
    left: 40px;
  }
  @media (max-width: 347px) {
    bottom: 15px;
    left: 35px;
  }
  @media only screen and (min-width: 600px) {
    bottom: 35px;
    left: 60px;
  }
  @media only screen and (min-width: 768px) {
    bottom: 30px;
    left: 40px;
  }
  @media only screen and (min-width: 992px) {
    bottom: 50px;
    left: 80px;
  }
  @media only screen and (min-width: 1200px) {
    bottom: 45px;
    left: 63px;
  }
`
const Span = styled.span`
  font-weight: bold;
  color: #fecf09;
  font-family: "Calibre Semibold";
  font-weight: 600;
  font-size: 18px;
  @media (max-width: 600px) {
    color: #fecf09;
    font-family: "Calibre Semibold";
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 16px;
  }
`
const H3 = styled.h3`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  line-height: 0.9;
  font-family: Calibre Bold;
  @media only screen and (max-width: 600px) {
    color: #ffffff;
    font-family: Calibre Bold;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 20px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 32px;
  }
`
const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  transition: all 0.4s ease-in;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 768px) {
    height: 300px;
  }
  @media (min-width: 1366px) {
    height: 538px;
  }
`
