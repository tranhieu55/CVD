import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const BigText = ({ input }) => {
  const heading = input.primary.title[0].text
  const clients = input.fields

  return (
    <Container>
      <Heading>{heading}</Heading>
      <Socke ></Socke>
      <Oval></Oval>
      <Clients>
        {clients.map((client, i) => {
          const logo = client.logo.url
          return <ClientLogo src={logo} key={i} />
        })}
      </Clients>
    </Container>
  )
}

export default BigText

BigText.propTypes = {
  input: PropTypes.object.isRequired,
}

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
const Clients = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  max-width: 100%;
  height: 38px;
  margin-top: 100px;
  position: relative;
  @media (max-width: 769px) {
    flex-wrap: wrap;
    justify-content: flex-start;
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
  margin: 0 50px;
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
`
