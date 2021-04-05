import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import ButtonCustom from "../components/ButtonCustom"
import IMG from "../components/Image"
import Layout from "../components/Layout"

const ListBlogStyle = styled.div`
  .row {
    margin-top: 15px;
  }
  .col-md-6 {
    margin-top: 30px;
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
  /* reponsive */
  /* Extra small devices (phones, 600px and down) */
`
const DivIMG = styled.div`
  overflow: hidden;
`
const RowItem = styled.div`
  margin-top: 15px;
`
const Item = styled.div``
const TitleImageBlock = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 5rem;
  left: 6rem;
  cursor: pointer;
  /* color:red; */
  span {
    font-weight: bold;
    color: gold;
  }
  h3 {
    color: white;
    font-size: 36px;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  @media only screen and (max-width: 600px) {
    bottom: 10px;
    left: 40px;
    h3 {
      font-size: 28px;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    bottom: 20px;
    left: 60px;
    h3 {
      font-size: 30px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    bottom: 10px;
    left: 40px;
    h3 {
      font-size: 30px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    bottom: 50px;
    left: 80px;
    h3 {
      font-size: 36px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    bottom: 3rem;
    left: 40px;
    h3 {
      font-size: 36px;
    }
  }
`
const MyButton = styled.div`
  margin: 40px auto;
`
export const query = graphql`
  query ProjectByCate($slug: String!) {
    prismic {
      allProjectss(where: { name_category_of_project: $slug }) {
        edges {
          node {
            project_name
            project_header_image
            name_category_of_project
            relationship_to_project_category {
              ... on PRISMIC_Category_ourwork {
                _meta {
                  uid
                }
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`

function OurWorkItems(props) {
  return (
    <Layout location="/projects">
      <ListBlogStyle className="container-fluid">
        <RowItem>
          {props.data.prismic.allProjectss.edges.map((edge, index) => (
            <Item
              className={`${
                props.data.prismic.allProjectss.edges.length === 3
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
                  alt={edge.node.project_header_image.alt}
                  src={edge.node.project_header_image.url}
                  objectFit="cover"
                  h="500"
                />
              </DivIMG>
              <TitleImageBlock>
                <span>{edge.node.name_category_of_project}</span>
                <h3>{edge.node.project_name[0].text}</h3>
              </TitleImageBlock>
            </Item>
          ))}
          <MyButton>
            <ButtonCustom
              wt="212"
              ht="48"
              fz="18"
              lineh="48"
              className="btn-studies"
            >
              Load more case studies
            </ButtonCustom>
          </MyButton>
        </RowItem>
      </ListBlogStyle>
    </Layout>
  )
}

export default OurWorkItems
