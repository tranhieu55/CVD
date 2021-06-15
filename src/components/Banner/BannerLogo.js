import React from "react"
import styled from "styled-components"

const BannerLogo = ({ input, location }) => {
  const data = input ? input : []

  // declare new array
  const newDatatop =
    data && data?.fields.length >= 2 ? data.fields.slice(0, 2) : []

  return (
    <>
      <Container bottom={location && location === "/banner" ? true : false}>
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
                  <ViewMore href="#">
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
      <ContainerDesktop
        bottom={location && location === "/banner" ? true : false}
      >
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
                  <ViewMore href="#">
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
  height: 354px;
  padding-top: 244px;
  padding-bottom: 40px;
  background-color: #f8f8f8;

  @media (max-width: 1240px) {
    margin-bottom: ${({ bottom }) => (bottom ? "108px" : 0)};
  }
  @media (max-width: 600px) {
    height: 202px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 72px;
    padding-bottom: 15px;
    margin-bottom: ${({ bottom }) => (bottom ? "81px" : 0)};
  }

  @media (min-width: 601px) {
    padding-left: 68px;
    padding-right: 68px;
  }
  @media (min-width: 768px) {
    padding-left: 77px;
    padding-right: 77px;
  }

  @media (min-width: 1024px) {
    padding-left: 77px;
    padding-right: 77px;
  }

  @media (min-width: 1200px) {
    padding-left: 160px;
    padding-right: 160px;
  }
  @media (min-width: 1366px) {
    padding-left: 180px;
    padding-right: 180px;
  }
`
const FlexContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 70px;
  @media (max-width: 600px) {
    display: block;
    height: auto;
  }
`
const LogoFirst = styled.div`
  height: 70px;
  @media (max-width: 600px) {
    margin-bottom: 20px;
    height: 42px;
  }
`
const LogoLast = styled.div`
  height: 53px;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;
  @media (max-width: 600px) {
    grid-template-columns: 50px auto;
  }
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
const ViewMore = styled.a`
  color: #222222 !important;
  font-family: Calibre Regular;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  margin: 0;
  position: relative;
  display: block;
  text-decoration: none !important;
  cursor: pointer;

  :hover,
  :focus,
  :visited,
  :actived {
    text-decoration: none !important;
    color: #222222 !important;
  }

  ::after {
    font-family: "Font Awesome 5 Pro Regular";
    position: absolute;
    content: "\f054";
    color: #101010;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 13px;
    top: 3px;
    padding-left: 5px;
  }
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

  margin-bottom: ${({ bottom }) => (bottom ? "108px" : 0)};

  @media (max-width: 1240px) {
    display: none;
  }
`
const LogoDesktop = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 54px;
`
