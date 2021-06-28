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
  background-color: #f8f8f8;
  h2 {
    letter-spacing: -1px;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 0px;
    height: 214px;
    h2 {
      font-size: 40px;
      color: #101010;
      font-family: "Calibre";
      font-weight: bold;
      margin-bottom: 20px !important;
      line-height: 26px;
      letter-spacing: -1px;
    }
    p {
      margin-bottom: 20px;
      margin-left: 50px;
      font-size: 12px !important;

      &::before {
        position: absolute;
        right: calc(100% + 1rem);
        top: 30%;
        width: 32px !important;
      }
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
      font-size: 46px;
    }
    p {
      margin-left: 35px;
      font-size: 14px;
    }
    li {
      text-align: center;
    }
    a {
      font-size: 13px !important;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .container {
      max-width: 600px !important;
    }
    h2 {
      font-size: 46px;
    }
    p {
      font-size: 14px;
    }
    li {
      text-align: center;
    }
    a {
      font-size: 14px !important;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .container {
      max-width: 670px !important;
    }
    h2 {
      font-size: 46px;
    }
    p {
      font-size: 14px;
    }
    li {
      text-align: center;
    }
    a {
      font-size: 16px !important;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .container {
      max-width: 1140px !important;
    }
    h2 {
      font-size: 64px;
      margin-bottom: 16px;
      font-weight: bold;
    }
    p {
      margin-left: 0px;
      font-size: 16px;
    }
    li {
      text-align: center;
      white-space: nowrap;
    }
    a {
      font-size: 20px !important;
    }
  }
  @media (min-width: 1600px) {
    height: 370px;
  }
`

const BannerProjectsContent = styled.div`
  height: 100%;
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

  @media only screen and (max-width: 600px) {
    padding-bottom: 0px;
    padding-top: 86px;
  }
  @media (min-width: 600px) {
    padding-bottom: 20px;
    padding-top: 6rem;
    padding-left: 0px !important;
    padding-right: 0px !important;
    p {
      &::before {
        right: calc(100% + 10px);
        width: 25px;
      }
    }
  }
  @media (min-width: 768px) {
    p {
      &::before {
        right: calc(100% + 10px);
        width: 30px;
      }
    }
  }
  @media (min-width: 992px) {
    padding-top: 10rem;
    padding-bottom: 45px;
    padding-left: 100.5px !important;
    padding-right: 30px !important;
    .container {
      max-width: 890px;
    }
  }
  @media (min-width: 1024px) {
    p {
      &::before {
        right: calc(100% + 10px);
        width: 35 px;
      }
    }
  }
  @media (min-width: 1200px) {
    p {
      &::before {
        right: calc(100% + 1rem);
        width: 64px;
      }
    }
  }
  @media (min-width: 1440px) {
    padding-left: 30px;
    padding-right: 283px;
  }
`

const ListCategory = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  max-width: unset;
  flex: unset;

  li.reset_filters {
    display: flex;
    &::after {
      content: "\f01e";
      font-family: "Font Awesome 5 Pro Regular";
      font-size: 13px;
      color: #101010;
    }
  }
  .not_reset_filters {
    display: none;
    /* opacity: 0.3; */
    color: #222222;
  }
  li.not_reset_filters {
    display: none;
    &::after {
      content: "\f01e";
      font-family: "Font Awesome 5 Pro Regular";
      font-size: 13px;
      color: #222222;
    }
  }
  li.not_reset_filters {
    display: none;
    &::after {
      content: "\f01e";
      font-family: "Font Awesome 5 Pro Regular";
      font-size: 13px;
      color: #222222;
    }
  }
  li.reset_filters_moblie {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    padding-bottom: 24px;
    overflow-x: auto;
    overflow-y: hidden;
    li.reset_filters_moblie {
      display: block;
    }
    li.reset_filters {
      display: flex;
      &::after {
        content: "\f01e";
        font-family: "Font Awesome 5 Pro Regular";
        font-size: 13px;
        color: #101010;
      }
    }
    .not_reset_filters {
      display: none;
    }
  }
  @media (min-width: 600px) {
    padding: 0px 15px;
  }
  @media (min-width: 768px) {
    padding: 0px 15px;
    width: ${props => (props.show && props.show !== 0 ? "995px" : "845px")};
  }
  @media (max-width: 991px) {
    display: -webkit-inline-box;
    overflow-x: scroll;
  }
  @media (min-width: 992px) {
    li.reset_filters {
      display: flex;
    }
  }
`
const CategoryItem = styled.li`
  .opacity {
    opacity: 1;
    margin-right: 5px;
  }
  cursor: pointer;
  padding: 0;
  margin: 0;
  margin-right: 32px;
  a {
    text-decoration: none;
    display: block;
    opacity: 0.3;
    color: #222222;
    font-family: "Calibre Semibold";
    font-size: 20px;
    line-height: 24px;
    position: relative;
    height: 23px;
    // persudo class
    :after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 0%;
      background-color: #222222;
      height: 3px;
      transition: all 0.4s ease-in 0s;
    }

    /* // when hover
    :hover {
      border-bottom: 2px solid #222222;
    } */
  }
  a:not([href]):not([class]) {
    color: #222222;
  }
  a.active_modify {
    color: #222222 !important;
    opacity: 1;
    margin-right: 8px;
    border-bottom: 2px solid #222222;
    :after {
      content: unset;
    }
  }

  // when a active
  a.active {
    color: #222222 !important;
    opacity: 1;
    &::after {
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      content: " ";
      background-color: #222222;
      opacity: 0.3;
      transition: all 0s ease-in;
      height: 2px;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-right: 24px;
    padding-right: 0px !important;
    a {
      font-size: 20px !important;
      white-space: nowrap;
    }
  }
  @media (min-width: 600px) {
    a {
      font-size: 16px !important;
    }
  }
  @media (min-width: 768px) {
    a {
      font-size: 16px !important;
    }
  }
  @media (min-width: 1200px) {
    a {
      font-size: 20px !important;
    }
  }
`
const BannerBlog = () => {
  const listCategoryPartners = useStaticQuery(graphql`
    query {
      prismic {
        allPost_listing_pages {
          edges {
            node {
              title
              big_title
              meta_title
              meta_description
              keywords
              body {
                ... on PRISMIC_Post_listing_pageBodyList_post_category {
                  fields {
                    post_category {
                      ... on PRISMIC_Post_category {
                        title
                        _meta {
                          uid
                        }
                      }
                    }
                  }
                  type
                }
                ... on PRISMIC_Post_listing_pageBodyList_post {
                  type
                  fields {
                    post_item {
                      ... on PRISMIC_Post {
                        title
                        post_image
                        _meta {
                          uid
                        }
                        date_created
                        post_category {
                          ... on PRISMIC_Post_category {
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
      }
    }
  `)

  const data = listCategoryPartners
    ? listCategoryPartners.prismic?.allPost_listing_pages?.edges[0]?.node
    : []
  const cateAll = {
    post_category: {
      title: [{ spans: [], text: "All", type: "heading1" }],
      __typename: "PRISMIC_Post_category",
      _meta: {
        uid: "all",
      },
    },
  }
  const list = listCategoryPartners
    ? listCategoryPartners.prismic?.allPost_listing_pages?.edges[0]?.node?.body.filter(
        item => (item.type ? item.type === "list_post_category" : [])
      )
    : []

  const listCategories = listCategoryPartners
    ? list.filter(x => x.type && x.type === "list_post_category")
    : []

  const dataTiles = listCategories.length > 0 ? listCategories[0]?.fields : []

  const newArr = [cateAll, ...dataTiles]

  const dispatch = useContext(OurWorkDispatchContext)
  const state = useContext(OurWorkStateContext)
  const [filter, setFilter] = useState()
  function setFilters(index) {
    setFilter(index)
  }
  return (
    <WraperBannerProjects>
      <BannerProjectsContent className="container">
        {data ? (
          <P
            uppercase={true}
            fontWeight={theme.fonts.bold}
            coLor={theme.colors.gray1}
            mrb="35"
          >
            {data?.title[0]?.text ? data?.title[0]?.text : ""}{" "}
          </P>
        ) : (
          <></>
        )}
        {data ? (
          <H2
            fz="64"
            mrb_rem="1.5"
            fontFamily="Calibre"
            lineh="56"
            lett="-1"
            col="#101010"
          >
            {data?.big_title[0]?.text ? data?.big_title[0]?.text : ""}
          </H2>
        ) : (
          <></>
        )}
        {newArr ? (
          <div className="row ">
            <ListCategory className="col-md-10" show={filter}>
              {newArr?.map((item, index) => (
                <CategoryItem
                  key={index}
                  onClick={() => {
                    dispatch({
                      type: "ADD_FILTER_ITEM",
                      value: item?.post_category?._meta?.uid
                        ? item?.post_category?._meta?.uid
                        : "",
                    })
                    setFilter(index)
                  }}
                >
                  <Link
                    className={
                      [...state.listSelected].includes(
                        item?.post_category?._meta?.uid
                          ? item?.post_category?._meta?.uid
                          : ""
                      ) && "active"
                    }
                  >
                    {item?.post_category?.title[0]?.text
                      ? item?.post_category?.title[0]?.text
                      : ""}
                  </Link>
                </CategoryItem>
              ))}
              <CategoryItem
                className={`${
                  filter && filter !== 0 ? "reset_filters" : "not_reset_filters"
                }`}
                onClick={() => {
                  dispatch({ type: "RESET_FILTER" })
                  setFilters(0)
                }}
              >
                <Link className="opacity">Reset Filters</Link>
              </CategoryItem>
            </ListCategory>
          </div>
        ) : (
          <></>
        )}
      </BannerProjectsContent>
    </WraperBannerProjects>
  )
}
export default BannerBlog
