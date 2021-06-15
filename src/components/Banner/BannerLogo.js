import { element } from "prop-types"
import React from "react"
import styled from "styled-components"

const BannerLogo = ({ input }) => {
  const data = input ? input : []

  // declare new array
  const newDatatop =
    data && data?.fields.length >= 2 ? data.fields.slice(0, 2) : []

  return (
    <>
      <Container>
        <FlexContent>
          {newDatatop.map(element =>
            element?.sub_title ? (
              <LogoLast>
                <LogoLastImg>
                  <IMG
                    src={element?.image_banner?.url}
                    alt={element?.image_banner?.alt}
                  />
                </LogoLastImg>
                <LogoLastContent>
                  <TitleName>
                    {element?.title.map(item => (item ? item?.text : ""))}
                  </TitleName>
                  <ViewMore>
                    {element?.sub_title.map(item => (item ? item?.text : ""))}
                  </ViewMore>
                </LogoLastContent>
              </LogoLast>
            ) : (
              <LogoFirst>
                <IMG
                  src={element?.image_banner?.url}
                  alt={element?.image_banner?.alt}
                />
              </LogoFirst>
            )
          )}
        </FlexContent>
      </Container>
      <ContainerDesktop>
        <LogoDesktop>
          {data?.fields?.map((element, index) =>
            index >= 2 && element?.sub_title ? (
              <LogoLast>
                <LogoLastImg>
                  <IMG
                    src={element?.image_banner?.url}
                    alt={element?.image_banner?.alt}
                  />
                </LogoLastImg>
                <LogoLastContent>
                  <TitleName>
                    {element?.title.map(item => (item ? item?.text : ""))}
                  </TitleName>
                  <ViewMore>
                    {element?.sub_title.map(item => (item ? item?.text : ""))}
                  </ViewMore>
                </LogoLastContent>
              </LogoLast>
            ) : (
              ""
            )
          )}
        </LogoDesktop>
      </ContainerDesktop>
    </>
  )
}

export default BannerLogo

const Container = styled.div`
  padding: 244px 180px 40px 180px;
  background-color: #f8f8f8;
`
const FlexContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 70px;
`
const LogoFirst = styled.div`
  height: 70px;
`
const LogoLast = styled.div`
  height: 53px;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;
`
const LogoLastImg = styled.div`
  height: 53px;
  max-width: 70px;
  overflow: hidden;
`
const LogoLastContent = styled.div`
  margin-top: 6px;
`
const TitleName = styled.p`
  color: #101010;
  font-family: Calibre Medium;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 20px;
  padding: 0;
  margin: 0;
`
const ViewMore = styled.p`
  color: #222222;
  font-family: Calibre Regular;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  margin: 0;
`
const IMG = styled.img`
  height: 100%;
  object-fit: contain;
`
const ContainerDesktop = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 180px;
  padding-top: 30px;
  margin-bottom: 40px;
`
const LogoDesktop = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 54px;
`
