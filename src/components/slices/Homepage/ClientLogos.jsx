import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const BigText = ({ input }) => {
  const heading = input.primary.title[0].text
  const clients = input.fields;
  const Limit = clients.length/2 ; 
  console.log(clients)
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Socke ></Socke>
      <Oval></Oval>
      <Clientss>
        <ClientsLeft>
          {clients.slice(0,Limit).map((client, i) => {
            const logo = client.logo.url
            return <ClientLogo src={logo} key={i} Margin={i} />
          })}
        </ClientsLeft>
        <ClientsRight>
          {clients.slice(clients.length/2 ,clients.length ).map((client, i) => {
            const logo = client.logo.url
            return <ClientLogo src={logo} key={i} Margin={i} />
          })}
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
  @media ( max-width: 600px){
    width: 327px;
    height: 164px;
    margin-top: 52px;
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
  @media (max-width: 769px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  @media ( max-width: 600px){
    display: block ;
    height: 164px;
    width: 113.5px;
    margin-left: 50px;
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
  @media (max-width: 769px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  @media ( max-width: 600px){
    display: block ;
    height: 164px;
    height: 164px;
    width: 113.5px;
    margin-right: 50px;
  }
`

const Container = styled.div`
  margin-bottom: 125px;
  height: 308px;
  max-width: 1137px;
  margin : 0 auto;
  position: relative;
`
const ClientLogo = styled.img`
  height: auto;
  filter: grayscale(1);
  opacity: 0.3;
  display: block;
  @media(max-width: 600px){
    height: 36px;
    margin-bottom: 30px;
    width: 100%;
  }
`
const Socke = styled.div`
  height: 264px;
    width: 2px;
    background: #FECF09;
    left: 50%;
    position: absolute;
    margin-top: 24px;
`
const Oval = styled.div`
  height: 12px;
  width: 12px;
  background-color: #FECF09;
  left: 49.6%;
  position: absolute;
  border-radius: 100%;
  margin-top: 288px;
  @media(max-width: 600px){
    left : 48.8%;
  }
`
