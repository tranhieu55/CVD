import React from "react"
import styled from "styled-components"
import { RichText } from "prismic-reactjs"
import Layout from "../../Layout"

const Directions = ({ input }) => {

  const data = input.primary
  const title = data.office_title[0].text
  const address = data.address
  const phoneDisplay = data.office_phone_number[0].text
  const phoneCallable = `tel:${phoneDisplay.replace(/[^0-9]/gi, "")}`
  const directions = data.directions_link.url
  const mapEmbed = data.google_maps_link.url

  return (
    <Layout>
      <Container>
        <Col6>
          <Title>{title}</Title>
          <Content>{RichText.render(address)}</Content>
          <Content>{phoneDisplay}</Content>
          <LinkContainer>
            <Link>Call</Link>
            <Link>Directions</Link>
          </LinkContainer>
        </Col6>
        <Col6>
          <Map></Map>
        </Col6>
      </Container>
    </Layout>
  )
}

export default Directions

const Container = styled.div`
  display: flex;
`
const Col6 = styled.div`
  max-width: 50%;
`

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 26px;
  margin: 0;
`

const Content = styled.div`
  color: #222222;
  font-family: "Calibre Regular";

  font-size: 20px;
  letter-spacing: 0;
  line-height: 24px;
`

const LinkContainer = styled.div`
  display: flex;
`
const Link = styled.div`
  opacity: 0.9;
  font-family: "Calibre Regular";
  color: #555555;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 24px;
  margin-right: 1rem;
  text-decoration: underline;
`

const Map = styled.iframe``
