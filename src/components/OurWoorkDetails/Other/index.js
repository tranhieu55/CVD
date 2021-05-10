import React from 'react'
import styled from 'styled-components'
import IMG from '../../Image'
import { Link } from "gatsby"

export default function Other(arrResult, slugCurrent) {
  return (
    <Container
      data-sal="slide-up"
      data-sal-delay="5000"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <TitleOther>
        <TextOther>Other case studies</TextOther>
      </TitleOther>
      <RowOther>
        { arrResult ? arrResult?.arrResult?.map((item, index) => (
          <ListImageOther
            key={index}
            tabIndex={slugCurrent}
          >
            <DivIMG
              as={Link}
              to={`/projects/${item?.node?.relationship_to_project_category?._meta?.uid}/${item?.node?._meta?.uid}`}
            >
              <IMG
                alt={item?.node?.project_header_image?.alt ? item?.node?.project_header_image?.alt : ""}
                src={item?.node?.project_header_image?.url ? item?.node?.project_header_image?.url : ""}
                objectFit="cover"
                h="500"
              />
              <Shadow></Shadow>
            </DivIMG>
            <TitleImageblock>
              <TextTitleUp>
                <TitleBlock>{item?.node?.name_category_of_project ? item?.node?.name_category_of_project : ""}</TitleBlock>
              </TextTitleUp>
              <TextTitleDown>
                <TextBlock>{item?.node?.project_name?.map(item => item?.text ? item?.text : "")}</TextBlock>
              </TextTitleDown>
            </TitleImageblock>
          </ListImageOther>
        )) : <></>}
      </RowOther>
      <TechSlideShow>
        { arrResult ? arrResult?.arrResult?.map((item, index) => (
          index === 1 ?
          <Slide 
            key={index}
            tabIndex={slugCurrent}
          >
            <DivIMG
              as={Link}
              to={`/projects/${item?.node?.relationship_to_project_category?._meta?.uid}/${item?.node?._meta?.uid}`}
            >
              <IMG
                alt={item?.node?.project_header_image?.alt ? item?.node?.project_header_image?.alt : ""}
                src={item?.node?.project_header_image?.url ? item?.node?.project_header_image?.url : ""}
                objectFit="cover"
                h="206"
              />
              <Shadow></Shadow>
            </DivIMG>
              <TitleImageblock>
                <TextTitleUp>
                  <TitleBlock>{item?.node?.name_category_of_project ? item?.node?.name_category_of_project : ""}</TitleBlock>
                </TextTitleUp>
                <TextTitleDown>
                  <TextBlock>{item?.node?.project_name?.map(item => item?.text ? item?.text : "")}</TextBlock>
                </TextTitleDown>
              </TitleImageblock>
          </Slide>
          : <Slides
              key={index}
              tabIndex={slugCurrent}
            >
              <DivIMG
                as={Link}
                to={`/projects/${item?.node?.relationship_to_project_category?._meta?.uid}/${item?.node?._meta?.uid}`}
                >
                <IMG
                  alt={item?.node?.project_header_image?.alt ? item?.node?.project_header_image?.alt : ""}
                  src={item?.node?.project_header_image?.url ? item?.node?.project_header_image?.url : ""}
                  objectFit="cover"
                  h="206"
                />
                <Shadow></Shadow>
              </DivIMG>
              <TitleImageblock>
                <TextTitleUp>
                  <TitleBlock>{item?.node?.name_category_of_project ? item?.node?.name_category_of_project : ""}</TitleBlock>
                </TextTitleUp>
                <TextTitleDown>
                  <TextBlock>{item?.node?.project_name?.map(item => item?.text ? item?.text : "")}</TextBlock>
                </TextTitleDown>
              </TitleImageblock>
          </Slides>
        )) : <></>}
      </TechSlideShow>
    </Container>
  )
}
const Container = styled.div`
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 85px;
  margin-bottom: 96px;
  .col-md-6 {
    height: 433px;
  }
  .row {
    
    a {
      height: 100%;
      img {
        height: 100%;
      }
    }
  }
  
  @media (min-width: 768px) {
    max-width: 585px;
  }
  @media (min-width: 992px) {
    max-width: 780px;
  }
  @media (min-width: 1024px) {
    max-width: 900px;
  }

  @media (min-width: 1200px) {
    max-width: 1024px;
    
  }
  @media (min-width: 1400px) {
    max-width: 1151px;
  }
  @media (min-width: 1600px) {
    max-width: 1240px;
    
  }
  @media (min-width: 1800px) {
    max-width: 1380px;
    
  }
  @media (max-width: 600px) {
    margin-top: 70px;
    overflow-x: scroll;
    padding-left: 16px;
    margin-bottom: 32px;
    .Shadow-mobile {
      height: 240px;
      width: 100% !important;
      opacity: 0.8;
    }
  }
  @media (max-width: 768px) {
    max-width: 585px;
    margin-bottom: 34px;
  }
`
const DivIMG = styled.div`
  height: 100%;
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
    background-color: gold;
    height: 5px;
    transition: all 0.4s ease-in;
  }
  :hover {
    ::after {
      width: 100%;
    }
  }
`
const TitleOther = styled.div`
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
      env(safe-area-inset-bottom) env(safe-area-inset-left);
  @media (max-width: 320px){
    margin-left: 25px !important;
  }
  @media (max-width: 600px){
      height: 32px;
      margin-left: 36px;
      margin-top: 20px;
      margin-bottom: 29px;
      letter-spacing: -0.5px;
  }
`
const TextOther = styled.h1`
  font-weight: 600;
  line-height: 52px;
  font-size: 48px;
  text-align: center;
  margin-top: 88px;
  font-family: "Calibre Semibold";
  color: #101010;
  margin-bottom: 30px;
  @media (max-width: 600px){
    font-size: 32px;
    margin-top: 0px;
    font-family: "Calibre Semibold";
    text-align: left;
    margin-bottom: 0px;
    font-weight: 600;
    line-height: 52px;
  }
`
const RowOther = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-right: 0px;
  margin-left: 0px;
  margin-top: 19px;
  @media (max-width: 600px){
    display: none;
    margin-top: 24px;
  }
  @media (max-width: 768px){
    height: 340px;
  }
  @media (max-width: 991px){
    height: 340px;
  }
`
const ListImageOther = styled.div`
  width: 49%;
  height: 433px;
  position: relative;
  @media(min-width: 1024px){
    max-height: 320px;
  }
  @media (min-width: 1200px){
    max-height: 433px;
    max-width: 564px;
  }
  @media (min-width: 1400px){
    max-height: 433px;
    max-width: 581px;
  }
  @media (min-width: 1600px){
    max-height: 433px;
    max-width: 604px;
  }
  @media (min-width: 1800px){
    max-height: 433px;
    max-width: 674px;
  }
  @media (max-width: 768px){
    height: 340px;
  }
  @media (max-width: 991px){
    height: 340px;
  }
`
const Shadow = styled.div`
  position: absolute;
  bottom: 0px;
  height: 210px;
  width: 100%;
  opacity: 0.3;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  @media(max-width: 600px){
    height: 100px;
    width: 100%;
    opacity: 0.3;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  }
`
const TitleImageblock = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 33px;
  left: 42px;
  cursor: pointer;
  /* color:red; */
  @media (min-width: 1024px){
    left: 20px;
  }
  @media (min-width: 1200px){
    left: 42px;
  }
  @media (min-width: 1400px){
    left: 42px;
  }
  @media (min-width: 1600px){
    left: 42px;
  }
  @media (min-width: 1800px){
    left: 42px;
  }
  @media (max-width: 600px){
    bottom: 31px;
    left: 25px;
    height: 45px;
  }
  @media (max-width: 768px){
    left: 25px !important;
  }
`
const TextTitleUp = styled.div`
  margin-bottom: -6px;
  @media (max-width: 600px){
    margin-bottom: -7px;
  }
`
const TextTitleDown = styled.div`
  @media (max-width: 600px){
    margin-top: 0px;
  }
`
const TitleBlock = styled.span`
  font-weight: bold;
  color: gold;
  @media (max-width: 600px){
    font-size: 14px;
  }

`
const TextBlock = styled.h3`
  color: white;
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  @media (min-width: 768px){
    font-size: 30px;
  }
  @media (min-width: 1024px){
    font-size: 36px;
  }
  @media (max-width: 600px){
    font-size: 28px;
  }
`
const TechSlideShow = styled.div`
  display: none;
  @media (max-width: 600px){
    display: flex;
    width: 100%;
    height: 206px;
    margin-top: 4px;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`
const Slide = styled.div`
  margin-left: 306px;
  width: 290px;
  position: absolute;
  padding-right: 0px;
  padding-left: 0px;
`
const Slides = styled.div`
  width: 290px;
  position: absolute;
  padding-right: 0px;
  padding-left: 0px;
`
// const DivOther = styled.div`
//   width: 100%;
//   height : 50%;
//   background: linear-gradient(
//     180deg
//     , rgba(0,0,0,0) 0%, #000000 100%);
// `