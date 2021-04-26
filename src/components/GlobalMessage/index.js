import { useStaticQuery } from "gatsby"
import React, { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"

export default function GlobalMessage() {
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
                    link_title
                    message
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const dataGlobal = data.prismic.allHeaders.edges[0].node.body.filter(
    x => x.primary
  )
  const texts = dataGlobal.map(item => item.primary)

  const [show, setShow] = useState(true)
  const [active, setActive] = useState(true)
  console.log({ active })
  const handleScroll = () => {
    const _show = window.scrollY
    if (_show > 0) {
      setShow(false)
    } else {
      if (active === true) {
        setShow(true)
        console.log("chua click an di ")
      } else {
        console.log(" click an roi ")
        setShow(false)
      }
    }
  }

  useEffect(() => {
    !!window && window.addEventListener("scroll", handleScroll)
    // window.addEventListener("click", () => handleOutsideClick());
    return () => {
      !!window && window.removeEventListener("scroll", handleScroll)
      // window.removeEventListener("click", () => handleOutsideClick());
    }
  }, [])
  console.log({ show, active })
  return (
    <Container open={show} active={active}>
      <Content>
        <Text lh={24}>{texts[0].message.map(item => item.text)}.</Text>
        <LI lh={24}>{texts[0].link_title.map(item => item.text)}</LI>
      </Content>
      <Close
        onClick={() => {
          setShow(false)
        }}
      ></Close>
    </Container>
  )
}

const Container = styled.div`
  @media (max-width: 600px) {
    height: 64px;
    position: absolute;
    z-index: 9999;
    width: 100%;
    background-color: #2a304f;
    display: ${props => (props.open === true ? "flex" : "none")};
  }
  @media (min-width: 600px) {
    display: ${props => (props.open === true ? "flex" : "none")};
  }
`
const Text = styled.span`
  color: #ffffff;
  font-family: Calibre Medium;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: ${({ lh }) => `${lh}px`};
  margin-bottom: 0px;
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
`
const Content = styled.div`
  display: flex;
  margin: auto;
  width: 299px;
`
const Close = styled.div`
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
