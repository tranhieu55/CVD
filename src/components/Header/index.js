import React, { useEffect, useState } from "react"
import logoLight from "../../images/convertdigital-logo-light.png"
import logoBlack from "../../images/CD Logo_icon-black.png"
import logoMagento from "../../images/logo_Magento.png"
import logoShopify from "../../images/logo_Shopify.jpg"
import logoBigcommerece from "../../images/logo_Bigcommerece.png"
import bannerServices from "../../images/banner_Services.jpg"
import logoBuger from "../../images/burger-menu@2x-1.png"
import logoBugerBlack from "../../images/burger-menu@2x.png"
import IMG from "../Image"
import { Form, Nav, Navbar } from "react-bootstrap"
import { theme } from "../../utils/theme"
import P from "../../components/bits/Typography"
import ButtonCustom from "../ButtonCustom"
import styled from "styled-components"
import { Link } from "gatsby"

const WrapperHeader = styled.div`
  * {
    box-sizing: border-box;
  }
  .menu-list li.menu-list_item {
    padding: 3px 16px !important;
    border-bottom: 0px solid !important;
  }
  .navbar-light .navbar-toggler {
    outline: none;
  }
  .fixedTop {
    background-color: #101010 !important;
  }
  a:hover {
    text-decoration: none;
  }
  .navbar-toggler {
    border-color: transparent !important;
    padding: 0px;
    width: 20px;
    height: 21px;
    border: 0px;
    margin-left: 4px;
    margin-right: 16px;
    border-radius: 0px;
    span {
      width: 20px;
      height: 21px;
      margin-bottom: 5px;
      background-color: #f8f9fa;
    }
  }

  .navbar-toggler-icon {
    background-size: 150% 150%;
  }
  .menu-list_item_text-white {
    color: white;
  }
  .menu-list_item_text-black {
    color: black;
  }

  .navbar-nav {
    margin: auto;
  }
  .menu-list_item_text-black:hover {
    color: black;
  }
  .menu-list_item_text-white:hover {
    color: white;
  }
  .menu-list_item_gold {
    border-bottom: 3px solid transparent !important;
  }
  .menu-list_item_white {
    border-bottom: 3px solid transparent !important;
  }
  .menu-list_item_gold:hover {
    transition: all 0.5s ease;
    border-bottom: 3px solid gold !important;
  }
  .menu-list_item_white:hover {
    transition: all 0.5s ease;
    border-bottom: 3px solid white !important;
  }
  .wraper-header {
    width: 100%;
    height: 60px;
    position: fixed;
    box-sizing: border-box;
    z-index: 999 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    transition: all 0.7s ease;
    height: 72px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .menu-list {
    list-style: none;
    display: flex;
    width: 457px;
    li.menu-list_item {
      padding: 10px 16px;
      a {
        font-family: "Calibre Semibold";
        display: block;
        font-weight: 600;
        color: #ffffff;
        text-decoration: none;
        height: 16px;
        width: 54px;
        font-size: 16px;
        letter-spacing: 0;
        line-height: 22px;
        text-align: center;
        &.menu-list_item_text-white {
          color: #ffffff;
        }
        &.menu-list_item_text-black {
          color: #0e0e0e;
        }
      }
      ul.menu-area_services {
        position: fixed;
        top: 100%;
        width: 100%;
        left: 0;
        background-color: #f8f9fa;
        max-height: 0;
        transition: all 0.5s ease-in-out;
        overflow: hidden;
        height: 50vh;
        & > ul {
          list-style: none;
        }

        ul.list-services {
          display: flex;
          flex-direction: column;
          flex-basis: 25%;
          li.list-services_Item {
            margin-bottom: 1.5rem;
            padding-left: 0.8rem;
            display: block;
            border-bottom: 1px solid #ededed;
            a {
              padding-bottom: 0.7rem;
              color: black;
            }
            &:last-child {
              border-bottom: unset;
            }
          }
        }

        ul.list-platforms {
          flex-basis: 25%;
          li.list-platforms_Card {
            display: flex;
            align-items: center;
            background-color: #b7b7b736;
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 1rem;
            &:last-child {
              margin-bottom: unset;
            }
          }
        }

        ul.launches {
          flex-basis: 50%;
        }
      }
      &:hover .menu-area_services {
        max-height: 100vh;
      }
    }
  }
  @media (max-width: 600px) {
    .wraper-header {
      padding-left: 0px;
      padding-right: 0px;
      .form-inline {
        padding-left: 16px;
        padding-bottom: 16px;
      }
    }
    .navbar-collapse {
      div {
        margin-bottom: 10px;
      }
    }
    .menu-nav {
      height: 11px;
      width: 32px;
      color: #101010;
      font-family: "Calibre Semibold";
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0;
      text-align: right;
      margin-top: 3px;
      margin-right: 4px;
    }
    .menu-nav-white {
      height: 11px;
      width: 32px;
      color: #f8f9fa;
      font-family: "Calibre Semibold";
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0;
      text-align: right;
      margin-top: 3px;
      margin-right: 4px;
    }
  }
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    body {
      .image-buger {
        width: 15px;
        height: 16px;
        margin-bottom: 9px;
      }
    }
  }

  @media (max-width: 991px) {
    .navbar-nav {
      margin: 0px;
    }
    .menu-list li.menu-list_item {
      height: 25px;
      margin-top: 15px;
    }
    .menu-list li.menu-list_item a.menu-list_item_text-black {
      text-align: left;
    }
    .menu-list li.menu-list_item a {
      text-align: left;
    }
    .wraper-header {
      padding-left: 0px;
      padding-right: 0px;
      width: 100vw;
      height: 60px;
      .form-inline {
        padding-left: 16px;
        padding-bottom: 16px;
      }
    }
    .form-inline {
      padding-bottom: 16px;
      padding-left: 16px;
      padding-top: 15px;
    }
    .menu-nav {
      height: 11px;
      width: 32px;
      color: #101010;
      font-family: "Calibre Semibold";
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0;
      text-align: right;
      margin-top: 0px;
      margin-right: 4px;
    }
    .menu-nav-white {
      height: 11px;
      width: 32px;
      color: #f8f9fa;
      font-family: "Calibre Semibold";
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0;
      text-align: right;
      margin-top: 0px;
      margin-right: 4px;
    }
    .image-buger {
      width: 20px;
      height: 16px;
      margin-bottom: 9px;
    }

    #basic-navbar-nav {
      background: gray;
      transition: all 0.7s ease;
      top: 60px;
      position: absolute;
      width: 100vw;
    }
    #basic-navbar-nav .header-scroll {
      background: #101010;
      margin-top: 20px;
    }
  }
  @media (min-width: 992px) and (max-width: 1023px){
    .menu-nav-white {
      display: none;
    }
  }
  @media only screen and (min-width: 1024px) {
    .wraper-header {
      width: 100vw;
    }
    .nav-bar_1024px_down {
      background-color: #f8f9fa;
    }
    .menu-nav {
      display: none;
    }
    .menu-nav-white {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    .wraper-header {
      width: 100vw;
    }
    .menu-nav {
      display: none;
    }
    .menu-nav-white {
      display: none;
    }
  }
  @media (min-width: 1440px) {
    .wraper-header {
      width: 100vw;
    }
  }
  @media only screen and (min-width: 1600px) {
    .wraper-header {
      width: 100%;
      position: fixed;
      box-sizing: border-box;
      z-index: 999 !important;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: transparent;
      transition: all 0.7s ease;
      height: 72px;
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 0px;
      padding-bottom: 0px;
    }
  }

  .button-header {
    &::before {
      content: "";
    }
  }

  .button-header span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #fff, transparent);
    animation: animate1 2s linear infinite;
  }
  @keyframes animate1 {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .button-header span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #fff, transparent);
    animation: animate2 2s linear infinite;
    animation-delay: 1s;
  }
  @keyframes animate2 {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
  .button-header span:nth-child(3) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to left, #fff, transparent);
    animation: animate3 2s linear infinite;
  }
  @keyframes animate3 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .button-header span:nth-child(4) {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to top, #fff, transparent);
    animation: animate4 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animate4 {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
  .navbar-collapse {
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
      env(safe-area-inset-bottom) env(safe-area-inset-left);
  }
  .header-scroll {
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
      env(safe-area-inset-bottom) env(safe-area-inset-left);
  }
  .dropdown_services:hover {
    .menu-area_services{
      max-height:100%!important;
      top:7%!important;
    }
  }
  .show {
    position: fixed;
    top: 0!important;
    height: 100vh;
    z-index: 1000;
    width: 400px;
    max-width: 100%;
    background-color: #191F3F!important;
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    left: 0%;
    transition: all 0.4s;
  }
  .icon-close {
    position: absolute;
    top: 3%;
    right: 16px;
  }
`
const LogoHeader = styled.div`
  width: 172px;
  height: 32px;
  .navbar-brand {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-right: 0px;
  }
  @media (max-width: 600px){
    padding-left: 16px;
  }
  @media (max-width: 992px){
    width: 187px;
    padding-left: 16px;
    height: 34px;
  }
  @media only screen and (min-width: 1600px){
    max-width: 172px;
    max-height: 32px;
    .navbar-brand {
      padding-top: 0px;
      padding-bottom: 0px;
      margin-right: 0px;
    }
  }
`
const MenuColor = styled.div`
  display: flex;
  height: 16px;
`
const CardDescription = styled.div`

`
const MenuItemServices = styled.div`
  margin-left: 70px;
  margin-right: 160px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`

const MenuText = styled.div`
`
const Li = styled.li`
`
const Ul = styled.ul`
`
const GetInTouch = styled.h2`
  height: 18px;
  font-family: "Calibre Semibold";
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 22px;
  text-align: center;
  white-space: nowrap;
  margin-bottom: 0px;
`



const Header = ({ location, dataHeader, dataMenuHeader}) => {
  
  console.log("data",dataMenuHeader)
  const dataMenu = dataMenuHeader.edges[0].node.body[0].fields
  
  const dataImageLogo = dataMenuHeader.edges[0].node.website_logo.url

  // dữ liệu button header(button GET in touch)
  const isShow = dataMenuHeader.edges[0].node.body[1].primary.display_desktop_or_mobile
  const dataButton = dataMenuHeader.edges[0].node.body[1].primary.text_button[0].text
  // dữ liệu button header(button phone)
  const isShowButtonPhone = dataMenuHeader.edges[0].node.body[2].primary.display_desktop_or_mobile
  const dataButtonPhone = dataMenuHeader.edges[0].node.body[2].primary.text_button[0].text

  const titleServices = [
    { title: "Web Development Strategy", slug: "" },
    { title: "UX & Design", slug: "" },
    { title: "Web Development", slug: "" },
    { title: "Integration", slug: "" },
    { title: "Web Migration", slug: "" },
  ]

  const [scroll, setScroll] = useState(false)
  const handleScroll = () => {
    if (!!window && window.scrollY > 20) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    !!window && window.addEventListener("scroll", handleScroll)
    return () => {
      !!window && window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <WrapperHeader>
      <Navbar
        expand="lg"
        className={`wraper-header ${
          scroll
            ? "fixedTop "
            : `${
                location === "/" ||
                location === "/contact" ||
                location === "/case-study" ||
                location === "/proposal"
                  ? "nav-bar_1024px_down_home"
                  : "nav-bar_1024px_down"
              }`
        }`}
      >
        <LogoHeader>
          <Navbar.Brand as={Link} to="/">
            {scroll ? (
              <IMG src={logoLight} />
            ) : (
              <IMG
                src={
                  location === "/" ||
                  location === "/contact" ||
                  location === "/case-study" ||
                  location === "/proposal"
                    ? logoLight
                    : logoBlack
                }
              />
            )}
          </Navbar.Brand>
        </LogoHeader>
        <MenuColor>
          <MenuText
            className={
              scroll
                ? "menu-nav-white"
                : location === "/" ||
                  location === "/contact" ||
                  location === "/case-study" ||
                  location === "/proposal"
                ? "menu-nav-white"
                : "menu-nav"
            }
          >
            Menu
          </MenuText>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            {scroll ? (
              <img className="image-buger" src={logoBuger} alt="logo" />
            ) : location === "/we-do" || location === "/projects" ? (
              <img className="image-buger" src={logoBugerBlack} alt="logo" />
            ) : (
              <img className="image-buger" src={logoBuger} alt="logo" />
            )}
          </Navbar.Toggle>
        </MenuColor>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${scroll && "header-scroll"} `}
        >
          <Navbar.Toggle>
            <button className="icon-close">Icon</button>
          </Navbar.Toggle>
          <Nav className="mr-auto menu-list">
            {dataMenu.map((item, index) => (
              <Li
                className={`menu-list_item ${
                  location === "/" ||
                  location === "/contact" ||
                  location === "/case-study" ||
                  location === "/proposal"
                    ? "menu-list_item_white"
                    : "menu-list_item_gold"
                } ${
                  item.slug_menu_item[0].text === "services" ? "dropdown_services" : ""
                }`}
                key={index}
              >
                <Link
                  to={
                    item.slug_menu_item[0].text === "services"
                      ? ""
                      : `/${item.slug_menu_item[0].text}`
                  }
                  activeClassName="active"
                  className={
                    scroll
                      ? "menu-list_item_text-white"
                      : location === "/" ||
                        location === "/contact" ||
                        location === "/case-study" ||
                        location === "/proposal"
                      ? "menu-list_item_text-white"
                      : "menu-list_item_text-black"
                  }
                >
                  {item.title_menu_item[0].text}
                </Link>
                {item.slug_menu_item[0].text === "services" ? (
                  <Ul className="menu-area_services">
                    <MenuItemServices>
                      {" "}
                      {/* SERVICES */}
                      <Ul className="list-services">
                        <P
                          uppercase={true}
                          fontSise="16"
                          coLor={theme.colors.black4}
                          fontWeight={theme.fonts.bold}
                          mrb="16"
                        >
                          services
                        </P>
                        {[...titleServices].map((item, index) => (
                          <Li className="list-services_Item" key={index}>
                            <Link to={item.slug}>{item.title}</Link>
                          </Li>
                        ))}
                      </Ul>
                      {/* PLATFORMS */}
                      <Ul className="list-platforms">
                        <P
                          uppercase={true}
                          fontSise="16"
                          coLor={theme.colors.black4}
                          fontWeight={theme.fonts.bold}
                          mrb="16"
                        >
                          platforms
                        </P>
                        <Li className="list-platforms_Card">
                          <IMG
                            alt="abc"
                            src={logoMagento}
                            w="45"
                            h="45"
                            objectFit="contain"
                            mr="12"
                          ></IMG>
                          <CardDescription>
                            <P
                              fontSise="15"
                              coLor={theme.colors.black}
                              fontWeight={theme.fonts.bold}
                            >
                              Magento
                            </P>
                            <P
                              fontSise="13"
                              coLor={theme.colors.black3}
                              fontWeight={theme.fonts.regular}
                            >
                              The world's #1 eCommerce platform.
                            </P>
                          </CardDescription>
                        </Li>

                        <Li className="list-platforms_Card">
                          <IMG
                            alt="abc"
                            src={logoShopify}
                            w="45"
                            h="45"
                            objectFit="contain"
                            mr="12"
                          ></IMG>
                          <CardDescription>
                            <P
                              fontSise="15"
                              coLor={theme.colors.black}
                              fontWeight={theme.fonts.bold}
                            >
                              Shopify Plus
                            </P>
                            <P
                              fontSise="13"
                              coLor={theme.colors.black3}
                              fontWeight={theme.fonts.regular}
                            >
                              The world's #1 eCommerce platform.
                            </P>
                          </CardDescription>
                        </Li>

                        <Li className="list-platforms_Card">
                          <IMG
                            alt="abc"
                            src={logoBigcommerece}
                            w="45"
                            h="45"
                            objectFit="contain"
                            mr="12"
                          ></IMG>
                          <CardDescription>
                            <P
                              fontSise="15"
                              coLor={theme.colors.black}
                              fontWeight={theme.fonts.bold}
                            >
                              Bigcommerece
                            </P>
                            <P
                              fontSise="13"
                              coLor={theme.colors.black3}
                              fontWeight={theme.fonts.regular}
                            >
                              The world's #1 eCommerce platform.
                            </P>
                          </CardDescription>
                        </Li>
                      </Ul>
                      {/* LAUNCHES */}
                      <Ul className="launches">
                        <P
                          uppercase={true}
                          fontSise="16"
                          coLor={theme.colors.black4}
                          fontWeight={theme.fonts.bold}
                          mrb="16"
                        >
                          launches
                        </P>

                        <IMG
                          src={bannerServices}
                          objectFit="cover"
                          heightPercent="60"
                        ></IMG>
                      </Ul>
                    </MenuItemServices>
                  </Ul>
                ) : (
                  ""
                )}
              </Li>
            ))}
          </Nav>
          <Form inline>
            {scroll ? (
              <ButtonCustom
                className="button-header"
                bgColor={theme.colors.secondaryColor}
                textColor={theme.colors.white}
                pd1="9"
                pd2="19.5"
                lineh="22"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <GetInTouch>Get in touch</GetInTouch>
              </ButtonCustom>
            ) : (
              <ButtonCustom
                className="button-header"
                bgColor={
                  location === "/" ||
                  location === "/contact" ||
                  location === "/case-study" ||
                  location === "/proposal"
                    ? theme.colors.secondaryColor
                    : theme.colors.lightGray
                }
                textColor={
                  location === "/" ||
                  location === "/contact" ||
                  location === "/case-study" ||
                  location === "/proposal"
                    ? theme.colors.white
                    : theme.colors.secondaryColor
                }
                pd1="9"
                pd2="19.5"
                lineh="22"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <GetInTouch>Get in touch</GetInTouch>
              </ButtonCustom>
              
            )}
            {/* <div>
              hello word
            </div> */}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </WrapperHeader>
  )
}

export default Header

export const query = graphql`
    query QueryHearder {
    prismic {
      allHeaders {
        edges {
          node {
            body {
              ... on PRISMIC_HeaderBodyMenu_items {
                label
                type
                fields {
                  slug_menu_item
                  title_menu_item
                }
              }
              ... on PRISMIC_HeaderBodyCta_buton {
                type
                label
                primary {
                  display_desktop_or_mobile
                  text_button
                }
              }
              ... on PRISMIC_HeaderBodySocial_icon_header {
                type
                label
                fields {
                  social_icon_item
                }
              }
            }
            website_logo
          }
        }
      }
    }
  }
`