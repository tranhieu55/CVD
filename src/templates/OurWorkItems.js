import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import IMG from "../components/Image"
import Interested from "../components/Interested"
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
  .title-img-blog {
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
  }
  .my-btn {
    margin: 40px auto;
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
  @media only screen and (max-width: 600px) {
    .title-img-blog {
      bottom: 10px;
      left: 40px;
      h3 {
        font-size: 28px;
      }
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .title-img-blog {
      bottom: 20px;
      left: 60px;
      h3 {
        font-size: 30px;
      }
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .title-img-blog {
      bottom: 10px;
      left: 40px;
      h3 {
        font-size: 30px;
      }
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .title-img-blog {
      bottom: 50px;
      left: 80px;
      h3 {
        font-size: 36px;
      }
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .title-img-blog {
      bottom: 3rem;
      left: 40px;
      h3 {
        font-size: 36px;
      }
    }
  }
`
const DivIMG = styled.div`
  overflow: hidden;
`
export const query = graphql`
  query($slug: String!) {
    allPrismicOurworkItem(
      filter: {
        data: { relationship_to_categoryourwork: { uid: { eq: $slug } } }
      }
    ) {
      nodes {
        data {
          ourworkitem_name {
            text
          }
          ourworkitem_image {
            alt
            url
          }
          name_category_of_ourworkitem
          relationship_to_categoryourwork {
            uid
          }
        }
        uid
      }
    }
  }
`

function OurWorkItems(props) {
  return (
    <Layout location="/projects">
      <ListBlogStyle className="container-fluid">
        <div className="row">
          {props.data.allPrismicOurworkItem.nodes.map((node, index) => (
            <div
              className={`${
                props.data.allPrismicOurworkItem.nodes.length === 3
                  ? "col-md-4"
                  : "col-md-6"
              }`}
              key={index}
              tabIndex={node.uid}
            >
              <DivIMG
                as={Link}
                to={`/projects/${node.data.relationship_to_categoryourwork.uid}/${node.uid}`}
              >
                <IMG
                  alt={node.data.ourworkitem_image.alt}
                  src={node.data.ourworkitem_image.url}
                  objectFit="cover"
                />
              </DivIMG>
              <div className="title-img-blog">
                <span>{node.data.name_category_of_ourworkitem}</span>
                <h3>{node.data.ourworkitem_name.map(item => item.text)}</h3>
              </div>
            </div>
          ))}
          <div className="my-btn"></div>
        </div>
      </ListBlogStyle>
      <Interested />
    </Layout>
  )
}

export default OurWorkItems
