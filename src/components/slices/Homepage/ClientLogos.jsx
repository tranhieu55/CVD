import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const BigText = ({ input }) => {
  const heading = input
    ? input.primary?.title[0]?.text
      ? input.primary?.title[0]?.text
      : ""
    : ""
  const clients = input ? (input?.fields ? input?.fields : "") : []
  const Limit = clients.length / 2
  const left = clients?.slice(0, Limit)
  const right = clients?.slice(clients.length / 2, clients.length)
  console.log({ clients })
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Socke></Socke>
      <Oval></Oval>
      <Clientss>
        <ClientsLeft>
          {clients ? (
            left?.map((client, i) => {
              const logo = client?.logo?.url ? client?.logo?.url : ""
              const logo1 = client?.logo?.fade?.url
                ? client?.logo?.fade?.url
                : ""
              const logo2 = client?.logo?.images?.url
                ? client?.logo?.images?.url
                : ""
              const width = client?.width
                ? client?.width[0].text?.split(" ")
                : []
              const height = client?.height
                ? client?.height[0]?.text?.split(" ")
                : []
              return (
                <ClientLogo key={i} Margin={i}>
                  <Images
                    id="f3"
                    width={`${Number(width?.length > 0 ? width[0] : 0)}px`}
                    height={`${Number(height?.length > 0 ? height[0] : 0)}px`}
                    src={logo}
                  ></Images>
                  <Images
                    id="f2"
                    src={logo1}
                    width={`${Number(width[1])}px`}
                    height={`${Number(height[1])}px`}
                  ></Images>
                  <Images
                    width={`${Number(width[2])}px`}
                    height={`${Number(height[2])}px`}
                    id="f1"
                    src={logo2}
                  ></Images>
                </ClientLogo>
              )
            })
          ) : (
            <></>
          )}
        </ClientsLeft>
        <ClientsRight>
          {clients ? (
            right?.map((client, i) => {
              const logo = client?.logo?.url ? client?.logo?.url : ""
              const logo1 = client?.logo?.fade?.url
                ? client?.logo?.fade?.url
                : ""
              const logo2 = client?.logo?.images?.url
                ? client?.logo?.images?.url
                : ""
              const width = client?.width[0]?.text?.split(" ")
              const height = client?.height[0]?.text?.split(" ")
              return (
                <ClientLogo key={i} Margin={i}>
                  <Images
                    id="f3"
                    width={`${Number(width[0])}px`}
                    height={`${Number(height[0])}px`}
                    src={logo}
                  ></Images>
                  <Images
                    id="f2"
                    src={logo1}
                    width={`${Number(width[1])}px`}
                    height={`${Number(height[1])}px`}
                  ></Images>
                  <Images
                    width={`${Number(width[2])}px`}
                    height={`${Number(height[2])}px`}
                    id="f1"
                    src={logo2}
                  ></Images>
                </ClientLogo>
              )
            })
          ) : (
            <></>
          )}
        </ClientsRight>
      </Clientss>
    </Container>
  )
}

export default BigText

BigText.propTypes = {
  input: PropTypes.object.isRequired,
}

const Clientss = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  height: 38px;
  margin-top: 100px;
  position: relative;
  width: 1137px;
  color: #cccccc;
  @media (max-width: 600px) {
    width: 327px;
    height: 164px;
    margin-top: 52px;
  }
  @media (max-width: 320px) {
    width: 274px;
  }
  @media (min-width: 600px) {
    margin: 40px auto 0px;
    width: 560px;
    height: 264px;
  }
  @media (min-width: 1024px) {
    margin: 80px auto 0px;
    width: 980px;
    height: 48px;
    display: flex;
  }
  @media (min-width: 1366px) {
    margin: 100px auto 0px;
    width: 1137px;
    height: 48px;
    display: flex;
    position: relative;
  }
`

const Heading = styled.h2`
  color: #fecf09;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  height: 14px;
  width: 156px;
  font-family: Calibre Bold;
  margin: 0 auto;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`
const ClientsRight = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  max-width: 100%;
  height: 38px;
  position: relative;
  width: 512.5px;
  justify-content: space-between;
  margin-left: 56px;
  @media (min-width: 600px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 227px;
    margin: 0px 0px 0px 20px;
  }
  @media (max-width: 600px) {
    display: block;
    height: 144px;
    width: 113.5px;
    margin-left: 50px;
  }
  @media (min-width: 1024px) {
    display: flex;
    margin: auto;
    justify-content: space-between;
    max-width: 100%;
    height: 38px;
    position: relative;
    margin-left: 30px;
  }
`

const ClientsLeft = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  max-width: 100%;
  height: 38px;
  position: relative;
  width: 518.5px;
  margin-right: 50px;
  justify-content: space-between;
  @media (min-width: 600px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 227px;
    margin: 0px 150px 0px 0px;
  }
  @media (max-width: 600px) {
    display: block;
    height: 144px;
    width: 113.5px;
    margin-right: 50px;
  }
  @media (min-width: 1024px) {
    display: flex;
    margin: auto;
    justify-content: space-between;
    max-width: 100%;
    height: 38px;
    position: relative;
    margin-right: 80px;
  }
  @media (min-width: 1600px) {
    margin-right: 96px;
  }
`

const Container = styled.div`
  margin-bottom: 125px;
  height: 308px;
  max-width: 1137px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 600px) {
    height: 408px;
  }
  @media (max-width: 1024px) {
    height: 340px;
  }
  @media (min-width: 1025px) {
    height: 330px;
  }
  @media (min-width: 1200px) {
    height: 325px;
  }
  @media (min-width: 1366px) {
    height: 405px;
  }

  @media (max-width: 600px) {
    height: 308px;
  }
`
const ClientLogo = styled.div`
  height: auto;
  filter: grayscale(1);
  display: block;
  position: relative;
  @media (max-width: 600px) {
    height: 30px;
    margin-bottom: 30px;
    width: 100%;
  }
  @media (min-width: 600px) {
    height: 40px;
    margin-bottom: 30px;
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
  #f1 {
    background-color: white;
  }
  #f2 {
    -webkit-animation-delay: -4s;
    background-color: white;
  }
  #f3 {
    -webkit-animation-delay: -2s;
    background-color: white;
  }
`
const Images = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0;
  -webkit-animation-name: fade;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: 6s;
  animation-name: fade;
  animation-iteration-count: infinite;
  animation-duration: 6s;
  @-webkit-keyframes fade {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    33% {
      opacity: 1;
    }
    53% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    33% {
      opacity: 1;
    }
    53% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  object-fit: contain;
`
const Socke = styled.div`
  height: 264px;
  width: 2px;
  background: #fecf09;
  left: 50%;
  position: absolute;
  margin-top: 24px;
  @media (min-width: 600px) {
    height: 320px;
  }
  @media (min-width: 1024px) {
    height: 300px;
  }
`
const Oval = styled.div`
  height: 12px;
  width: 12px;
  background-color: #fecf09;
  left: 49.6%;
  position: absolute;
  border-radius: 100%;
  margin-top: 288px;
  @media (max-width: 600px) {
    left: 48.8%;
  }
  @media (min-width: 600px) {
    margin-top: 342px;
    left: 49.4%;
  }
  @media (min-width: 1024px) {
    margin-top: 315px;
    left: 49.6%;
  }
`
