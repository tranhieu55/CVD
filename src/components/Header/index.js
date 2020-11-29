import { Link } from "gatsby"
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
import P from "../Typography"
import ButtonCustom from "../ButtonCustom"
import "../../assets/styles/header.scss"

function Header({ location }, props) {
  const menuLists = [
    {
      title: "Projects",
      slug: "projects",
    },
    {
      title: "Services",
      slug: "services",
    },
    {
      title: "Partners",
      slug: "partners",
    },
    {
      title: "Insights",
      slug: "insights",
    },
    {
      title: "About",
      slug: "about",
    },
  ]

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
    <>
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
        <div className="logo-header">
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
        </div>
        <div style={{ display: "flex", height: "16px" }}>
          <div
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
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            {scroll ? (
              <img className="image-buger" src={logoBuger} alt="logo" />
            ) : location === "/we-do" || location === "/projects" ? (
              <img className="image-buger" src={logoBugerBlack} alt="logo" />
            ) : (
              <img className="image-buger" src={logoBuger} alt="logo" />
            )}
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={scroll && "header-scroll"}
        >
          <Nav className="mr-auto menu-list">
            {menuLists.map((item, index) => (
              <li
                className={`menu-list_item ${
                  location === "/" ||
                  location === "/contact" ||
                  location === "/case-study" ||
                  location === "/proposal"
                    ? "menu-list_item_white"
                    : "menu-list_item_gold"
                } ${item.slug === "services" ? "dropdown_services" : ""}`}
                key={index}
              >
                <Link
                  to={item.slug === "services" ? "" : `/${item.slug}`}
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
                  {item.title}
                </Link>
                {item.slug === "services" ? (
                  <ul className="menu-area_services">
                    <div className="menu-item_services">
                      {" "}
                      {/* SERVICES */}
                      <ul className="list-services">
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
                          <li className="list-services_Item" key={index}>
                            <Link to={item.slug}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                      {/* PLATFORMS */}
                      <ul className="list-platforms">
                        <P
                          uppercase={true}
                          fontSise="16"
                          coLor={theme.colors.black4}
                          fontWeight={theme.fonts.bold}
                          mrb="16"
                        >
                          platforms
                        </P>
                        <li className="list-platforms_Card">
                          <IMG
                            alt="abc"
                            src={logoMagento}
                            w="45"
                            h="45"
                            objectFit="contain"
                            mr="12"
                          ></IMG>
                          <div className="card_description">
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
                          </div>
                        </li>

                        <li className="list-platforms_Card">
                          <IMG
                            alt="abc"
                            src={logoShopify}
                            w="45"
                            h="45"
                            objectFit="contain"
                            mr="12"
                          ></IMG>
                          <div className="card_description">
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
                          </div>
                        </li>

                        <li className="list-platforms_Card">
                          <IMG
                            alt="abc"
                            src={logoBigcommerece}
                            w="45"
                            h="45"
                            objectFit="contain"
                            mr="12"
                          ></IMG>
                          <div className="card_description">
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
                          </div>
                        </li>
                      </ul>
                      {/* LAUNCHES */}
                      <ul className="launches">
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
                      </ul>
                    </div>
                  </ul>
                ) : (
                  ""
                )}
              </li>
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
                <h2 className="get-in-touch">Get in touch</h2>
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
                <h2 className="get-in-touch">Get in touch</h2>
              </ButtonCustom>
            )}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
