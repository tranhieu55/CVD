import React from "react"
import { Link, useStaticQuery } from "gatsby"
import styled from "styled-components"

const FooterStyle = styled.div`
  background-color: #222222;
  font-family: "Calibre Medium";
  font-size: 20px;
  .footer {
    max-width: 1260px;
  }
  .row {
    margin: 0;
  }
  img {
    width: 202px;
    height: 38px;
  }
  .style-icon {
    padding-top: 80px;
  }
  .w-141 {
    width: 141px;
  }
  .w-112 {
    width: 112px;
  }
  .w-64 {
    width: 64px;
  }
  .w-145 {
    width: 145px;
  }
  .text-2 {
    width: 164px;
    color: #ffffff;
    font-family: "Calibre Medium";
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 24px;
  }
  .text-3 {
    width: 216px;
  }
  .text-3 span {
    font-family: "Calibre Semibold";
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 24px;
  }
  .text-3 p {
    font-family: "Calibre Medium";
    opacity: 0.7;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;
  }

  .convert-2020 {
    opacity: 0.7;
    color: #ffffff;
    font-family: "Calibre Medium";
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 24px;
  }
  .content-digital {
    display: flex;
  }

  @media only screen and (max-width: 320px) {
    .text-3 {
      width: 135px !important;
    }
    .w-64 {
      width: 15px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    .footer {
      padding-top: 48px !important;
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 31px !important;
    }
    .img {
      display: block;
      margin: auto;
    }
    .text-3 {
      padding-top: 37px;
    }
    p {
      margin: 0;
    }
    .text-2 {
      padding-top: 26px;
      font-size: 18px;
      line-height: 26px;
    }
    .style-icon {
      padding-top: 28px !important;
    }
    .w-141 {
      width: 600px;
    }
    .image-converdigital {
      margin: auto;
    }
    .w-64 {
      width: 28px;
    }
    .text-3 {
      width: 155px;
    }
    .text-3 p {
      font-size: 16px !important;
      letter-spacing: -0.1px;
      line-height: 23px;
    }
    .text-3 span {
      font-size: 18px !important;
      padding-bottom: 0px;
    }
    .convert-2020 {
      font-size: 16px !important;
    }
    .order-3 {
      order: 5;
    }
    .order-5 {
      order: 3;
      width: 100%;
    }
    .w-112 {
      display: none;
    }
  }

  @media only screen and (min-width: 600px) {
    .w-141 {
      width: 600px;
    }
    .w-112 {
      display: none;
    }
    .image-converdigital {
      margin: auto;
    }
    .order-3 {
      order: 5;
    }
    .order-5 {
      order: 3;
    }
    .content-digital {
      margin-top: 30px;
    }
    .style-icon {
      padding-top: 30px !important;
    }

    .w-64 {
      width: 145px;
    }
    .footer {
      padding-top: 40px !important;
      padding-bottom: 30px !important;
    }

    .none-pd {
      padding-top: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    .text-2 {
      margin-top: 30px;
    }
    .w-141 {
      width: 800px;
    }
    .w-112 {
      display: block;
    }
    .order-3 {
      order: 5;
    }
    .order-5 {
      order: 3;
    }
    .none-pd {
      padding-top: 0;
    }
    .footer {
      padding-top: 40px !important;
      padding-bottom: 30px !important;
    }
  }

  @media only screen and (min-width: 992px) {
    .w-141 {
      width: 70px;
    }
    .w-112 {
      display: block;
      width: 30px;
    }
    .w-64 {
      width: 64px;
    }
    .image-converdigital {
      margin: 0;
    }
    .text-2 {
      margin-top: 0px;
    }
    .content-digital {
      margin-top: 0px;
    }
    .text-3 p {
      font-size: 18px;
    }
    .text-3 span {
      font-size: 20px;
    }
    .convert-2020 {
      font-size: 18px;
    }
    .order-3 {
      order: 3;
    }
    .order-5 {
      order: 5;
    }
    .footer {
      padding-top: 108px !important;
      padding-bottom: 76px !important;
    }
    .style-icon {
      padding-top: 72px !important;
    }
  }

  @media only screen and (min-width: 1300px) {
    .container {
      padding-left: 0;
      padding-right: 0;
    }
    .w-141 {
      width: 141px;
    }
    .w-112 {
      display: block;
      width: 112px;
    }
    .image-converdigital {
      margin: 0;
    }
    .text-2 {
      margin-top: 0px;
    }
    .content-digital {
      margin-top: 0px;
    }
  }
  .text-3 p {
    font-size: 18px;
  }
  .text-3 span {
    font-size: 20px;
  }
  .convert-2020 {
    font-size: 18px;
  }
`

const Icon = styled.div`
  text-align: right;
  a {
    color: white;
    opacity: 0.7;
  }
  svg {
    margin-right: 24px;
    cursor: pointer;
    font-size: 28px;
    &:hover {
      transition: all 1s ease;
      color: gold;
    }
  }
  .icon-last {
    margin-right: 0px;
  }
  @media only screen and (max-width: 600px) {
    text-align: left;
    margin-bottom: 10px;
  }

  // Thêm icon fb, instagram, linkedin
  span.icon {
    cursor: pointer;
    &::after {
      font-family: "Font Awesome 5 Brands Regular";
      font-size: 24px;
      width: 21px;
      height: 24px;
      opacity: 0.7;
      color: #ffffff;
      line-height: 24px;
    }
  }
  span.icon.icon-fb {
    &::after {
      content: "\f082";
    }
  }
  span.icon.icon-instagram {
    margin: 0 24px;
    &::after {
      content: "\f16d";
    }
  }
  span.icon.icon-linkedin {
    &::after {
      content: "\f08c";
    }
  }
`
const Boxicon = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: #bdbdbd;
    font-size: 18px;
  }

  @media only screen and (max-width: 600px) {
    p {
      font-size: 16px;
    }
    .order-1 {
      order: 2;
    }
    .order-2 {
      order: 1;
    }
    flex-direction: column;
  }
`
const ListLink = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;
  a {
    color: white;
    text-decoration: none;
    font-size: 20px;
  }
  @media only screen and (max-width: 600px) {
    line-height: 28px;
    a {
      font-size: 17px;
    }
  }
`
const Content = styled.div`
  span {
    color: white;
    font-size: 20px;
    display: block;
    padding-bottom: 5px;
    font-family: "Calibre Semibold";
  }
`

export default function Footer() {
  const FooterData = useStaticQuery(graphql`
    query FooterQuery {
      allPrismicFooter {
        nodes {
          data {
            body {
              slice_type
              primary {
                order
                address_title {
                  text
                }
                title {
                  text
                }
              }
              items {
                address_detail {
                  text
                }
                address_title {
                  text
                }
                order
                phone {
                  text
                }
                slug_sub_title {
                  text
                }
                sub_title {
                  text
                }
              }
            }
          }
        }
      }
    }
  `)

  const OurWorkData = FooterData.allPrismicFooter.nodes[0].data.body[0]
  const AddressData = FooterData.allPrismicFooter.nodes[0].data.body[1]

  return (
    <FooterStyle className="container-fulid">
      <div>
        <div className="container footer">
          <div className="row">
            <div className="image-converdigital order-1">
              <img
                alt="image"
                className="img"
                src="https://www.convertdigital.com.au/wp-content/uploads/2017/01/convertdigital-logo@2x.png"
              />
            </div>
            <div className="w-141 order-2"></div>
            <div className="text-2 order-3">
              <ListLink>
                <Link className="none-pd" to="/projects">
                  Our work
                </Link>
                {OurWorkData.items.map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.slug_sub_title.map(item => item.text)}`}
                  >
                    {item.sub_title.map(item => item.text)}
                  </Link>
                ))}
              </ListLink>
            </div>
            <div className="w-112 order-4"></div>
            <div className="content-digital order-5">
              {AddressData.items.map((item, index) => (
                <div key={index} className="text-3">
                  <Content>
                    <span>{item.address_title.map(item => item.text)}</span>
                    <p>
                      {item.address_detail.map(item => item.text)}
                      <br />
                      <span>{item.phone.map(item => item.text)}</span>
                    </p>
                  </Content>
                </div>
              ))}
            </div>
          </div>
          <div className="style-icon">
            <Boxicon className="row">
              <div className=" order-1">
                <span className="convert-2020">© 2019 Convert Digital. </span>
              </div>
              <div className=" order-2">
                <Icon>
                  <span className="icon icon-fb" />
                  <span className="icon icon-instagram" />
                  <span className="icon icon-linkedin" />
                </Icon>
              </div>
            </Boxicon>
          </div>
        </div>
      </div>
    </FooterStyle>
  )
}
