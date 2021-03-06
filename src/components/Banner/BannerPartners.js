import { Link } from "gatsby"
import React, { useContext, memo, useState } from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"
import H2 from "../../components/bits/H2"
import P from "../../components/bits/Typography"
import {
  OurWorkDispatchContext,
  OurWorkStateContext,
} from "../../context/ourwork/OurWorkContextProvider"

const BannerPartners = ({ input, location }) => {
  const data = input ? input?.primary : []

  const cateAll = {
    category_partner_banner: {
      category_name: [
        {
          spans: [],
          text: "All",
          type: "heading1",
        },
      ],
      __typename: "PRISMIC_Partner_category",
      _meta: {
        uid: "all",
      },
    },
  }

  const listCategories = input ? input?.fields : []

  const newArr = [cateAll, ...listCategories]

  const dispatch = useContext(OurWorkDispatchContext)
  const state = useContext(OurWorkStateContext)
  const [filter, setFilter] = useState()
  function setFilters(index) {
    setFilter(index)
  }
  return (
    <WraperBannerPartners
      bottom={location && location === "/banner" ? true : false}
    >
      <BannerPartnersContent className="container">
        {data ? (
          <P
            uppercase={true}
            fontWeight={theme.fonts.bold}
            coLor={data?.color_sub_title ? data?.color_sub_title : "#999999"}
            mrb="29"
          >
            {data.title_banner
              ? data?.title_banner.map(element =>
                  element.text ? element.text : ""
                )
              : ""}
          </P>
        ) : (
          <></>
        )}
        {data ? (
          <H2
            fz="32"
            mrb_rem="1.5"
            fontFamily="Calibre Semibold"
            lineh="36"
            lett="-0.5"
            col={data?.color_text ? data?.color_text : "#222222"}
          >
            {data.description_banner && data.description_banner.length > 0
              ? data.description_banner.map(element =>
                  element.text ? element.text : ""
                )
              : ""}
          </H2>
        ) : (
          <></>
        )}
        {newArr ? (
          <div className="row ">
            <ListCategory className="col-md-10">
              {newArr?.map((item, index) => (
                <CategoryItem
                  key={index}
                  onClick={() => {
                    dispatch({
                      type: "ADD_FILTER_ITEM",
                      value: item?.category_partner_banner?._meta?.uid
                        ? item?.category_partner_banner?._meta?.uid
                        : "",
                    })
                    setFilters(index)
                  }}
                >
                  <Link
                    className={
                      [...state.listSelected].includes(
                        item?.category_partner_banner?._meta?.uid
                          ? item?.category_partner_banner?._meta?.uid
                          : ""
                      ) && "active"
                    }
                  >
                    {item &&
                    item.category_partner_banner.category_name &&
                    item.category_partner_banner.category_name.length > 0
                      ? item.category_partner_banner?.category_name?.map(
                          element => (element.text ? element.text : "")
                        )
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
                <Link className="active_modify">Reset Filters</Link>
              </CategoryItem>
            </ListCategory>
          </div>
        ) : (
          <></>
        )}
      </BannerPartnersContent>
    </WraperBannerPartners>
  )
}
export default memo(BannerPartners)

const WraperBannerPartners = styled.div`
  background-color: #f8f8f8;
  margin-bottom: ${({ bottom }) => (bottom ? "108px" : 0)};
  h2 {
    letter-spacing: -0.5px;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 0px;
    margin-bottom: ${({ bottom }) => (bottom ? "81px" : 0)};
    h2 {
      font-size: 24px;
      color: #222222;
      font-family: "Calibre Semibold";
      margin-bottom: 20px !important;
      line-height: 26px;
      letter-spacing: -0.25px;
    }
    p {
      margin-bottom: 10px;
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
      font-size: 32px;
    }
    p {
      font-size: 14px;
    }
    li {
      /* padding-right: 7px; */
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
    li {
      /* padding-right: 10px; */
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
    li {
      /* padding-right: 20px; */
      text-align: center;
    }
    a {
      font-size: 16px !important;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    h2 {
      font-size: 32px;
      margin-bottom: 40px;
    }
    p {
      font-size: 16px;
    }
    li {
      /* padding-right: 24px; */
      text-align: center;
      white-space: nowrap;
    }
    a {
      font-size: 20px !important;
    }
  }
  @media (min-width: 1200px) and (max-width: 1340px) {
    h2 {
      padding-right: 100px;
    }
  }
`

const BannerPartnersContent = styled.div`
  padding-top: 10rem;
  padding-bottom: 45px;
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
    margin-left: 53px;
    p {
      &::before {
        right: calc(100% + 10px);
        width: 25px;
      }
    }
  }
  @media (min-width: 768px) {
    margin-left: 62px;
    p {
      &::before {
        right: calc(100% + 10px);
        width: 30px;
      }
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 890px;
    }
  }
  @media (min-width: 992px) and (max-width: 1100px) {
    margin-left: 62px;
  }
  @media (min-width: 1024px) {
    p {
      &::before {
        right: calc(100% + 10px);
        width: 35px;
      }
    }
  }
  @media (min-width: 1200px) {
    margin-left: 145px;
    p {
      &::before {
        right: calc(100% + 1rem);
        width: 64px;
      }
    }
  }

  @media (min-width: 1372px) {
    margin-left: 205px;
  }

  @media (min-width: 1440px) {
    margin-left: 190px;
    padding-left: 30px;
    padding-right: 283px;
  }
  @media (min-width: 1600px) {
    margin-left: 230px;
  }
`

const ListCategory = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

    &.col-md-10 {
      padding-right: 0 !important;
    }

    li.reset_filters_moblie {
      display: block;
    }
    li.reset_filters {
      display: none;
    }
  }
  @media (min-width: 600px) {
    padding: 0px;
    padding-left: 15px;
  }
  @media (min-width: 768px) {
    padding: 0px 15px;
    width: ${props => (props.show && props.show !== 0 ? "995px" : "845px")};
  }
  @media (max-width: 991px) {
    display: -webkit-inline-box;
    overflow-x: scroll;
    padding-bottom: 16px;
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
      opacity: 0.3;
      height: 3px;
      transition: all 0.4s ease-in 0s;
    }

    // when hover
    /* :hover {
      width: 100%;
      border-bottom: 2px solid #222222;
      opacity: 0.3;
    } */
  }
  a:not([href]):not([class]) {
    color: #222222;
  }
  a.active_modify {
    color: #222222 !important;
    opacity: 1;
    margin-right: 8px;
    // border-bottom: 2px solid #222222;
    // opacity: 0.3;
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
      bottom: 1px;
      left: 0;
      width: 100%;
      content: " ";
      background-color: #222222;
      opacity: 1;
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
      font-size: 12px !important;
    }
  }
  @media (min-width: 768px) {
    a {
      font-size: 14px !important;
    }
  }
  @media (min-width: 1200px) {
    a {
      font-size: 20px !important;
    }
  }
`
