import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Navbar } from "react-bootstrap"
import logoIconClosBlack from "../../../images/close-3_b7489140-dbd1-403b-a115-babae5e8c8fc@2x.png"
import logoIconBack from "../../../images/Arrow_Left_V2@2x.png"
import IMG from "../../Image"

const OurWorkMobile = ({ dataHeaderOurwork, checkValue, checkClose }) => {
  const data = dataHeaderOurwork?.edges[0]?.node?.body
  const [value, setValue] = useState(false)
  const [close, setClose] = useState(false)
  const functionCheckValue = () => {
    setValue(!value)
    checkValue(value)
  }
  const functionCheckValueClose = () => {
    setClose(!close)
    checkClose(close)
  }
  return (
    <Container>
      <Head>
        <TitleHead>
          {dataHeaderOurwork?.edges[0]?.node.title_ourwork[0]?.text}
        </TitleHead>
        <ArrowLeft>
          <img
            className="menu-mobile-iconBack"
            onClick={() => functionCheckValue()}
            src={logoIconBack}
            alt="back"
          />
        </ArrowLeft>
        <Close>
          <Navbar.Toggle>
            <img
              onClick={() => functionCheckValueClose()}
              className="menu-mobile-iconClose"
              src={logoIconClosBlack}
              alt="close"
            />
          </Navbar.Toggle>
        </Close>
      </Head>
      <Body>
        <ListOurWork>
          {data[0]?.fields[0]?.content?.map((item, key) => {
            return (
              <OurWork key={key}>
                <Link href="#">{item?.text}</Link>
              </OurWork>
            )
          })}
        </ListOurWork>
        <Grid>
          <ListCaseStudy>
            <SubTitle>{data[1]?.primary?.title[0]?.text}</SubTitle>
            <DivIMG
              as={Link}
              className="imagefull mask"
              // to={
              //   "projects/" +
              //   `${dataServices[2]?.primary.launches_project.relationship_to_project_category._meta.uid}/` +
              //   `${dataServices[2]?.primary.launches_project._meta.uid}`
              // }
            >
              <IMG
                src={data[1]?.fields[0]?.image_feautured?.url}
                objectFit="cover"
                heightPercent="100"
                alt={data[1]?.fields[0]?.image_feautured?.alt}
              />
              <TitleImageBlog>
                <Span>{data[1]?.fields[0]?.sub_image[0]?.text}</Span>
                <H3>{data[1]?.fields[0]?.title_image[0]?.text}</H3>
              </TitleImageBlog>
            </DivIMG>
          </ListCaseStudy>
          <ListImage>
            <SubTitle>{data[1]?.primary?.title[0]?.text}</SubTitle>
            <BlockImage>
              {data[2]?.fields?.map((item, index) => {
                return (
                  <Img
                    key={index}
                    src={item?.image_launched?.url}
                    alt={item?.image_launched?.alt}
                  />
                )
              })}
            </BlockImage>
          </ListImage>
        </Grid>
      </Body>
    </Container>
  )
}
export default OurWorkMobile

const Container = styled.div`
  @media (max-width: 992px) {
    display: block;
  }
  @media (min-width: 992px) {
    display: none;
  }
  padding: 26px 0 42px 0;
  max-width: 374px;

  @media (min-width: 376px) and (max-width: 992px) {
    max-width: 100%;
  }
`
const Head = styled.div`
  position: relative;
`
const ArrowLeft = styled.span`
  position: absolute;
  top: 2px;
  left: 25px;
  cursor: pointer;
  img {
    width: 21px;
    height: 16px;
  }
  .menu-mobile-iconBack {
    display: block !important;
  }
`
const Close = styled.span`
  position: absolute;
  top: 2px;
  right: 25px;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
  .menu-mobile-iconClose {
    display: block !important;
  }
  button {
    margin-right: 0 !important;
  }
`

const TitleHead = styled.h5`
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 34px;
  text-align: center;
  margin-bottom: 5px;
  margin-top: -3px;
  padding-bottom: 4px;
`
const Body = styled.div``
const ListOurWork = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li:last-child {
    border-bottom: 1px solid #eeeeee;
  }
`
const OurWork = styled.li`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 68px;
  border-top: 1px solid #eeeeee;
  padding-left: 25px;
  a,
  a:focus,
  a:active,
  a:visited,
  a:hover {
    color: #222222;
    text-decoration: none;
  }
`
const SubTitle = styled.h6`
  color: #999999;
  font-family: Calibre Semibold;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 5px;
`
const Grid = styled.div`
  @media (min-width: 601px) and (max-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 31px;
  }
`
const ListCaseStudy = styled.div`
  padding: 20px 31.47px 28px 26px;
  .imagefull {
    height: 202px !important;
    width: 100%;
    cursor: pointer;
  }
  .mask ::before {
    position: absolute;
    content: "";
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    height: 100%;
    width: 100%;
    left: 0;
    opacity: 30%;
  }
  @media (max-width: 600px) {
    padding-bottom: 15px;
  }
  @media (min-width: 601px) and (max-width: 992px) {
    padding: 0;
    padding-top: 31px;
    padding-left: 26px;
  }
`
const ListImage = styled.div`
  padding-left: 26px;
  padding-right: 29.34px;

  @media (min-width: 601px) and (max-width: 992px) {
    padding: 0;
    padding-top: 31px;
    padding-right: 31.4px;
  }
`
const BlockImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 9.38px;
  grid-row-gap: 12.48px;
  margin-top: 8px;

  @media (min-width: 601px) and (max-width: 992px) {
    grid-column-gap: 12px;
    grid-row-gap: 7px;
    margin-top: 13px;
    min-height: 299px;
  }
`
const Img = styled.img`
  width: 155.14px;
  height: 111.76px;
  background-color: lightgray;

  @media (min-width: 376px) {
    width: 100%;
  }
  @media (min-width: 601px) and (max-width: 992px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 374px) {
    width: 100%;
  }
  object-fit: cover;
`
const DivIMG = styled.div`
  overflow: hidden;
  transition: all 0.4s ease-in;
  position: relative;
  display: inline-block;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    background-color: #fecf09;
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
  cursor: pointer;
  @media only screen and (max-width: 992px) {
    bottom: 0rem;
    left: 1rem;
  }
  @media (max-width: 991px) and (max-height: 450px) {
    bottom: 1rem;
    left: 3rem;
  }
  @media (max-width: 600px) {
    bottom: 13px;
    left: 24px;
  }
`
const H3 = styled.h3`
  color: white;
  font-size: 32px;
  font-family: "Calibre Bold";
  margin: 0;
  padding: 0;
  line-height: 32px;
`
const Span = styled.span`
  color: #fecf09 !important;
  font-size: 18px !important;
  line-height: 16px !important;
  @media (max-width: 992px) {
    margin-bottom: 5px !important;
  }
`
