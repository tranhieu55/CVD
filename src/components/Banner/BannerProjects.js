import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"
import H2 from "../../components/bits/H2"
import P from "../../components/bits/Typography"
import {
  OurWorkDispatchContext,
  OurWorkStateContext,
} from "../../context/ourwork/OurWorkContextProvider"

const WraperBannerProjects = styled.div`
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
      padding-right: 0px;
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
  align-items: center;
  justify-content: space-between;

  // reset boostrap
  max-width: unset;
  flex: unset;

  // li : reset filter has persudo class
  li.reset_filters {
    display: flex;
    &::after {
      content: "\f01e";
      font-family: "Font Awesome 5 Pro Regular";
      font-size: 13px;
      color: #101010;
    }
  }
`
const CategoryItem = styled.li`
  cursor: pointer;
  padding: 0;
  margin: 0;
  margin-right: 32px;

  a {
    text-decoration: none;
    display: block;
    opacity: 0.3;
    color: #101010;
    font-family: "Calibre Semibold";
    font-size: 20px;
    line-height: 24px;
    position: relative;

    // persudo class
    :after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 0%;
      background-color: #101010;
      height: 3px;
      transition: all 0.4s ease-in 0s;
    }

    // when hover
    :hover {
      ::after {
        width: 100%;
      }
    }
  }

  a.active_modify {
    color: #101010 !important;
    opacity: 1;
    margin-right: 8px;

    :after {
      content: unset;
    }
  }

  // when a active
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
      transition: all 0s ease-in;
    }
  }
`

const BannerProjects = () => {
  const getListCateProject = useStaticQuery(graphql`
    query QueryBannerOurwork {
      prismic {
        allOurwork_pages {
          edges {
            node {
              body {
                ... on PRISMIC_Ourwork_pageBodyBanner_our_work_page {
                  type
                  primary {
                    sub_title
                    title
                  }
                  fields {
                    category_project_item {
                      ... on PRISMIC_Category_ourwork {
                        category_name
                        _meta {
                          uid
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
    }
  `)

  const listCategories = getListCateProject.prismic.allOurwork_pages.edges[0].node.body[0].fields.filter(
    x => x.category_project_item
  )

  const dispatch = useContext(OurWorkDispatchContext)
  const state = useContext(OurWorkStateContext)

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
            {listCategories.map((item, index) => (
              <CategoryItem
                key={index}
                onClick={() =>
                  dispatch({
                    type: "ADD_FILTER_ITEM",
                    value: item.category_project_item._meta.uid,
                  })
                }
              >
                <Link
                  className={
                    [...state.listSelected].includes(
                      item.category_project_item._meta.uid
                    ) && "active"
                  }
                >
                  {item.category_project_item.category_name[0]?.text}
                </Link>
              </CategoryItem>
            ))}

            <CategoryItem
              className="reset_filters"
              onClick={() => dispatch({ type: "RESET_FILTER" })}
            >
              <Link className="active_modify">Reset Filters</Link>
            </CategoryItem>
          </ListCategory>
        </div>
      </BannerProjectsContent>
    </WraperBannerProjects>
  )
}
export default BannerProjects
