import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import CardProject from "../../CardProject"

const OurWorkMobile = () => (
  <Container>
    <Head>
      <TitleHead>Our Work</TitleHead>
      <ArrowLeft>#</ArrowLeft>
      <Close>#</Close>
    </Head>
    <Body>
      <ListOurWork>
        <OurWork>
          <Link href="#">Case Studies</Link>
        </OurWork>
        <OurWork>
          <Link href="#">Launches</Link>
        </OurWork>
        <OurWork>
          <Link href="#">Who we work with</Link>
        </OurWork>
        <OurWork>
          <Link href="#">Testimonials</Link>
        </OurWork>
      </ListOurWork>
      <ListCaseStudy>
        <SubTitle>FEAUTURED</SubTitle>
        <CaseStudy>{/* <CardProject /> */}</CaseStudy>
      </ListCaseStudy>
      <ListImage>
        <SubTitle>FEAUTURED</SubTitle>
        <BlockImage>
          <IMG></IMG>
          <IMG></IMG>
          <IMG></IMG>
          <IMG></IMG>
        </BlockImage>
      </ListImage>
    </Body>
  </Container>
)

export default OurWorkMobile

const Container = styled.div`
  padding: 26px 0 42px 0;
  max-width: 374px;
`
const Head = styled.div`
  position: relative;
`
const ArrowLeft = styled.span`
  position: absolute;
  top: 0;
  left: 25px;
  cursor: pointer;
`
const Close = styled.span`
  position: absolute;
  top: 0;
  right: 25px;
  cursor: pointer;
`

const TitleHead = styled.h5`
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 34px;
  text-align: center;
  margin-bottom: 13px;
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
  margin-bottom: 0;
`
const ListCaseStudy = styled.div`
  padding: 20px 31.47px 28px 26px;
`
const CaseStudy = styled.div`
  width: 317.53px;
  height: 202px;
  background-color: lightgray;
  margin-top: 2px;
`
const ListImage = styled.div`
  padding-left: 26px;
  padding-right: 29.34px;
`
const BlockImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 9.38px;
  grid-row-gap: 12.48px;
  margin-top: 5px;
`
const IMG = styled.div`
  width: 155.14px;
  height: 111.76px;
  background-color: lightgray;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
