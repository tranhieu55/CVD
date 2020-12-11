import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"
import H2 from "../../components/bits/H2"
import P from "../../components/bits/Typography"

const WraperBannerProjects = styled.div`
  /* height: 50vh; */
  background-color: ${theme.colors.lightGray};
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 32px;
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
      font-size: 32px;
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
      font-size: 36px;
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
      font-size: 40px;
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
    h2 {
      font-size: 64px;
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
      font-size: 20px !important;
    }
  }
`
const BannerProjectsContent = styled.div`
  padding-top: 10rem;
  padding-bottom: 40px;
  p {
    font-family: "Calibre Semibold";
    height: 16px;
    line-height: 16px;
    font-size: 14px;
    position: relative;
    letter-spacing: 1px;
    &::before {
      position: absolute;
      right: calc(100% + 1rem);
      top: 30%;
      display: block;
      content: "";
      width: 64px;
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
  margin-right: 1rem;
  a {
    text-decoration: none;
    display: block;
    opacity: 0.3;
    color: #101010;
    font-family: "Calibre Semibold";
    font-size: 20px;
    position: relative;
    :after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 0%;
      background-color: #101010;
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
    color: #101010 !important;
    opacity: 1;
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      content: " ";
      background-color: #101010;
      opacity: 0.3;
      height: 2px;
      transition: all 0.4s ease-in;
    }
  }
`
const BannerProjects = () => {
  const dataAllCategoryOurwork = useStaticQuery(graphql`
    query queryAllCategoryOurwork {
      prismic {
        allCategory_ourworks {
          edges {
            node {
              _meta {
                uid
              }
              category_name
            }
          }
        }
      }
    }
  `)
  return (
    <WraperBannerProjects>
      <BannerProjectsContent className="container">
        <P
          uppercase={true}
          fontWeight={theme.fonts.bold}
          coLor={theme.colors.gray1}
          mrb_rem="2"
        >
          experience
        </P>
        <H2 fz="64" mrb_rem="1" fontFamily="Calibre Bold">
          Our Work
        </H2>
        <div className="row">
          <ListCategory className="col-md-10">
            {dataAllCategoryOurwork.prismic.allCategory_ourworks.edges.map(
              (edge, index) => (
                <CategoryItem key={index}>
                  <Link
                    to={`${edge.node._meta.uid === "all" ? "/projects" : ""}`}
                    activeClassName="active"
                  >
                    {" "}
                    {edge.node.category_name.map(item => item.text)}{" "}
                  </Link>
                </CategoryItem>
              )
            )}
          </ListCategory>
        </div>
      </BannerProjectsContent>
    </WraperBannerProjects>
  )
}
export default BannerProjects
