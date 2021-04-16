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
`
const Colum = styled.div``
const TitleImageBlog = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 5rem;
  left: 6rem;
  cursor: pointer;
  /* color:red; */
  @media only screen and (max-width: 600px) {
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
  }
`
const Span = styled.span`
  font-weight: bold;
  color: gold;
`
const H3 = styled.h3`
  color: white;
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 600px) {
    font-size: 28px;
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
  @media only screen and (min-width: 1200px) {
    font-size: 36px;
  }
`
