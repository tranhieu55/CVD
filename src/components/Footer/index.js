import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const FooterStyle = styled.div`
  background-color: #222222;
  font-family: "Calibre Medium";
  font-size: 20px;
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
  .changes-text {
      font-size:18px !important;
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
    .editText {
     margin-right: 15px !important;
    }
  }
  @media only screen and (max-width: 600px) {
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
    .style-icon {
      padding-top: 28px !important;
    }
    .w-141 {
      width: 600px;
    }
    .editText {
     margin-right: 30px !important;
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
    .order-3 {
      order: 5;
    }
    .order-5 {
      order: 3;
    }
    .content-digital {
      margin-top: 30px;
      margin-right:80px;
    }
    .style-icon {
      padding-top: 30px !important;
    }

    .editText {
     margin-right: 64px !important;
    }
    .none-pd {
      padding-top: 0;
    }
  }

  @media only screen and (min-width: 768px) {
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
  }

  @media only screen and (min-width: 992px) {
    .w-141 {
      width: 70px;
    }
    .w-112 {
      display: block;
      width: 30px;
    }
    
    .editText {
     margin-right: 64px !important;
    }
    .content-digital {
      margin-top: 0px;
      margin-right:0px;
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
const IphoneX = styled.div`
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
`
const Container = styled.div`
  max-width: 1260px;
  @media only screen and (max-width: 600px) {
    padding-top: 48px !important;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 31px !important;
  }
  @media only screen and (min-width: 600px) {
    padding-top: 40px !important;
    padding-bottom: 30px !important;
  }
  @media only screen and (min-width: 768px) {
    padding-top: 40px !important;
    padding-bottom: 30px !important;
  }
  @media only screen and (min-width: 992px) {
    padding-top: 108px !important;
    padding-bottom: 76px !important;
  }
`
const ListIcon = styled.div``
const Order = styled.div``
const Row = styled.div``
const BoxImage = styled.div`
@media only screen and (max-width: 600px) {
  margin: auto;
}
@media only screen and (min-width: 600px) {
    margin: auto;
}
@media only screen and (min-width: 992px) {
  margin: 0;
  margin-right:0px;
}
@media only screen and (min-width: 1300px) {
    margin: 0;
  }
`
const BoxOrder = styled.div``
const BoxTextOrder = styled.div`
  width: 164px;
  color: #ffffff;
  font-family: "Calibre Medium";
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  @media only screen and (max-width: 600px) {
    padding-top: 26px;
    font-size: 18px;
    line-height: 26px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 30px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 0px;
  }
  @media only screen and (min-width: 1300px) {
    margin-top: 0px;
  }
    
`
const BoxContentDigital = styled.div``
const ListContent = styled.div``
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

export default function Footer({ dataFooter }) {
  const dataOurWorkFooter = dataFooter.body.filter(
    item => item.type === "ourwork_footer"
  )
  const dataAddressFooter = dataFooter.body.filter(
    item => item.type === "address"
  )

  return (
    <FooterStyle className="container-fulid">
      <IphoneX>
        <Container className="container">
          <Row className="row">
            <BoxImage className="order-1">
              <img
                alt="image"
                className="img"
                src="https://www.convertdigital.com.au/wp-content/uploads/2017/01/convertdigital-logo@2x.png"
              />
            </BoxImage>
            <BoxOrder className="w-141 order-2"></BoxOrder>
            <BoxTextOrder className="order-3">
              <ListLink>
                <Link className="none-pd" to="/projects">
                  Our work
                </Link>
                {dataOurWorkFooter[0].fields.map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.slug_sub_title.map(item => item.text)}`}
                  >
                    {item.sub_title.map(item => item.text)}
                  </Link>
                ))}
              </ListLink>
            </BoxTextOrder>
            <BoxOrder className="w-112 order-4"></BoxOrder>
            <BoxContentDigital className="content-digital order-5">
              {dataAddressFooter[0].fields.map((item, index) => (
                <ListContent key={index} className={index === 0 ? 'text-3 editText' : 'text-3'}>
                  <Content>
                    <span>{item.address_title.map(item => item.text)}</span>
                    <p>
                      {item.address_detail.map(item => item.text)}
                      <br />
                      <span className='changes-text'>{item.phone.map(item => item.text)}</span>
                    </p>
                  </Content>
                </ListContent>
              ))}
            </BoxContentDigital>
          </Row>
          <ListIcon className="style-icon">
            <Boxicon className="row">
              <Order className=" order-1">
                <span className="convert-2020">© 2019 Convert Digital. </span>
              </Order>
              <Order className=" order-2">
                <Icon>
                  <span className="icon icon-fb" />
                  <span className="icon icon-instagram" />
                  <span className="icon icon-linkedin" />
                </Icon>
              </Order>
            </Boxicon>
          </ListIcon>
        </Container>
      </IphoneX>
    </FooterStyle>
  )
}


