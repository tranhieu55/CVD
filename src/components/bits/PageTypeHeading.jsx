import React from "react"
import styled from "styled-components"
import Layout from "../Layout"

export default function PageTypeHeading(props) {
  return (
    <Layout>
      <Container>
        <Underline></Underline>
        <Text>
          <div>{props.props}</div>
        </Text>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-bottom: 6px;
  }
`

const Text = styled.div`
  font-weight: 600;
  font-family: "Calibre Semibold";
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1rem;
  text-transform: uppercase;
  color: #999;
`

const Underline = styled.div`
  height: 2px;
  width: 80px;
  background-color: #fecf09;
  margin-right: 1.5rem;
  margin-bottom: 4px;
  @media screen and (max-width: 768px) {
    width: 32px;
    margin-right: 1rem;
  }
`
