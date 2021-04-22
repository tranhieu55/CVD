import { Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"
import P from "../bits/Typography"
import H2 from "../bits/H2/"

const WraperBannerPartners = styled.div`
  min-height: 50vh;
  background-color: ${theme.colors.lightGray};
  margin-bottom: 3rem;
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 14px;
    }
    p {
      font-size: 14px;
    }
    ul {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    li {
      padding-right: 7px;
      text-align: center;
    }
    a {
      font-size: 12px !important;
    }
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    h2 {
      font-size: 14px;
    }
    p {
      font-size: 14px;
    }
    ul {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    li {
      padding-right: 7px;
      text-align: center;
    }
    a {
      font-size: 13px !important;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    h2 {
      font-size: 14px;
    }
    p {
      font-size: 14px;
    }
    ul {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    li {
      padding-right: 10px;
      text-align: center;
    }
    a {
      font-size: 14px !important;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
    ul {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    li {
      padding-right: 20px;
      text-align: center;
    }
    a {
      font-size: 16px !important;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    p {
      font-size: 14px;
    }
    h2 {
      font-size: 35px;
    }
    p {
      font-size: 16px;
    }
    ul {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    li {
      padding-right: 20px;
      text-align: center;
    }
    a {
      font-size: 18px !important;
    }
  }
`
const BannerPartnersContent = styled.div`
  padding-top: 10rem;
  p {
    position: relative;
    &::before {
      position: absolute;
      right: calc(100% + 1rem);
      top: 50%;
      display: block;
      content: "";
      width: 6rem;
      height: 2px;
      background: ${theme.colors.primaryColor};
    }
  }
`

const ListCategory = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`
const CategoryItem = styled.li`
  cursor: pointer;
  margin-right: 0.2rem;
  a {
    text-decoration: none;
    display: block;
    color: ${theme.colors.gray2} !important;
    font-weight: ${theme.fonts.bold};
    font-size: 1rem;
    position: relative;
    padding-bottom: 3px;
    :after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 0%;
      background-color: black;
      height: 3px;
      transition: all 0.4s ease-in;
    }
    :hover {
      ::after {
        width: 100%;
      }
    }
  }
  a.active {
    color: ${theme.colors.secondaryColor} !important;
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      content: " ";
      background-color: black;
      height: 3px;
      transition: all 0.4s ease-in;
    }
  }
`
const BannerPartners = () => {
  const listCategoryPartners = useStaticQuery(graphql`
    query {
      prismic {
        allPartners_pages {
          edges {
            node {
              description
              title
              _meta {
                uid
              }
              body {
                ... on PRISMIC_Partners_pageBodyLists_category {
                  fields {
                    category_partner {
                      ... on PRISMIC_Partner_category {
                        category_name
                        _meta {
                          uid
                        }
                      }
                    }
                  }
                  type
                }
              }
            }
          }
        }
      }
    }
  `)
  //   console.log("hieutt123", listCategoryPartners)
  const data = listCategoryPartners.prismic.allPartners_pages.edges[0].node
  //   console.log(
  //     "data-filter",
  //     data.body.map((item, key) => item)
  //   )
  return (
    <WraperBannerPartners>
      <BannerPartnersContent className="container">
        <P
          uppercase={true}
          fontWeight={theme.fonts.bold}
          coLor={theme.colors.gray1}
          mrb_rem="2"
        >
          {data.title[0].text}
        </P>
        <H2 mrb_rem="1.5">{data.description[0].text}</H2>
        <div className="row">
          <ListCategory className="col-md-10">
            {/* {data.body.map(
              (node, index) => (
                <CategoryItem key={index}>
                  <Link
                    to={`${
                      node.uid === "all" ? "/partners" : `/partners/${node.uid}`
                    }`}
                    activeClassName="active"
                  >
                    {" "}
                    {node.data.partners_title.map(item => item.text)}{" "}
                  </Link>
                </CategoryItem>
              )
            )} */}
          </ListCategory>
        </div>
      </BannerPartnersContent>
    </WraperBannerPartners>
  )
}
export default BannerPartners
