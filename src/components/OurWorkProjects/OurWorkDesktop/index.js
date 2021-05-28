import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const OurWorkDesktop = () => (
  <Container>
    <Body>
      <ListOurWork>
        <SubTitle>PORTFOLIO</SubTitle>
        <OurWorks>
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
        </OurWorks>
      </ListOurWork>

      <Grid>
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
      </Grid>
    </Body>
  </Container>
)

export default OurWorkDesktop

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 59px;
  padding-top: 31px;
`

const Body = styled.div`
  display: grid;
  grid-gap: 48px;
  grid-template-columns: auto auto;

  @media (max-width: 1366px) {
    grid-gap: 24px;
  }
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`
const ListOurWork = styled.div`
  min-width: 300px;
`
const OurWorks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 8px;

  li:last-child {
    border-bottom: 1px solid #eeeeee;
  }
  li:first-child {
    border-top: none;
  }
`

const OurWork = styled.li`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 57px;
  border-top: 1px solid #eeeeee;

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
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 48px;

  @media (max-width: 1366px) {
    grid-gap: 24px;
  }
`

const ListCaseStudy = styled.div`
  min-width: 470px;
`
const CaseStudy = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: lightgray;
  margin-top: 8px;
`
const ListImage = styled.div`
  min-width: 409px;
`
const BlockImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 7px;
  margin-top: 13px;
`
const IMG = styled.div`
  width: 198.5px;
  height: 143px;
  background-color: lightgray;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
