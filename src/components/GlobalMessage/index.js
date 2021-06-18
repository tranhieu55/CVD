import { useStaticQuery } from "gatsby"
import React from "react"
import { useState } from "react"
import styled from "styled-components"

export default function GlobalMessage({ parentCallback }) {
  const data = useStaticQuery(graphql`
    query GlobalQuery {
      prismic {
        allHeaders {
          edges {
            node {
              body {
                ... on PRISMIC_HeaderBodyGlobal_messing_bar {
                  type
                  label
                  primary {
                    check_show
                    link_title
                    message
                    mobile_message
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const dataGlobal = data.prismic?.allHeaders?.edges[0]
    ? data.prismic?.allHeaders?.edges[0]?.node?.body?.filter(x =>
        x.primary ? x.primary : x
      )
    : []
  const texts = dataGlobal
    ? dataGlobal?.map(item => (item.primary ? item.primary : ""))
    : []

  // condition show global message
  const dataBody = data.prismic?.allHeaders?.edges.map(
    element => element?.node?.body
  )
  const dataFilter =
    dataBody && dataBody?.length > 0
      ? dataBody[0].filter(
          elementFilter =>
            elementFilter?.type && elementFilter.type === "global_messing_bar"
        )
      : []
  const isDisplay =
    dataFilter && dataFilter?.length > 0
      ? dataFilter[0]?.primary?.check_show
      : false

  const [show, setShow] = useState(true)
  function showGlobal() {
    setShow(!show)
    parentCallback(show)
  }
  return (
    <>
      {isDisplay ? (
        <Container open={show}>
          {texts ? (
            <Content>
              <Desktop>
                <Text lh={24}>
                  {texts[0]?.message?.map(item =>
                    item?.text ? item?.text : ""
                  )}
                  .{" "}
                </Text>
                <LI lh={24}>
                  {texts[0]?.link_title?.map(item =>
                    item?.text ? item?.text : ""
                  )}
                </LI>
              </Desktop>
              <Mobile>
                <TextMobile lh={20}>
                  {texts[0]?.mobile_message?.map(item => item?.text)}.{" "}
                  <LI lh={24}>
                    {texts[0]?.link_title?.map(item =>
                      item?.text ? item?.text : ""
                    )}
                  </LI>
                </TextMobile>
              </Mobile>
            </Content>
          ) : (
            <></>
          )}
          <Close onClick={() => showGlobal()}></Close>
        </Container>
      ) : (
        ""
      )}
    </>
  )
}

const Container = styled.div`
  @media (max-width: 600px) {
    height: 64px;
    z-index: 9999;
    width: 100%;
    background-color: #2a304f;
    display: ${props => (props.open === true ? "flex" : "none")};
  }
  @media (min-width: 600px) {
    width: 100%;
    height: 48px;
    background-color: #2a304f;
    display: ${props => (props.open === true ? "flex" : "none")};
  }
`
const Desktop = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
  @media (min-width: 992px) {
    display: flex;
  }
`
const Mobile = styled.div`
  @media (max-width: 992px) {
    display: block;
  }
  @media (min-width: 992px) {
    display: none;
  }
`
const TextMobile = styled.span`
  color: #ffffff;
  font-family: "Calibre Medium";
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: ${({ lh }) => `${lh}px`};
  margin-bottom: 0px;
  margin-right: 28.5px;
  margin-top: 3px;
  @media (max-width: 992px) {
    display: block;
  }
  @media (min-width: 992px) {
    display: none;
  }
`

const Text = styled.span`
  color: #ffffff;
  font-family: "Calibre Medium";
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: ${({ lh }) => `${lh}px`};
  margin-bottom: 0px;
  margin-right: 4px;
  margin-top: 3px;
  @media (max-width: 600px) {
    line-height: 20px;
  }
  @media (max-width: 992px) {
    display: none;
  }
  @media (min-width: 992px) {
    display: block;
  }
`
const LI = styled.span`
  color: #ffffff;
  font-family: Calibre Medium;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: ${({ lh }) => `${lh}px`};
  margin-bottom: 0px;
  list-style: none;
  border-bottom: 1px solid #ffffff;
  height: 18px;
  cursor: pointer;
  margin-top: 3px;
`
const Content = styled.div`
  display: flex;
  margin: auto;
  @media (max-width: 600px) {
    margin: auto 14.5px;
    width: 100%;
  }
  @media (max-width: 374px) {
    flex-direction: column;
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 10px;
  }
`
const Close = styled.div`
  cursor: pointer;
  @media (max-width: 600px) {
    &::after {
      content: "\f00d";
      font-family: "Font Awesome 5 Pro Regular";
      height: 13.33px;
      width: 12.44px;
      color: #ffffff;
      position: absolute;
      top: 17px;
      right: 16.5px;
      cursor: pointer;
    }
  }
  @media (min-width: 600px) {
    &::after {
      content: "\f00d";
      font-family: "Font Awesome 5 Pro Regular";
      height: 13.33px;
      width: 12.44px;
      color: #ffffff;
      position: absolute;
      top: 12px;
      right: 25px;
    }
  }
`
