import React from "react"
import styled from "styled-components"


const ColumTestimonial = ({ input }) => {

  return (
    <ColumTestimonials>
      <Slides className="row" >
        {input ? input.fields?.map((item, index) => (
          <Slider
            key={index}
            className="col-lg-6"
          >
            <Img alt={item.logo_client?.alt ? item.logo_client?.alt : ""} 
            src={item.logo_client?.url ? item.logo_client?.url : ""} vitri={index}>
            </Img>
            <Text>
              <Content>“{item.qoute_of_client?.map(items => items?.text ? items?.text : item)}”</Content>
            </Text>
            <Sub>
              <SubTitle>{item.sub_title?.map(items => items?.text ? items?.text : item)}</SubTitle>
              <SubText>{item.title?.map(items => items?.text ? items?.text : item)}</SubText>
            </Sub>
          </Slider>
        )) : <></>}
      </Slides>
    </ColumTestimonials>
  )
}

export default ColumTestimonial


const ColumTestimonials = styled.div`
    width: 1240px;
    margin : 0 auto;
    height: auto;
    @media(max-width: 600px){
      width: 343px;
      margin-bottom: 42px;
    }
    @media(max-width: 360px){
      width: 298px;
    }
    @media(min-width: 600px){
      width: 568px;
      margin-bottom: 0px;
    }
    @media(min-width: 992px){
      width: 915px;
    }
    @media(min-width: 1366px){
      width: 1240px;
    }
`
const Slides = styled.div`
  margin-left: 0px;
  margin-right: 0px;
  justify-content: space-between;
  margin-bottom: -8px;
  @media(max-width: 600px){
    display: block;
    margin-left: 0px;
    margin-right: 0px;
  }

`
const Slider = styled.div`
  @media(max-width: 600px){
    margin-bottom: 30px;
    padding-right: 0px;
    padding-left: 0px;
  }
  @media(min-width: 600px){
    padding-right: 0px;
    padding-left: 0px;
    margin-bottom: 40px;
  }
  @media(min-width: 992px){
    flex: 0 0 44%;
    max-width: 46%;
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 80px;
  }
`
const Img = styled.img`
  height: ${props => props.vitri %2 === 0 ? '24px' : '33px'};
  width: ${props => props.vitri %2 === 0 ? '162px' : '156px'};
  object-fit: content;
  margin-bottom: ${props => props.vitri %2 === 0 ? '32px' : '25px'};
  @media(max-width: 600px){
    margin-bottom: 18px;
  }
`
const Text = styled.div`

`
const Content = styled.p`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 28px;
  margin-bottom: 14px;
  @media(max-width: 600px){
    margin-bottom: 12px;
  }
`
const Sub = styled.div``
const SubTitle = styled.p`
  color: #222222;
  font-family: Calibre Semibold;
  margin-bottom: 0px;
`
const SubText = styled.p`
  color: #555555;
  font-family: Calibre Regular;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 22px;
  margin-bottom: 0px;
`
