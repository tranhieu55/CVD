import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import IMG from "../Image"
import { Link } from "gatsby"

CardProject.propTypes = {
  input: PropTypes.object,
}

function CardProject(props) {
  const { input } = props
  const inforProject = input.project_item

  return (
    <Colum className="col-md-6">
      <DivIMG
        as={Link}
        to={`/projects/${inforProject.relationship_to_project_category._meta.uid}/${inforProject._meta.uid}`}
      >
        <IMG
          alt={inforProject.project_header_image.alt}
          src={inforProject.project_header_image.url}
          objectFit="cover"
          h="500"
        />
      </DivIMG>
      <TitleImageBlog>
        <Span>{inforProject.name_category_of_project}</Span>
        <H3>{inforProject.project_name[0].text}</H3>
      </TitleImageBlog>
    </Colum>
  )
}

export default CardProject

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
    background-color: gold;
    height: 5px;
    transition: all 0.4s ease-in;
  }
  :hover {
    ::after {
      width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    img {
      height: 245px;
    }
  }
`
const Colum = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 0px;
    margin-top: 10px !important;
  }
`

const TitleImageBlog = styled.div`
  position: absolute;
  left: 63px;
  bottom: 30px;
  z-index: 2;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    left: 38px;
    bottom: 16px;
  }

  /* @media only screen and (max-width: 600px) {
    bottom: 10px;
    left: 40px;
  }
  @media only screen and (min-width: 600px) {
    bottom: 20px;
    left: 60px;
  }
  @media only screen and (min-width: 768px) {
    bottom: 10px;
    left: 40px;
  }
  @media only screen and (min-width: 992px) {
    bottom: 50px;
    left: 80px;
  }
  @media only screen and (min-width: 1200px) {
    bottom: 3rem;
    left: 40px;
  } */
`
const Span = styled.span`
  color: #fecf09;
  font-size: 18px;
  line-height: 16px;
  font-family: "Calibre Semibold";
  display: block;
  padding: 0;
  margin: 0;
  margin-bottom: 4px;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 6px;
  }
`
const H3 = styled.h3`
  color: #ffffff;
  font-size: 48px;
  font-family: "Calibre Bold";
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }

  /* @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 36px;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 48px;
  } */
`
