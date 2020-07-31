import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const BigText = ({ input }) => {
  const heading = input.primary.title[0].text
  const clients = input.fields

  return (
    <Container>
      <Heading>{heading}</Heading>
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
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
`
const Clients = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  max-width: 1171px;
  margin-top: 100px;
  position: relative;
  @media (max-width: 769px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`

const Container = styled.div`
  margin-bottom: 125px;
`
const ClientLogo = styled.img`
  height: auto;
  filter: grayscale(1);
  opacity: 0.3;
  display: block;
  width: 100%;
  margin: 0 50px;
`
