import React, { useState } from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import IMG from "../Image"
import ButtonCustom from "../ButtonCustom"

const ListBlogStyle = styled.div`
  margin-top: 10px;
  margin-left: 32px;
  margin-right: 32px;
  .col-md-6 {
    margin-top: 30px;
    /* height: 500px; */
  }
  .img {
    width: 100%;
    object-fit: cover;
    position: relative;
  }
  .btn-studies {
    background-color: transparent;
    color: black;
  }
  .btn-studies:hover {
    background-color: gold;
    color: white;
  }
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
const Rows = styled.div``
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
const MyBtn = styled.div`
  margin: 40px auto;
`

export default function ListBlog() {
  const data = useStaticQuery(graphql`
    query queryListOurwork {
      prismic {
        allProjectss(sortBy: meta_firstPublicationDate_DESC) {
          edges {
            node {
              name_category_of_project
              project_header_image
              project_name
              _meta {
                uid
              }
              relationship_to_project_category {
                ... on PRISMIC_Category_ourwork {
                  _meta {
                    uid
                  }
                }
              }
              _meta {
                lastPublicationDate
              }
            }
          }
        }
      }
    }
  `)
  const [limit, setLimit] = useState(4)
  const [orinal , setOrinal] = useState(0);
  function setMap () {
   setLimit(limit + 4);
   setOrinal(orinal + 4);
  }
  console.log(limit);
  console.log(orinal);
  console.log(data.prismic.allProjectss.edges)
  return (
    <ListBlogStyle >
      <Rows className="row">
        {data.prismic.allProjectss.edges.slice(orinal,limit).map((edge, index) => (
          <Colum
            className={`${
              data.prismic.allProjectss.edges.length === 3
                ? "col-md-4"
                : "col-md-6"
            }`}
            key={index}
          >
            <DivIMG
              as={Link}
              to={`/projects/${edge.node.relationship_to_project_category._meta.uid}/${edge.node._meta.uid}`}
            >
              <IMG
                alt={edge.node.project_header_image.alt }
                src={edge.node.project_header_image.url}
                objectFit="cover"
                h="500"
              />
            </DivIMG>
            <TitleImageBlog>
              <Span>{edge.node.name_category_of_project}</Span>
              <H3>{edge.node.project_name.map(item => item.text)}</H3>
            </TitleImageBlog>
          </Colum>
        ))}
        <MyBtn>
          <ButtonCustom
            wt="212"
            ht="48"
            fz="18"
            lineh="48"
            className="btn-studies"
            id='loadMore'
            Block={true}
            onClick={() => setMap()}
          >
            Load more case studies
          </ButtonCustom>
        </MyBtn>
      </Rows>
    </ListBlogStyle>
  )
}


