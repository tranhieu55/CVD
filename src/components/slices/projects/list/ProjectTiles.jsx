import React, { useState } from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import IMG from "../../../Image"

const ProjectTiles = ({ input }) => {
  const data = useStaticQuery(graphql`
    query queryListProject {
      prismic {
        allHomepages {
          edges {
            node {
              body {
                ... on PRISMIC_HomepageBodyProject_tilesq {
                  type
                  label
                  fields {
                    project_item {
                      ... on PRISMIC_Projects {
                        name_category_of_project
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
                        project_header_image
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
  `)
  const [limit, setLimit] = useState(4)
  const [orinal , setOrinal] = useState(0);
  function setMap () {
   if(limit > data.prismic.allHomepages.edges[0].node.body[5].fields.length){
     setLimit(4);
     setOrinal(0);
   }else{
     setOrinal(orinal + 4);
     setLimit(limit + 4);
   }
  }
  
  return (
    <ListBlogStyle >
      <Rows className="row">
        {data.prismic.allHomepages.edges[0].node.body[5].fields.slice(orinal, limit).map((edge, index) => (
          <Colum
            className={`${
              data.prismic.allHomepages.edges.length === 3
                ? "col-md-4"
                : "col-md-6"
            }`}
            key={index}
          >
            <DivIMG
              as={Link}
              to={`/projects/${edge.project_item.relationship_to_project_category._meta.uid}/${edge.project_item._meta.uid}`}
            >
              <Img
                alt={edge.project_item.project_header_image.alt }
                src={edge.project_item.project_header_image.url}
              />
            </DivIMG>
            <TitleImageBlog>
              <Span>{edge.project_item.name_category_of_project}</Span>
              <H3>{edge.project_item.project_name.map(item => item.text)}</H3>
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
            onClick={(orinal, limit ) => setMap(orinal, limit)}
          >
            Load more case studies
          </ButtonCustom>
        </MyBtn>
      </Rows>
    </ListBlogStyle>
  )
}

export default ProjectTiles


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
    color: #101010;
  }
  .btn-studies:hover {
    background-color: #FECF09;
    color: white;
  }
  @media(max-width: 600px){
    margin-top: 30px;
    height: 1076px;
    margin: 30px 16px 0px;
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
    background-color: #FECF09;
    height: 6px;
    transition: all 0.4s ease-in;
  }
  :hover {
    transform: scale(1.05);
    ::after {
      width: 100%;
    }
  }
  @media(max-width: 600px){
    width: 100%;
    height: 100%;
  }
`
const Rows = styled.div`
  @media(max-width: 600px){
    margin-left: 0px;
    margin-right: 0px;
  }
`
const Colum = styled.div`
  @media(max-width: 600px){
    height: 245px;
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 8px;
    margin-top: 0px !important;
  }
`
const TitleImageBlog = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 5rem;
  left: 6rem;
  cursor: pointer;
  /* color:red; */
  @media only screen and (max-width: 600px) {
    bottom: 25px;
    left: 24px;
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
  color: #FECF09;
  font-family: 'Calibre Semibold';
  font-weight: 600;
  font-size: 18px;
  @media(max-width: 600px){
    color: #FECF09;
    font-family: 'Calibre Semibold';
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 16px;
  }
`
const H3 = styled.h3`
  color: white;
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 600px) {
    color: #FFFFFF;
    font-family: Calibre;
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
    font-size: 36px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 36px;
  }
  @media(min-width: 1366px){
    font-size: 48px;
  }
`
const MyBtn = styled.div`
  margin: 40px auto;
  @media(max-width: 600px){
    margin: 16px 0px;
    height: 48px;
    width: 100%;
  }
`
const ButtonCustom = styled.button`
  font-family: "Calibre Semibold";
  border: 2px solid #fecf09;
  border-radius: 3px;
  background-color: ${({ bgColor }) => bgColor === null ? "transparent" : bgColor};
  color: ${({ textColor }) => textColor};
  font-weight: ${({ fw }) => `${fw}`};
  outline: none;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  width: ${({ wt }) => `${wt}px`};
  width: ${({ w }) => `${w}%`};
  height: ${({ ht }) => `${ht}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin: ${({ margin }) => `${margin}`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  padding-left: ${({ pdl }) => `${pdl}px`};
  padding-right: ${({ pdr }) => `${pdr}px`};
  height: ${({ cc }) => `${cc}px`};
  font-size: ${({ fz }) => `${fz}px`};
  line-height: ${({ lineh }) => `${lineh}px`};
  padding: ${({ pd1 }) => `${pd1}px`} ${({ pd2 }) => `${pd2}px`};
  position: relative;
  overflow: hidden;
  white-space: ${({ wspace }) => `${wspace}`};
  font-weight: 500;
  color: #101010;
  :hover {
    transition: all 0.6s ease;
    background-color: #ffd700;
    color: #000;
  }
  @media(max-width: 600px){
    width: 100%;
    height: 100%; 
  }
`
const Img = styled.img`
  display: block;
  height: 500px;
  width: 100%;
  object-fit: cover;
@media(max-width: 600px){
  width: 100%;
  height: 100%;
}
@media(min-width: 768px){
  height: 300px;
}
@media(min-width: 1366px){
  height: 500px;
}
`
