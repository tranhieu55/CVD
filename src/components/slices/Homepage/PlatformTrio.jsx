import React, { useEffect, useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"
import OwlCarousels from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"

const isBrowser = typeof window !== "undefined"

const PlatformTrio = ({ input }) => {
  const title = input
    ? input.primary?.title[0]?.text
      ? input.primary?.title[0]?.text
      : ""
    : ""
  const content = input
    ? input.primary?.content
      ? input.primary?.content
      : ""
    : ""
  const platforms = input ? (input?.fields ? input?.fields : "") : []
  const [indicator, setindicator] = useState(0)

  function updateSelected(i) {
    setindicator(i)
  }
  const [width, setWindowSize] = useState(window.innerWidth)
  useEffect(() => {
    if (isBrowser) {
      function handleResize() {
        setWindowSize(window.innerWidth)
      }
      window.addEventListener("resize", handleResize)
      handleResize()
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <Container>
      <Title>{title}</Title>
      <Content className="content">{RichText.render(content)}</Content>
      {width >= 992 ? (
        <Platforms className="md:overflow-scroll">
          {platforms?.map((platform, i) => {
            const desc = platform.description
            const logo = platform.logo.url
            return (
              <Platform
                key={i}
                onClick={() => updateSelected(i)}
                indicator={i === indicator}
                vitri={i}
                length={platforms.length}
              >
                <div className="white"></div>
                <Inner>
                  <PlatformLogo src={logo} />
                  {/* <PlatformTitle>{name}</PlatformTitle> */}
                  <PlatformDesc className="content">
                    {RichText.render(desc)}
                  </PlatformDesc>
                  <Buttons>
                    <ButtonText to="#"> Learn more</ButtonText>
                  </Buttons>
                </Inner>
              </Platform>
            )
          })}
        </Platforms>
      ) : (
        <OwlCarousels
          margin={26}
          autoWidth={true}
          items={2}
          className="owl-theme"
        >
          {platforms?.map((platform, i) => {
            const desc = platform.description
            const logo = platform.logo.url
            return (
              <Platform
                key={i}
                onClick={() => updateSelected(i)}
                indicator={i === indicator}
                vitri={i}
                length={platforms.length}
              >
                <div className="white"></div>
                <Inner>
                  <PlatformLogo src={logo} />
                  {/* <PlatformTitle>{name}</PlatformTitle> */}
                  <PlatformDesc className="content">
                    {RichText.render(desc)}
                  </PlatformDesc>
                  <Buttons>
                    <ButtonText to="#"> Learn more</ButtonText>
                  </Buttons>
                </Inner>
              </Platform>
            )
          })}
        </OwlCarousels>
      )}
    </Container>
  )
}

export default PlatformTrio

PlatformTrio.propTypes = {
  input: PropTypes.object.isRequired,
}

const Container = styled.div`
  background: #f8f8f8;
  height: 973px;
  :before {
    background: inherit;
    content: "";
    transform-origin: 100%;
    z-index: -1;
    height: 163px;
    width: 100%;
    transform: skewY(1.5deg);
    position: relative;
    display: block;
    top: -79px;
  }
  @media (min-width: 600px) {
    :before {
      top: 0px;
      height: 150px;
      transform: skewY(3.7deg);
    }
  }
  @media (min-width: 601px) and (max-width: 768px) {
    height: 923px;
  }
  @media (max-width: 600px) {
    position: relative;
    margin-top: 10px;
    height: 819px;
    :before {
      top: -25px;
      height: 61px;
      transform: skewY(3.7deg);
    }
  }
  @media (min-width: 540px) and (max-width: 600px) {
    height: 747px;
  }
  @media (min-width: 500px) and (max-width: 540px) {
    height: 797px;
  }
  @media (max-width: 360px) {
    height: 839px;
  }
  @media (min-width: 1024px) {
    :before {
      height: 120px;
    }
  }
  @media (min-width: 1366px) {
    margin-top: -83px;
    :before {
      height: 146px;
    }
  }
  @media (min-width: 1600px) {
    height: 1000px;
    margin-top: -83px;
    :before {
      height: 146px;
    }
  }
  .owl-carousel.owl-loaded {
    height: 375px;
  }
  .owl-carousel.owl-drag .owl-item {
    @media (max-width: 600px) {
      margin-right: 0px !important;
    }
  }
  .owl-carousel .owl-stage-outer {
    padding-left: 48px;
  }
  .owl-theme .owl-nav.disabled + .owl-dots {
    width: 400px;
    margin: 46px auto 0px;
    @media (max-width: 768px) {
      width: 300px;
    }
    @media (max-width: 600px) {
      width: 200px;
      margin: 59px auto 0px;
    }
  }
  .owl-carousel .owl-item img {
    width: auto;
  }
  .owl-theme .owl-dots .owl-dot {
    width: 100px;
    span {
      width: 100%;
      height: 4px;
      margin-left: 0px;
      margin-right: 0px;
      background-color: #eeeeee;
      border-radius: 2px;
    }
    @media (max-width: 768px) {
      width: 20px;
    }
    @media (max-width: 600px) {
      width: 16px;
      span {
        width: 100%;
        height: 4px;
        margin-left: 0px;
        margin-right: 0px;
        background-color: #eeeeee;
        border-radius: 2px;
      }
    }
  }
  .owl-theme .owl-dots .owl-dot.active {
    width: 300px;
    span {
      background-color: #bbbbbb;
    }
    @media (max-width: 768px) {
      width: 240px;
    }
    @media (max-width: 600px) {
      width: 150px;
      span {
        background-color: #bbbbbb;
      }
    }
  }
`
const Title = styled.h2`
  height: 144px;
  max-width: 959px;
  color: #101010;
  font-size: 80px;
  font-weight: bold;
  letter-spacing: -2px;
  line-height: 72px;
  text-align: center;
  margin: auto;
  font-family: Calibre;
  position: relative;
  top: -79px;
  padding-top: 9px;
  @media (max-width: 600px) {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 0px;
    line-height: 38px;
    text-align: center;
    top: -41px;
    height: 114px;
    word-spacing: -3.1px;
    padding: 9px 16px 0px;
    margin-bottom: 10px;
  }
  @media (max-width: 320px) {
    padding: 9px 10px 0px;
  }
  @media (min-width: 601px) {
    font-size: 56px;
    padding: 0px 32px;
  }
  @media (min-width: 1024px) {
    padding: 0px 0px;
  }
  @media (min-width: 1366px) {
    font-size: 80px;
    margin: auto;
  }
`

const Content = styled.div`
  margin: auto;
  max-width: 928px;
  height: 120px;
  color: #222222;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 30px;
  text-align: center;
  font-family: Calibre Regular;
  position: relative;
  top: -59px;
  p {
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
    text-align: center;
    top: -35px;
    height: 192px;
    margin: 0 16px;
    margin-bottom: 22px;

    p {
      width: 100%;
      margin-bottom: 23px;
      word-spacing: 1.2px;
    }
  }
  @media (min-width: 500px) and (max-width: 600px) {
    height: auto;
  }
  @media (max-width: 360px) {
    margin: 10px 16px 0px;
    margin-bottom: 40px;
  }
  @media (min-width: 600px) {
    padding: 0px 32px 0px;
    height: 180px;
  }
  @media (min-width: 600px) and (max-width: 666px) {
    margin-bottom: 50px;
  }
  @media (min-width: 667px) and (max-width: 768px) {
    margin-bottom: 0;
  }
  @media (min-width: 1024px) {
    padding: 0px 0px;
  }
`

const Platforms = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  position: relative;
  max-width: 1240px;
  height: 299px;
  @media (min-width: 600px) {
    max-width: 580px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    max-width: 900px;
  }
  @media (min-width: 992px) {
    padding-left: 40px;
    max-width: 1240px;
  }
  @media (min-width: 1366px) {
    padding-left: 0px;
  }
  @media (min-width: 1600px) {
    margin-top: -28px;
  }
`
const Platform = styled.div`
  box-sizing: border-box;
  height: 100%;
  max-width: 306px;
  position: relative;
  display: flex;
  @media (max-width: 600px) {
    height: 274px;
    width: 216px;
    margin-right: ${props =>
      props.vitri === props.length - 1 ? "0px" : "64px"};
    right: ${props => (props.vitri === props.length - 1 ? "-20px" : "0px")};
  }
  @media (min-width: 600px) {
    margin-right: 16px;
  }
`
const Inner = styled.div`
  width: 100%;
`

const PlatformLogo = styled.img`
  height: auto;
  display: block;
  max-width: 218px;
  height: 45px;
  background: #f8f8f8;
  @media (max-width: 600px) {
    height: 48px;
    width: 170px;
  }
`

const PlatformDesc = styled.div`
  height: 112px;
  width: 306px;
  color: #222222;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: 30px;
  margin-bottom: 39px;
  p {
    margin-bottom: 0px;
    height: 112px;
    width: 306px;
    color: #222222;
    font-family: Calibre Regular;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 28px;
  }
  @media (max-width: 600px) {
    height: 144px;
    width: 216px;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
    margin-top: 16px;
    margin-bottom: 18px;
    p {
      height: 144px;
      width: 216px;
      font-size: 18px;
      letter-spacing: 0;
      line-height: 24px;
      padding-top: 4px;
    }
  }
`
const Buttons = styled.div`
  border-color: #fecf09;
  padding: 13px 0px 7px;
  text-align: center;
  border-radius: 4px;
  border: solid 2px;
  position: relative;
  box-sizing: border-box;
  width: 148px;
  border: 2px solid #fecf09;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    -webkit-transition: all 0.6s ease;
    transition: all 0.6s ease;
    background-color: #ffd700;
  }
`
const ButtonText = styled(Link)`
  font-family: Calibre Medium;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #101010;
  :hover {
    color: #101010;
    text-decoration: none;
  }
`
