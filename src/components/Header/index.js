import React, { useEffect, useState } from "react"
import logoLight from "../../images/convertdigital-logo-light.png"
import logoBlack from "../../images/CD Logo_icon-black.png"
import logoMagento from "../../images/logo_Magento.png"
import logoShopify from "../../images/logo_Shopify.jpg"
import logoBigcommerece from "../../images/logo_Bigcommerece.png"
import bannerServices from "../../images/banner_Services.jpg"
import logoBuger from "../../images/burger-menu@2x-1.png"
import logoBugerBlack from "../../images/burger-menu@2x.png"
import logoIconClose from "../../images/iconclose.png"
import logoIconClosBlack from "../../images/cancelBack.png"
import logoIconPhone from "../../images/phone-black@2x.png"
import logoIconBack from "../../images/long-arrow-left@2x.png"
import logoIconRight from "../../images/long-arrow-right@2x.png"
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
  .menu-list li.menu-list_item span {
      cursor: pointer;
      font-family: "Calibre Semibold";
      display: block;
      font-weight: 600;
      color: #ffffff;
      -webkit-text-decoration: none;
      text-decoration: none;
      height: 16px;
      font-size: 18px;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      line-height: 22px;
      text-align: left;
    }
    .backgroundServiecs {
      background-color: white!important;
    }
    .menu-area_services{
      padding-left:0;
    } hr {
      margin: 0!important;
      border-top:1px solid #eeeeee!important;
    }
  .navbar-light .navbar-toggler {
    outline: none;
  }
  .fixedTop {
    background-color: #252940 !important;
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
    color: black !important;
    opacity: 30%;
  }

  .navbar-nav {
    margin: auto;
  }
  .menu-list_item_text-black:hover {
    color: black;
  }
  .menu-list_item_text-white:hover {
    color: #FECF09!important;
  }
  .menu-list_item_gold {
    border-bottom: 3px solid transparent !important;
  }
  .menu-list_item_white {
    border-bottom: 3px solid transparent !important;
  }
  .menu-list_item_gold:hover {
    transition: all 0.5s ease;
    border-bottom: 3px solid #FECF09 !important;
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
              width:24px;
              height:24px;
              margin-right:14px;
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
          flex-basis: 32%;
          li.list-platforms_Card {
            display: flex;
            align-items: center;
            background-color: #F6F6F6;
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
    width:18px;
    height: 18px;
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
    .menu-area_services{
      max-height:100%!important;
      top:72px;
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
    padding:48px;
  }
  .icon-close {
    position: absolute;
    top: 26px;
    right: 26px;
    width: 20px;
    height: 20px;
  }
  .imagefull {
    height:500px!important;
    width:88%;
  }
  .list-title-services {
    font-family:'Calibre Regular'!important;
    font-size: 18px!important;
    color: #222222!important;
    letter-spacing: 0!important;
    font-weight:400!important;
  }
  .list-services_Item {
    margin-top:15px;
    .list-title-services:hover {
      color:#FECF09!important;
    }
  }
  .mt0 {
    margin-top:0px;
  }
  .menu-list .menu-list_item {
    transition: all 200ms ease-in;
    position: relative;
    :before {
      position: absolute;
      left:0px;
      right:0;
      bottom: -25px;
      background-color:#FECF09;
      width:0%;
      height:3px;
      content: "";
      transition: all 0.4s ease-in;
      overflow:hidden;
    }
    :hover {
      ::before {
        width: 80px;
      }
    }
  }
  .active {
      background-color:#FECF09;
  }
  .icon-mobile-right {
    display: none;
  }
  @media (max-width: 600px) { 
    .menu-list_item_text-white {
      font-family:"Calibre Bold"!important;
    } 
    .icon-mobile-right {
      display: inline-block;
      margin-left: 10px;
      width: 21px;
      height: 15px;
    }  
    .my-form {
      margin-top:50px;
    }
    .mb17 {
      margin-bottom:17px!important;
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
      font-size:32px!important;
      line-height:56px!important;
    }
    .navbar-collapse {
      div {
        margin-bottom: 25px;
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
      max-width:100%!important;
      z-index:1;
      height: auto!important;
      top:0%!important;
      overflow-y:scroll!important;
    }
    .list-services {
      position: relative;
    }
    .menu-mobile:before {
      position: absolute;
      content: '';
      left: 0;
      top: 58px;
      width: 100%;
      height: 0.5px;
      background-color: #eeeeee;
    }
    .menu-mobile {
      display: flex;
      justify-content:space-between;
      align-items: center;
      margin-bottom:45px!important;
      padding-left:24px;
      padding-right:10px;
      p {
        color:#101010;
        font-size:32px;
        font-family:"Calibre Bold";
        margin-bottom:0px;
        text-transform:none;
        height:32px;
      }
      .menu-mobile-iconBack {
        display: block;
        width:21px;
        height:15px;
      }
      .menu-mobile-iconClose {
        display: block;
        width:20px;
        height:19px;
      }
    }
    li.list-services_Item {
      margin-left: 22px;
      img {
        margin-right: 15px!important;
      }
      a {
        font-size:20px!important;
      }
    }
    .list-services_Item {
      margin-top: 25px!important;
      margin-bottom:17px!important;
    }
    .mt0 {
      margin-top:0px!important;
    }
    .displayMobile {
      display:none;
    }
    .list-platforms_Card {
      padding-left:20px!important;
      padding-right:0px!important;
      padding-bottom: 0px!important;
      padding-top: 5px!important;
      margin-bottom: 10px;
      border-radius: 6px; 
      img {
        margin-right:16px;
      }
    }
    .imagefull {
      width:100%!important;
      height: 100%!important;
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
  @media (max-width: 886px) and (max-height: 450px) {
    .list-services {
      position: relative;
    }
    .menu-mobile:before {
      position: absolute;
      content: '';
      left: 0;
      top: 58px;
      width: 100%;
      height: 0.5px;
      background-color: #eeeeee;
    }
    .dropdown_services .menu-area_services {
      max-width:100%!important;
      z-index:1;
      height: auto!important;
      top:0%!important;
      overflow-y:scroll!important;
    }
    .displayMobile {
      display:none;
    }
    .menu-mobile {
      display: flex;
      justify-content:space-between;
      align-items: center;
      margin-bottom:45px!important;
      p {
        color:#101010;
        font-size:32px;
        font-family:"Calibre Bold";
        margin-bottom:0px;
        text-transform:none;
        height:32px;
      }
      .menu-mobile-iconBack {
        display: block;
        width:21px;
        height:15px;
      }
      .menu-mobile-iconClose {
        display: block;
        width:20px;
        height:19px;
      }
    }
    .list-platforms_Card {
      margin-bottom:20px;
      border-radius:6px;
      padding:10px 15px;
    }
    .imagefull {
      width:100%!important;
      height:100%!important;
    }
    .list-services_Item{
      padding-left:25px!important;
      img {
        margin-right:25px!important;
      }
    }
  }
  @media (min-width: 767.1px) and (max-width: 768.5px) { 
    .list-services {
      position: relative;
    }
    .menu-mobile:before {
      position: absolute;
      content: '';
      left: 0;
      top: 58px;
      width: 100%;
      height: 0.5px;
      background-color: #eeeeee;
    }
    .displayMobile {
      display:none;
    }
    .menu-area_services {
      top:0!important;
      height: 100vh !important;
      z-index:123;
      overflow:scroll !important;
    }
    .menu-mobile {
      display: flex;
      justify-content:space-between;
      align-items: center;
      margin-bottom:45px!important;
      padding-left:10px;
      p {
        color:#101010;
        font-size:32px;
        font-family:"Calibre Bold";
        margin-bottom:0px;
        text-transform:none;
        height:32px;
      }
      .menu-mobile-iconBack {
        display: block;
        width:21px;
        height:15px;
      }
      .menu-mobile-iconClose {
        display: block;
        width:20px;
        height:19px;
      }
    }
    .list-platforms_Card {
      margin-bottom:20px;
      border-radius:6px;
      padding:10px 15px;
    }
    .imagefull {
      width:100%!important;
      height:100%!important;
    }
    .list-services_Item{
      padding-left:38px!important;
      img {
        margin-right:25px!important;
      }
    }
  }
  @media (max-width: 991px) {
    .navbar-nav {
      margin: 0px;
    }
    .my-form {
      margin-top:50px;
    }
    .menu-list li.menu-list_item {
      height: 36px;
      margin-top: 20px;
      padding: 3px 0px !important
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
      /* background: gray; */
      transition: all 0.5s ease;
      top: 0px;
      position: absolute;
      width: 100vw;
    }
    #basic-navbar-nav .header-scroll {
      background: #101010;
      margin-top: 20px;
    }
    .mb17 {
      margin-bottom:25px;
    }
    .menu-list_item_text-white {
      font-size: 32px!important;
      line-height: 56px!important;
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
  .convertColor {
    color:#101010!important;
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
  @media(max-width: 600px) {
    .mobile {
      margin-top: 10px;
      margin-bottom: -7px;
    }
  }
   @media(min-width: 600px) {
     .mobile {
       letter-spacing:-0.5px !important;
     }
   }

`
const MenuItemServices = styled.div`
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  ul {
    flex-basis: none;
  }
  @media(max-width: 600px) {
    display: block;
    max-width:100%;
    flex-wrap: wrap;
    margin-left: 0px; 
    margin-right: 0px;
    margin-top:20px;
    ul {
      padding-left:0;
      margin-bottom:18px;
    }
    .list-platforms {
      padding-left:12px!important;
      padding-right:12px!important;
    }
    .launches {
      padding-left:12px!important;
      padding-right:12px!important;
    }
  }
  @media (max-width: 886px) and (max-height: 450px) {
    display: block;
    max-width:100%;
    flex-wrap: wrap;
    margin-left: 20px; 
    margin-right: 20px;
    margin-top:20px;
    ul {
      padding-left:0;
      margin-bottom:20px;
    }
  }
 @media (min-width: 767.1px) and (max-width: 768.5px) {
    margin-left: 0px;
    margin-right: 0px;
    flex-wrap: wrap;
    flex-direction:column;
    .list-services {
      padding-left:0!important;
      flex-basis:unset!important;
      margin-bottom:25px;
    }
    .list-platforms {
      flex-basis:unset!important;
      margin-bottom:25px;
      padding-left:20px!important;
      padding-right:20px!important;
    }
    .launches {
      margin-bottom:25px;
      flex-basis:unset!important;
      padding-left:20px!important;
      padding-right:20px!important;
    }
    .list-platforms_Card {
      border-radius:6px;
    }
}

  @media(min-width: 992px) {
    margin-left: 0px; 
    margin-right: 0px;
    .list-services_Item {
      padding-left:0px!important;
    }
    .list-title-services {
      font-size:16px!important;
      font-weight:400!important;
    }
    .list-platforms_Card {
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 25px;
      padding-bottom: 10px;
      padding-top: 10px;
      img {
        margin-right: 15px!important;
      }
      div {
        p {
          font-size:14px;
        }
      }
    }
  }
  @media(min-width: 1200px) {
    margin-left: 120px; 
    margin-right: 120px;
    .list-platforms_Card {
      padding:10px 20px;
      img {
        margin-right: 25px!important;
      }
    }
  }
  @media(min-width: 1600px) {
    margin-left: 120px; 
    margin-right: 120px;
    .list-services_Item {
      padding-left:10px!important;
    }
    .list-title-services {
      font-size:18px!important;
      font-weight:400!important;
    }
    .list-platforms_Card {
      padding: 25px;
      border-radius: 10px;
      margin-bottom: 25px;
      padding-bottom: 16px;
      padding-top: 10px;
      img {
        margin-right: 25px!important;
      }
      div {
        .mobile {
          font-size:20px;
        }
        p {
          font-size:18px;
        }
      }
    }
  }
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
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 22px;
  text-align: center;
  white-space: nowrap;
  margin-bottom: 0px;
  @media (min-width: 992px) {
    font-size: 18px;
  }
`
const Icon = styled.div`
  display:flex;
  color:white;
  margin-bottom:70px!important;
  img {
    margin-right:25px;
    width:32px !important;
    height:32px !important;
  }
  @media (max-width: 992px) {
    display: flex;
  }
  @media (min-width: 992px) {
    display:none;
  }
`
const DivIMG = styled.div`
  overflow: hidden;
  transition: all 200ms ease-in;
  position: relative;
  display: inline-block;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    background-color: go#FECF09ld;
    height: 5px;
    transition: all 0.4s ease-in;
  }
  :hover {
    ::after {
      width: 100%;
    }
  }
`
const TitleImageBlog = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 5rem;
  left: 6rem;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    bottom: 0rem;
    left: 1rem;
  }
  @media (max-width: 886px) and (max-height: 450px) {
    bottom: 1rem;
    left: 3rem;
  }
  @media only screen and (min-width: 992px) {
    bottom: 13rem;
    left: 2rem;
  }
  @media only screen and (min-width: 1366px) {
    top: 223px;
    left: 27px;
  }
`
const H3 = styled.h3`
  color: white;
  font-size: 48px;
  font-family: 'Calibre Bold';
  margin: 0;
  padding: 0;
`
const Span = styled.span`
  font-weight: bold;
  color: #FECF09!important;
  font-size:18px;
`


const Header = ({ location, dataMenuHeader , dataServicesMenu}) => {
  
  console.log("du lieu headerServiecs",dataServicesMenu)
  const dataServices = dataServicesMenu.edges[0].node.body
  console.log('hello word', dataMenuHeader)
  
  const dataMenu = dataMenuHeader.edges[0].node.body[0].fields
  
  const dataImageLogo = dataMenuHeader.edges[0].node.website_logo.url

  // dữ liệu button header(button GET in touch)
  const isShow = dataMenuHeader.edges[0].node.body[1].primary.display_desktop_or_mobile
  const dataButton = dataMenuHeader.edges[0].node.body[1].primary.text_button[0].text
  // dữ liệu button header(button phone)
  const isShowButtonPhone = dataMenuHeader.edges[0].node.body[2].primary.display_desktop_or_mobile
  const dataButtonPhone = dataMenuHeader.edges[0].node.body[2].primary.text_button[0].text
  
  //dulieu icon
  const dataIcon = dataMenuHeader.edges[0].node.body[3].fields
  

  const isShowCTA = dataMenuHeader.edges[0].node.body.filter(x => x.type === 'cta_buton');
  
  const [scroll, setScroll] = useState(false)
  const [isDisPlayModalService, setIsDisPlayModalService] = useState(false)
  const [show, setShow] = useState(false)
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
  const handelClickServices = () => {
    setIsDisPlayModalService(!isDisPlayModalService)
  }
  console.log('dữ liệu đấy nhé hiếu', true)
  const checkColorText = () => {
    if(scroll && isDisPlayModalService) {
      return "menu-list_item_text-white"
    } else {
      if(isDisPlayModalService) {
        return "menu-list_item_text-black"
      }
      else {
        return "menu-list_item_text-white"
      }
    }
  }
  const checkColorTextButton = (index) => {
    console.log({index, isDisPlayModalService, show})
    if(scroll && isDisPlayModalService) {
      return "white"
    } else {
      if(!!show && index ===  1) {
        return "#101010"
      }else {
        if(isDisPlayModalService) {
        return "#101010"
      }
      else {
        return "white"
      }
      }
    }
  }
  console.log({isDisPlayModalService})
  return (
    <WrapperHeader>
      <Navbar
        expand="lg"
        className={`wraper-header 
        ${
          isDisPlayModalService === true ? "backgroundServiecs" : "" 
        }
        ${
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
                  isDisPlayModalService === true ? logoBlack : logoLight
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setShow(!show)}>
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
            <img onClick={() => setIsDisPlayModalService(false)} src={logoIconClose} className="icon-close"/>
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
                  isDisPlayModalService === true ? "dropdown_services" : ""
                }`}
                key={index}
              >
              {item.slug_menu_item[0].text === "services" ?
                <span onClick={handelClickServices} className={checkColorText()}>{item.title_menu_item[0].text} <img className="icon-mobile-right" src={logoIconRight} alt=""/> </span>
                : <Link
                  to={
                    `/${item.slug_menu_item[0].text}`
                  }
                  activeClassName="active"
                  className={checkColorText()}
                >
                  {item.title_menu_item[0].text}
                </Link>
              }
                
                {item.slug_menu_item[0].text === "services" ? (
                  <Ul className="menu-area_services">
                    <hr />
                    <MenuItemServices>
                      {" "}
                      {/* SERVICES */}
                      <Ul className="list-services">
                        <div className="menu-mobile">
                          <img className="menu-mobile-iconBack" onClick={() => setIsDisPlayModalService(false)} src={logoIconBack} alt="back"/>
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
                            <img className="menu-mobile-iconClose" onClick={() => setIsDisPlayModalService(false)} src={logoIconClosBlack} alt="close"/>
                          </Navbar.Toggle>
                        </div>
                        {dataServices[0]?.fields.map((item, index) => (
                          <>
                            <Li className={`${index === 0 ? 'mt0 list-services_Item':'list-services_Item'}`} key={index}>
                              <img className="image-services-item" src={item.image_service_item.url} alt={item.image_service_item.alt}/>
                              <Link className="list-title-services" to=''>{item.title_service_item[0].text}</Link>
                            </Li>
                            <hr />
                          </>
                        ))}
                      </Ul>
                      {/* PLATFORMS */}
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
                        {dataServices[1]?.fields.map((item,index) => (
                          <Li key={index} className="list-platforms_Card">
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
                                fontSise="20"
                                coLor="#101010"
                                fontWeight="500"
                                fontFamily="Calibre Medium"
                                className="mobile"
                              >
                                {item.name_service[0].text}
                              </P>
                              <P
                                fontSise="18"
                                fontFamily="Calibre Regular"
                                coLor="#222222"
                                fontWeight={theme.fonts.regular}
                              >
                                {item.short_description[0].text}
                              </P>
                            </CardDescription>
                        </Li>
                        ))}
                      </Ul>
                      {/* LAUNCHES */}
                      <Ul className="launches">
                        <P
                          uppercase={true}
                          fontSise="14"
                          coLor={theme.colors.black4}
                          fontWeight="600"
                          mrb="10"
                          fontFamily="Calibre Semibold"
                          lett="1"
                          className="displayMobile"
                        >
                          {dataServices[2]?.primary.title[0].text}
                        </P>
                        <DivIMG
                          as={Link}
                          className="imagefull"
                          to={"projects/"+`${dataServices[2]?.primary.launches_project.relationship_to_project_category._meta.uid}/`+`${dataServices[2]?.primary.launches_project._meta.uid}`}
                        >
                          <IMG
                            src={dataServices[2]?.primary.launches_project.project_header_image.url}
                            objectFit="cover"
                            heightPercent="60"
                            alt={dataServices[2]?.primary.launches_project.project_header_image.alt}

                          />
                          <TitleImageBlog>
                            <Span>{dataServices[2]?.primary.launches_project.name_category_of_project}</Span>
                            <H3>{dataServices[2]?.primary.launches_project.project_name[0].text}</H3>
                          </TitleImageBlog>
                        </DivIMG>
                      </Ul>
                    </MenuItemServices>
                  </Ul>
                ) : (
                  ""
                )}
              </Li>
            ))}
          </Nav>
          <Form className="my-form">
              <>
                <Icon>
                  {dataIcon.map((item,index) => (
                    <a targer={item?.link_to_social_network?.target} href={item?.link_to_social_network?.url}>  <img key={index} src={item.social_icon_item.url} alt={item.social_icon_item.alt} /></a>
                  ))
                  }
                </Icon>
                {
                  isShowCTA.map((item, index) => {
                    return (
                      <ButtonCustom key={index} 
                        isShow={item.primary.display_desktop_or_mobile}  // both , mobile. desktop
                        className={index === 0 ? "mb17 button-header" : "button-header"}
                        w="100"
                        bgColor={
                          item.primary.background_color_button
                        }
                        textColor={
                          checkColorTextButton(index)
                        }
                        pd1="12"
                        pd2="19.5"
                        lineh="22"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {index === 1 ? 
                          <GetInTouch>
                            <a className="convertColor" href={`tel: ${item.primary.text_button[0].text}`}>
                              <img className="edit-img" src={logoIconPhone}/> 
                              {item.primary.text_button[0].text}
                            </a>
                          </GetInTouch>
                        :
                          <GetInTouch>
                            {item.primary.text_button[0].text}
                          </GetInTouch>
                        }
                      </ButtonCustom>)
                  })
                }
              </>
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