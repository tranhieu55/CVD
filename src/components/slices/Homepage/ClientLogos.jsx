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
  @media(max-width: 320px){
    width: 274px;
  }
  @media(min-width: 600px){
    margin: 40px auto 0px;
    width : 560px;
    height: 264px;
  }
  @media(min-width: 1024px){
    margin: 80px auto 0px;
    width: 980px;
    height: 38px;
    display: flex;
  }
  @media(min-width: 1366px){
    margin: 100px auto 0px;
    width: 1137px;
    height: 38px;
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
  @media(max-width: 600px){
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
  @media ( max-width: 600px){
    display: block ;
    height: 164px;
    width: 113.5px;
    margin-left: 50px;
  }
  @media(min-width: 1024px){
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
    margin: 0px 20px 0px 0px;
  }
  @media ( max-width: 600px){
    display: block ;
    height: 164px;
    width: 113.5px;
    margin-right: 50px;
  }
  @media(min-width: 1024px){
    display: flex;
    margin: auto;
    justify-content: space-between;
    max-width: 100%;
    height: 38px;
    position: relative;
    margin-right: 30px;
  }
`

const Container = styled.div`
  margin-bottom: 125px;
  height: 308px;
  max-width: 1137px;
  margin : 0 auto;
  position: relative;
  @media(min-width: 600px){
    height: 408px;
  }
  @media(max-width: 1024px){
    height: 308px;
  }
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
  @media(min-width: 600px){
    height: 40px;
    margin-bottom: 30px;
    width: 100%;
  }
  @media(min-width: 1024px){
   width: 25%;
  }
`
const Socke = styled.div`
    height: 264px;
    width: 2px;
    background: #FECF09;
    left: 50%;
    position: absolute;
    margin-top: 24px;
    @media(min-width: 600px){
      height: 320px;
    }
    @media(min-width: 1024px){
      height: 264px;
    }
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
  @media(min-width: 600px){
    margin-top: 342px;
    left:   49.4%;
  }
  @media(min-width: 1024px){
    margin-top: 288px;
    left: 49.6%;
    }
`
