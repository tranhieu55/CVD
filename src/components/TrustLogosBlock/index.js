import React from "react"
import styled from "styled-components"

const LogosBlock = ({ input }) => {
  // get data title
  const dataTitle = input?.primary?.title[0]?.text

  // get data list
  const dataListBlog = input?.fields

  return (
    <Container>
      <Title>Trusted by the best.</Title>
      <Body>
        <ListLogo>
          {dataListBlog.map(element => {
            console.log(element)
            return (
              <BlockLogo>
                <IMG src={element?.logo?.url} alt={element?.logo?.alt} />
              </BlockLogo>
            )
          })}
        </ListLogo>
      </Body>
    </Container>
  )
}

export default LogosBlock

const Container = styled.div`
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding-top: 48.35px;
  padding-bottom: 75px;
  @media (max-width: 600px) {
    padding-top: 35px;
    padding-bottom: 46px;
    margin-top: -41px;
  }
  @media (min-width: 600px) {
    margin-top: -81px;
  }
`
const Title = styled.h4`
  height: 32px;
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 32px;
  text-align: center;
  margin-bottom: 28.8px;

  @media (max-width: 600px) {
    margin-bottom: 24.43px;
  }
`
const Body = styled.div`
  display: flex;
  justify-content: center;
`
const ListLogo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 88px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`

const BlockLogo = styled.div`
  height: 60.86px;
  width: 227px;
`

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
