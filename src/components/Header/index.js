import React, { useEffect, useState, useRef, useMemo } from "react"
import logoLight from "../../images/convertdigital-logo-light.png"
import logoBlack from "../../images/CD Logo_icon-black.png"
import logoBuger from "../../images/burger-menu@2x-1.png"
import logoBugerBlack from "../../images/burger-menu@2x.png"
import logoIconClose from "../../images/iconclose.png"
import logoIconClosBlack from "../../images/cancelBack.png"
import logoIconPhone from "../../images/phone-black@2x.png"
import logoIconBack from "../../images/long-arrow-left@2x.png"
import logoIconRight from "../../images/long-arrow-right@2x.png"
import backgroundMobile from "../../images/Background.png"
import IMG from "../Image"
import { Nav, Navbar } from "react-bootstrap"
import { theme } from "../../utils/theme"
import P from "../../components/bits/Typography"
import ButtonCustom from "../ButtonCustom"
import styled from "styled-components"
import { Link } from "gatsby"
import useOnClickOutside from "../../hooks/clickoutside"
import Modal from "../ModalContact/index.js"

const WrapperHeader = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  * {
    box-sizing: border-box;
  }
  .menu-list li.menu-list_item {
    padding: 3px 16px !important;
    border-bottom: 0px solid !important;
  }
  .menu-list li.menu-list_item span {
    cursor: pointer;
    font-family: "Calibre Semibold";
    display: block;
    font-weight: 600;
    color: #ffffff;
    -webkit-text-decoration: none;
    text-decoration: none;
    height: 16px;
    font-size: 16px;
    -webkit-letter-spacing: 0;
    -moz-letter-spacing: 0;
    -ms-letter-spacing: 0;
    letter-spacing: 0;
    line-height: 22px;
    text-align: left;
  }
  .backgroundServiecs {
    background-color: white !important;
  }
  .menu-area_services {
    padding-left: 0;
  }
  hr {
    margin: 0 !important;
    border-top: 1px solid #eeeeee !important;
  }
  .navbar-light .navbar-toggler {
    outline: none;
  }
  /* check  background */
  .fixedTop {
    background-color: ${({ show }) =>
      show > 101 ? "white !important" : "transparent"};
     @media (max-width:992px) {
       background-color: ${({ show }) =>
         show > 30 ? "white !important" : "transparent"};
     }
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
    margin-right: ${({ show }) => {
      return show > 0 || show === false ? "14px" : "16px"
    }};
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
    color: #0e0e0e !important;
    opacity: ${({ location }) => (location === "/" ? "30%" : "100%")};
    opacity: ${({ scroll }) => (scroll === "true" ? "100%" : "100%")};
  }
  .test {
    opacity: 100%;
    color: #0e0e0e !important;
  }
  .test:after {
    position: absolute;
    left: 0px;
    right: 0;
    bottom: -25px;
    background-color: #fecf09;
    width: 100%;
    height: 3px;
    content: "";
    transition: all 0.4s ease-in;
    overflow: hidden;
    opacity: 100% !important;
  }
  .navbar-nav {
    margin: auto;
  }
  .menu-list_item_text-black:hover {
    color: black;
  }
  .menu-list_item_text-white:hover {
    color: #fecf09 !important;
  }
  .menu-list_item_gold {
    border-bottom: 3px solid transparent !important;
  }
  .menu-list_item_white {
    border-bottom: 3px solid transparent !important;
  }
  .menu-list_item_gold:hover {
    transition: all 0.5s ease;
    border-bottom: 3px solid #fecf09 !important;
  }
  .menu-list_item_white:hover {
    transition: all 0.5s ease;
    border-bottom: 3px solid white !important;
  }
  .wraper-header {
    width: 100%;
    height: 60px;
    position: ${({ scroll }) => (scroll === true ? "fixed" : "")};
    top: ${({ show }) => (show > 0 ? "0" : "")};
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
        width: 100%;
        left: 0;
        background-color: white;
        max-height: 0;
        transition: all 0.5s ease-in-out;
        overflow: hidden;
        height: 405px;
        @media (max-width: 992px) {
           top: 0;
        }
        @media (min-width: 992px) {
           top: ${({ dataGlobalMessage, location, show }) =>
             dataGlobalMessage === true || location !== "/" || show > 0
               ? "72px"
               : "119px"};
    }
        }
        & > ul {
          list-style: none;
        }

        ul.list-services {
          display: flex;
          flex-direction: column;
          flex-basis: 25%;
          li.list-services_Item {
            margin-bottom: 16px;
            padding-left: 10px;
            display: block;
            display: flex;
            align-items: center;
            .image-services-item {
              width: 24px;
              height: 24px;
              margin-right: 14px;
            }
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
          flex-basis: 75%;
          div.list-platforms_Card {
            display: flex;
            &:last-child {
              margin-bottom: unset;
            }
          }
        }

        ul.launches {
          flex-basis: 42%;
        }
      }
    }
  }
  .edit-img {
    width: 18px;
    height: 18px;
    margin-right: 8px;
  }
  .menu-mobile-iconBack {
    display: none;
  }
  .menu-mobile-iconClose {
    display: none;
  }
  .navbar-collapse {
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
      env(safe-area-inset-bottom) env(safe-area-inset-left);
  }
  .header-scroll {
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
      env(safe-area-inset-bottom) env(safe-area-inset-left);
  }
  .dropdown_services {
    .menu-area_services {
      max-height: 100% !important;
      top: ${({ dataGlobalMessage, location }) =>
        dataGlobalMessage === true || location !== "/" ? "72px" : "119px"};
    }
  }
.hover-ed:hover{
  display:block;
}
  .show {
    position: fixed;
    top: 0 !important;
    min-height: 100vh;
    z-index: 1000;
    width: 400px;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    left: 0%;
    padding: 48px;
    transition: all 0.4s ease-in;
  }
  .icon-close {
    position: absolute;
    top: 26px;
    right: 26px;
    width: 20px;
    height: 20px;
  }
  .imagefull {
    height: 500px !important;
    width: 88%;
  }
  .list-title-services {
    font-family: "Calibre Regular" !important;
    font-size: 18px !important;
    color: #222222 !important;
    letter-spacing: 0 !important;
    font-weight: 400 !important;
  }
  .list-services_Item {
    margin-top: 15px;
    .list-title-services:hover {
      color: #fecf09 !important;
    }
  }
  .mt0 {
    margin-top: 0px;
  }
  .menu-list .menu-list_item {
    transition: all 200ms ease-in;
    position: relative;
    :before {
      position: absolute;
      left: 0px;
      right: 0;
      bottom: -25px;
      background-color: #fecf09;
      width: 0%;
      height: 3px;
      content: "";
      transition: all 0.4s ease-in;
      overflow: hidden;
    }
    :hover {
      ::before {
        width: 100%;
      }
    }
  }
  .icon-mobile-right {
    display: none;
  }
  @media (max-width: 600px) {
    position: absolute;
    top: 0px;
    .menu-list_item_text-white {
      font-family: "Calibre Bold" !important;
    }
    .icon-mobile-right {
      display: inline-block;
      margin-left: 5px;
      width: 21px;
      height: 15px;
    }
    .my-form {
      margin-top: 50px;
    }
    .mb17 {
      margin-bottom: 17px !important;
    }
    .menu-list {
      width: 100%;
    }
    .menu-list li.menu-list_item {
      padding: 3px 0px !important;
    }
    .wraper-header {
      padding-left: 0px;
      padding-right: 0px;
      .form-inline {
        padding-left: 16px;
        padding-bottom: 16px;
      }
    }
    .menu-list_item_text-white {
      font-size: 32px !important;
      line-height: 56px !important;
    }
    .colorWhite {
      color: white !important;
      font-size: 32px !important;
      line-height: 56px !important;
    }
    .navbar-collapse {
      div {
        margin-bottom: 20px;
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
      color: white;
      font-family: "Calibre Semibold";
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0;
      text-align: right;
      margin-top: 3px;
      margin-right: 4px;
    }
    .dropdown_services .menu-area_services {
      max-width: 100% !important;
      z-index: 1;
      height: auto !important;
      top: 0% !important;
      overflow-y: scroll !important;
    }
    .list-services {
      position: relative;
    }
    .menu-mobile:before {
      position: absolute;
      content: "";
      left: 0;
      top: 58px;
      width: 100%;
      height: 0.5px;
      background-color: #eeeeee;
    }
    .menu-mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 45px !important;
      padding-left: 24px;
      padding-right: 10px;
      p {
        color: #101010;
        font-size: 32px;
        font-family: "Calibre Bold";
        margin-bottom: 0px;
        text-transform: none;
        height: 32px;
        letter-spacing: 0px !important;
      }
      .menu-mobile-iconBack {
        display: block;
        width: 21px;
        height: 15px;
      }
      .menu-mobile-iconClose {
        display: block;
        width: 20px;
        height: 19px;
      }
    }
    li.list-services_Item {
      margin-left: 22px;
      img {
        margin-right: 15px !important;
      }
      a {
        font-size: 20px !important;
      }
    }
    .list-services_Item {
      margin-top: 25px !important;
      margin-bottom: 17px !important;
    }
    .mt0 {
      margin-top: 0px !important;
    }
    .displayMobile {
      display: none;
    }
    .list-platforms_Card {
      padding-left: 20px !important;
      padding-right: 0px !important;
      padding-bottom: 0px !important;
      padding-top: 5px !important;
      margin-bottom: 10px;
      border-radius: 6px;
      img {
        margin-right: 23px;
        margin-top: -8px;
      }
    }
    .imagefull {
      width: 100% !important;
      height: 100% !important;
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
  @media (max-width: 600px) {
    position: absolute;
    top: 0px;
  }

  @media (max-width: 991px)  {
    .icon-mobile-right {
      display: inline-block;
      margin-left: 5px;
      width: 21px;
      height: 15px;
    }
    .list-services {
      position: relative;
    }
    .menu-mobile:before {
      position: absolute;
      content: "";
      left: 0;
      top: 58px;
      width: 100%;
      height: 0.5px;
      background-color: #eeeeee;
    }

    // .dropdown_services .menu-area_services {
    //   max-width: 100% !important;
    //   z-index: 1;
    //   height: auto !important;
    //   top: 0% !important;
    //   overflow-y: scroll !important;
    // }
    
    .displayMobile {
      display: none;
    }
    .menu-mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 45px !important;
      margin-left: 20px;
      margin-right: 4px;
      p {
        color: #101010;
        font-size: 32px;
        font-family: "Calibre Bold";
        margin-bottom: 0px;
        text-transform: none;
        height: 32px;
        letter-spacing: 0px;
      }
      .menu-mobile-iconBack {
        display: block;
        width: 21px;
        height: 15px;
      }
      .menu-mobile-iconClose {
        display: block;
        width: 20px;
        height: 19px;
      }
    }
    .list-platforms_Card {
      margin-bottom: 20px;
      border-radius: 6px;
      padding: 10px 15px;
    }
    .imagefull {
      width: 100% !important;
      height: 100% !important;
    }
    .list-services_Item {
      padding-left: 25px !important;
      img {
        margin-right: 25px !important;
      }
    }
  }
  
  @media (min-width: 767.1px) and (max-width: 768.5px) {
    .icon-mobile-right {
      display: inline-block;
      margin-left: 5px;
      width: 21px;
      height: 15px;
    }
    .list-services {
      position: relative;
    }
    .menu-mobile:before {
      position: absolute;
      content: "";
      left: 0;
      top: 58px;
      width: 100%;
      height: 0.5px;
      background-color: #eeeeee;
    }
    .displayMobile {
      display: none;
    }

    .menu-mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 45px !important;
      padding-left: 10px;
      p {
        color: #101010;
        font-size: 32px;
        font-family: "Calibre Bold";
        margin-bottom: 0px;
        text-transform: none;
        height: 32px;
        letter-spacing: 0px;
      }
      .menu-mobile-iconBack {
        display: block;
        width: 21px;
        height: 15px;
      }
      .menu-mobile-iconClose {
        display: block;
        width: 20px;
        height: 19px;
      }
    }
    .list-platforms_Card {
      margin-bottom: 20px;
      border-radius: 6px;
      padding: 10px 15px;
    }
    .imagefull {
      width: 100% !important;
      height: 100% !important;
    }
    .list-services_Item {
      padding-left: 38px !important;
      img {
        margin-right: 25px !important;
      }
    }
  }
  @media (max-width: 991px) {
    .menu-area_services {
      top: 0 !important;
      height: 100vh !important;
      z-index: 123;
      overflow-y: scroll !important;
    }
    .icon-mobile-right {
      display: inline-block;
      margin-left: 5px;
      width: 21px;
      height: 15px;
    }
    .button-header {
      color: white;
    }
    .colorWhite {
      color: white !important;
      font-size: 32px !important;
      line-height: 56px !important;
    }
    .navbar-nav {
      margin: 0px;
    }
    .my-form {
      margin-top: 50px;
    }
    .menu-list li.menu-list_item {
      height: 36px;
      margin-top: 20px;
      padding: 3px 0px !important;
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
      color: white;
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
      /* transition: all 0.5s ease-in; */
      top: 0px;
      position: absolute;
      width: 100vw;
      padding: 48px;
      background-image: url(${({ backgroundMobile }) => backgroundMobile});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    #basic-navbar-nav .header-scroll {
      background: #101010;
      margin-top: 20px;
    }
    .mb17 {
      margin-bottom: 25px;
    }
    .menu-list_item_text-white {
      font-size: 32px !important;
      line-height: 56px !important;
    }
  }
  @media (min-width: 992px) and (max-width: 1023px) {
    .menu-nav-white {
      display: none;
    }
  }

  @media only screen and (min-width: 1024px) {
    .button-header {
      h2 {
        // font-family: {({ show }) =>
        //   show > 0 ? "Calibre Medium" : "Calibre Semibold"};
        // font-weight: {({ show }) => (show > 0 ? "500" : "600")};
        font-family: Calibre Medium;
        font-weight: 500;
      }
    }
    // .mask ::before {
    //   position: absolute;
    //   content: "";
    //   background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    //   height: 299px;
    //   width: 100%;
    //   left: 0;
    //   opacity: 30%;
    // }
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
      position: ${({ scroll }) => (scroll === true ? "fixed" : "")};
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
  .convertColor {
    color: #101010 !important;
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
  .desktop {
    @media (max-width: 992px) {
      display: none;
    }
    @media (min-width: 992px) {
      display: block;
    }
  }
  .mobile {
    @media (max-width: 992px) {
      display: block;
    }
    @media (min-width: 992px) {
      display: none;
    }
  }
  @media (max-width: 600px) {
    padding-left: ${({ show }) =>
      show > 0 ? "18px !important" : "16px !important"};
  }
  @media (max-width: 992px) {
    width: 187px;
    padding-left: 16px;
    height: 34px;
  }
  @media only screen and (min-width: 1600px) {
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
  .learn-more {
    color: #101010 !important;
    font-family: "Calibre Medium" !important;
    font-size: 16px;
    font-weight: 500 !important;
    line-height: 20px;
    position: relative;

    :after {
      content: "\f178";
      font-family: "Font Awesome 5 Pro Regular";
      font-size: 18px;
      line-height: 18px;
      text-align: center;
      margin-left: 8px;
      position: absolute;
    }
  }
  @media (max-width: 600px) {
    .mobile {
      // margin-top: 12px;
      margin-bottom: -7px;
      letter-spacing: -0.5px;
    }
    .mobile1 {
      margin-top: 3px;
    }
  }
  @media (min-width: 600px) {
    .mobile {
      letter-spacing: -0.5px !important;
    }
  }
`
const MenuItemServices = styled.div`
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 35px;
  display: flex;
  .service {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  ul {
    flex-basis: none;
  }
  @media (max-width: 800px) {
    .service {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    display: block;
    max-width: 100%;
    flex-wrap: wrap;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 20px;
    ul {
      padding-left: 0;
      margin-bottom: 18px;
    }

    .list-platforms {
      padding-left: 12px !important;
      padding-right: 12px !important;
    }
    .launches {
      padding-left: 12px !important;
      padding-right: 12px !important;
    }
  }
  @media (max-width: 991px) {
    display: block;
    max-width: 100%;
    flex-wrap: wrap;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 20px;
    ul {
      padding-left: 0;
      margin-bottom: 20px;
    }
    .list-platforms {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    .launches {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
  }
  @media (min-width: 767.1px) and (max-width: 768.5px) {
    margin-left: 0px;
    margin-right: 0px;
    flex-wrap: wrap;
    flex-direction: column;
    .list-services {
      padding-left: 0 !important;
      flex-basis: unset !important;
      margin-bottom: 25px;
    }
    .list-platforms {
      flex-basis: unset !important;
      margin-bottom: 25px;
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    .launches {
      margin-bottom: 25px;
      flex-basis: unset !important;
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    .list-platforms_Card {
      border-radius: 6px;
    }
  }

  @media (min-width: 992px) {
    margin-left: 0px;
    margin-right: 0px;
    .list-services_Item {
      padding-left: 0px !important;
    }
    .list-title-services {
      font-size: 16px !important;
      font-weight: 400 !important;
    }
    .list-platforms_Card {
      border-radius: 10px;
      margin-bottom: 25px;
      img {
        margin-right: 15px !important;
      }
      div {
        p {
          font-size: 14px;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    margin-left: 120px;
    margin-right: 120px;
    .list-platforms_Card {
      max-width: 421px;
      // margin-right: 110px;
      img {
        margin-right: 24px !important;
      }
    }
  }
  @media (min-width: 1600px) {
    margin-left: 120px;
    margin-right: 120px;
    .list-services_Item {
      padding-left: 10px !important;
    }
    .list-title-services {
      font-size: 18px !important;
      font-weight: 400 !important;
    }
    .list-platforms_Card {
      border-radius: 10px;
      margin-bottom: 36px;
      img {
        margin-right: 24px !important;
      }
      div {
        .mobile {
          font-size: 22px;
          line-height: 26px;
        }
        p {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
`

const MenuText = styled.div``
const Li = styled.li``
const Ul = styled.ul``
const GetInTouch = styled.h2`
  height: 18px;
  font-family: "Calibre Semibold";
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 25px;
  text-align: center;
  white-space: nowrap;
  margin-bottom: 0px;
  @media (min-width: 992px) {
    font-size: 18px;
  }
  a {
    color: ;
  }
`
const Icon = styled.div`
  display: flex;
  color: white;
  margin-bottom: 70px !important;
  img {
    margin-right: 25px;
    width: 32px !important;
    height: 32px !important;
  }
  @media (max-width: 992px) {
    display: flex;
  }
  @media (min-width: 992px) {
    display: none;
  }
`

const Header = ({
  location,
  dataMenuHeader,
  dataServicesMenu,
  dataGlobalMessage,
}) => {
  const dataServices =
    dataServicesMenu && dataServicesMenu?.edges[0]?.node?.body
      ? dataServicesMenu?.edges[0]?.node?.body
      : []
  const dataMN = dataMenuHeader
    ? dataMenuHeader.edges[0]?.node?.body?.filter(el =>
        el.type ? el.type === "menu_items" : ""
      )
    : []
  const dataMenu = dataMN.filter(item => item.fields)
  //dulieu icon
  const dataIcon = dataMenuHeader
    ? dataMenuHeader.edges[0]?.node?.body?.filter(el =>
        el.type ? el.type === "social_icon_header" : ""
      )
    : []

  const isShowCTA = dataMenuHeader
    ? dataMenuHeader.edges[0]?.node?.body?.filter(x =>
        x.type ? x.type === "cta_buton" : ""
      )
    : []
  const [scroll, setScroll] = useState(false)
  const [isDisPlayModalService, setIsDisPlayModalService] = useState(false)
  const [show, setShow] = useState(0)
  const [stateMenu, setStateMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  }
  // const [translateHeader, setTranslateHeader] = useState(false)
  const ref = useRef()

  useOnClickOutside(ref, () => setIsDisPlayModalService(false))

  let lastScrollTop = 0
  useEffect(() => {
    window.onscroll = function () {
      var st = window.pageYOffset
      if (st > lastScrollTop) {
        if (window.pageYOffset > 0) {
          setScroll(false)
        } else {
          setScroll(true)
        }
      } else {
        setScroll(true)
      }
      lastScrollTop = st <= 0 ? 0 : st
    }
    return () => {
      window.onscroll = function () {
        return
      }
    }
  }, [])

  const handleScroll = () => {
    const _show = window.scrollY
    if (_show > -1) {
      setIsDisPlayModalService(false)
    }
    setShow(_show)
  }

  useEffect(() => {
    !!window && window.addEventListener("scroll", handleScroll)
    // window.addEventListener("click", () => handleOutsideClick());
    return () => {
      !!window && window.removeEventListener("scroll", handleScroll)
      // window.removeEventListener("click", () => handleOutsideClick());
    }
  }, [])

  // const handelClickServices = () => {
  //   setIsDisPlayModalService(!isDisPlayModalService)
  // }

  const checkColorText = () => {
    if (
      location === "/styleguide" ||
      location === "/404" ||
      location === "/launches" ||
      location === "/projects" ||
      location === "/what-we-do" ||
      location === "/partners" ||
      location === "/pageblog" ||
      location === "/blog-details" ||
      location === "/testimonial"
    ) {
      return "menu-list_item_text-black"
    }
    if (show === 0 && !!isDisPlayModalService) {
      return "menu-list_item_text-black"
    } else {
      if (show < 101) {
        return "menu-list_item_text-white"
      }
      if (!isDisPlayModalService && !scroll) {
        return "menu-list_item_text-white"
      }
      return "menu-list_item_text-black"
    }
  }
  const checkColorTextButton = index => {
    if (
      location === "/styleguide" ||
      location === "/404" ||
      location === "/launches" ||
      location === "/projects" ||
      location === "/what-we-do" ||
      location === "/partners" ||
      location === "/pageblog" ||
      location === "/blog-details" ||
      location === "/testimonial" ||
      show > 101 ||
      !!isDisPlayModalService
    ) {
      return "#101010"
    }
    return "#ffffff"
  }

  const checkIconMenu = () => {
    if (
      location === "/styleguide" ||
      location === "/404" ||
      location === "/launches" ||
      location === "/projects" ||
      location === "/what-we-do" ||
      location === "/partners" ||
      location === "/pageblog" ||
      location === "/blog-details" ||
      location === "/testimonial"
    ) {
      return <img className="image-buger" src={logoBugerBlack} alt="logo" />
    }
    if (show < 30) {
      return <img className="image-buger" src={logoBuger} alt="logo" />
    } else {
      if (!!scroll) {
        return <img className="image-buger" src={logoBugerBlack} alt="logo" />
      }
      return <img className="image-buger" src={logoBuger} alt="logo" />
    }
  }
  const handelClickDataMenu = () => {
    setStateMenu(!stateMenu)
    document.body.style.overflow = "hidden"
  }
  const handelClickDataMenuButton = () => {
    setIsDisPlayModalService(false)
    setStateMenu(!stateMenu)
    document.body.style.overflow = "scroll"
  }
  const handelClickCheckOverflow = () => {
    document.body.style.overflow = "scroll"
    setIsDisPlayModalService(false)
  }
  console.log("run data", dataServices)
  return (
    <WrapperHeader
      dataGlobalMessage={dataGlobalMessage}
      backgroundMobile={backgroundMobile}
      location={location}
      scroll={scroll}
      show={show}
      isDisPlayModalService={isDisPlayModalService}
    >
      <Navbar
        expand="lg"
        className={`wraper-header fixedTop
        ${isDisPlayModalService === true ? "backgroundServiecs" : ""}
        `}
      >
        <LogoHeader show={show}>
          <Navbar.Brand as={Link} to="/" className="desktop">
            {show > 130 ? (
              <IMG src={logoBlack} />
            ) : (
              <IMG
                src={
                  isDisPlayModalService === true ||
                  location === "/styleguide" ||
                  location === "/404" ||
                  location === "/launches" ||
                  location === "/projects" ||
                  location === "/what-we-do" ||
                  location === "/partners" ||
                  location === "/pageblog" ||
                  location === "/blog-details" ||
                  location === "/testimonial"
                    ? logoBlack
                    : logoLight
                }
              />
            )}
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/" className="mobile">
            {show > 30 ? (
              <IMG src={logoBlack} />
            ) : (
              <IMG
                src={
                  isDisPlayModalService === true ||
                  location === "/styleguide" ||
                  location === "/404" ||
                  location === "/launches" ||
                  location === "/projects" ||
                  location === "/what-we-do" ||
                  location === "/partners" ||
                  location === "/pageblog" ||
                  location === "/blog-details" ||
                  location === "/testimonial"
                    ? logoBlack
                    : logoLight
                }
              />
            )}
          </Navbar.Brand>
        </LogoHeader>
        <MenuColor>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => handelClickDataMenu()}
          >
            {checkIconMenu()}
          </Navbar.Toggle>
        </MenuColor>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${scroll && "header-scroll"} `}
        >
          <Navbar.Toggle>
            <img
              onClick={() => handelClickDataMenuButton()}
              src={logoIconClose}
              className="icon-close"
            />
          </Navbar.Toggle>
          <Nav className="mr-auto menu-list">
            {dataMenu &&
              dataMenu[0]?.fields.map((item, index) => (
                <Li
                  className={`menu-list_item ${
                    location === "/" ||
                    location === "/contact" ||
                    location === "/case-study" ||
                    location === "/proposal" ||
                    location === "/partners" ||
                    location === "/pageblog" ||
                    location === "/blog-details" ||
                    location === "/testimonial"
                      ? "menu-list_item_white"
                      : "menu-list_item_gold"
                  } ${
                    isDisPlayModalService === true ? "dropdown_services" : ""
                  }`}
                  key={index}
                >
                  {item && item.slug_menu_item[0]?.text === "services" ? (
                    <span
                      onClick={() => {
                        setIsDisPlayModalService(!isDisPlayModalService)
                      }}
                      onMouseEnter={() =>
                        setIsDisPlayModalService(!isDisPlayModalService)
                      }
                      className={`${checkColorText()} colorWhite ${
                        isDisPlayModalService === true ? "test" : ""
                      }  hover-ed`}
                    >
                      {item.title_menu_item[0]?.text}{" "}
                      <img
                        className="icon-mobile-right"
                        src={logoIconRight}
                        alt=""
                      />{" "}
                    </span>
                  ) : (
                    <Link
                      to={`/${item.slug_menu_item[0]?.text}`}
                      activeClassName="active"
                      className={`${checkColorText()} colorWhite`}
                      onClick={() => (document.body.style.overflow = "scroll")}
                    >
                      {item.title_menu_item[0]?.text}
                    </Link>
                  )}

                  {item && item.slug_menu_item[0]?.text === "services" ? (
                    <ul ref={ref} className="menu-area_services">
                      <hr />
                      <MenuItemServices>
                        {" "}
                        {/* SERVICES */}
                        {dataServices[0] ? (
                          <Ul className="list-services">
                            <div className="menu-mobile">
                              <img
                                className="menu-mobile-iconBack"
                                onClick={() => setIsDisPlayModalService(false)}
                                src={logoIconBack}
                                alt="back"
                              />
                              <P
                                uppercase={true}
                                fontSise="14"
                                coLor={theme.colors.black4}
                                fontWeight="600"
                                mrb="19"
                                fontFamily="Calibre Semibold"
                                lett="1"
                              >
                                {dataServices[0]?.primary?.title[0]?.text}
                              </P>
                              <Navbar.Toggle>
                                <img
                                  className="menu-mobile-iconClose"
                                  onClick={() => handelClickCheckOverflow()}
                                  src={logoIconClosBlack}
                                  alt="close"
                                />
                              </Navbar.Toggle>
                            </div>
                            {dataServices[0]?.fields?.map((item, index) => (
                              <React.Fragment key={index}>
                                <Li
                                  className={`${
                                    index === 0
                                      ? "mt0 list-services_Item"
                                      : "list-services_Item"
                                  }`}
                                >
                                  <img
                                    className="image-services-item"
                                    src={item.image_service_item.url}
                                    alt={item.image_service_item.alt}
                                  />
                                  <Link className="list-title-services" to="">
                                    {item.title_service_item[0]?.text}
                                  </Link>
                                </Li>
                                <hr />
                              </React.Fragment>
                            ))}
                          </Ul>
                        ) : (
                          <></>
                        )}
                        {/* PLATFORMS */}
                        {dataServices[1] ? (
                          <Ul className="list-platforms">
                            <P
                              uppercase={true}
                              fontSise="14"
                              coLor={theme.colors.black4}
                              fontWeight="600"
                              fontFamily="Calibre Semibold"
                              mrb="10"
                              lett="1"
                              className="displayMobile"
                            >
                              {dataServices[1]?.primary.title[0]?.text}
                            </P>
                            <div className="service">
                              {dataServices[1]?.fields?.map((item, index) => (
                                <div
                                  key={index}
                                  className="list-platforms_Card"
                                >
                                  <IMG
                                    alt={item.image_platform_item.alt}
                                    src={item.image_platform_item.url}
                                    w="44"
                                    h="52"
                                    objectFit="contain"
                                    mr="25"
                                  ></IMG>
                                  <CardDescription>
                                    <P
                                      fontSise="22"
                                      coLor="#101010"
                                      fontWeight="600"
                                      fontFamily="Calibre Semibold"
                                      className="mobile"
                                    >
                                      {item.name_service[0]?.text}
                                    </P>
                                    <P
                                      fontSise="18"
                                      fontFamily="Calibre Regular"
                                      coLor="#222222"
                                      fontWeight={theme.fonts.regular}
                                      className="mobile1"
                                    >
                                      {item.short_description[0]?.text}
                                    </P>
                                    <span className="learn-more" href="#">
                                      Learn more{" "}
                                    </span>
                                  </CardDescription>
                                </div>
                              ))}
                            </div>
                          </Ul>
                        ) : (
                          <></>
                        )}
                      </MenuItemServices>
                    </ul>
                  ) : (
                    <></>
                  )}
                </Li>
              ))}
          </Nav>
          <div className="my-form">
            <>
              {dataIcon ? (
                <Icon>
                  {dataIcon[0]?.fields?.map((item, index) => (
                    <a
                      targer={item?.link_to_social_network?.target}
                      href={item?.link_to_social_network?.url}
                      key={index}
                    >
                      <img
                        src={item?.social_icon_item?.url}
                        alt={item?.social_icon_item?.alt}
                      />
                    </a>
                  ))}
                </Icon>
              ) : (
                <></>
              )}
              {isShowCTA ? (
                isShowCTA?.map((item, index) => {
                  return (
                    <ButtonCustom
                      key={index}
                      isShow={item?.primary?.display_desktop_or_mobile} // both , mobile. desktop
                      className={
                        index === 0 ? "mb17 button-header" : "button-header"
                      }
                      wt="132"
                      w="100"
                      bgColor={item.primary.background_color_button}
                      textColor={checkColorTextButton(index)}
                      pd1="9"
                      pd2="19.5"
                      lineh="22"
                      pd1Mobile="13"
                      pd2Mobile="19.5"
                    >
                      {index === 1 ? (
                        <GetInTouch>
                          <Link
                            // chỗ này có hàm check màu rồi
                            // bạn thêm class rồi vứt cái hàm  đó vào
                            // className={}
                            to={`tel: ${item?.primary?.text_button[0]?.text}`}
                          >
                            <img className="edit-img" src={logoIconPhone} />
                            {item?.primary?.text_button[0]?.text}
                          </Link>
                        </GetInTouch>
                      ) : (
                        // <GetInTouch onClick={openModal}>
                        //   {item?.primary?.text_button[0]?.text}
                        // </GetInTouch>

                        <GetInTouch>
                          <Link to="/contact">
                            {item?.primary?.text_button[0]?.text}
                          </Link>
                        </GetInTouch>
                      )}
                    </ButtonCustom>
                  )
                })
              ) : (
                <></>
              )}
            </>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        openModal={openModal}
      />
    </WrapperHeader>
  )
}

export default React.memo(Header)

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
