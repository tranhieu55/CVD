import { Link } from "gatsby"
import React, { useContext } from "react"
import styled from "styled-components"
import { OurWorkStateContext } from "../context/ourwork/OurWorkContextProvider"
import IMG from "./Image"

const Wrapper = styled.div`
  @media (max-width: 374px) {
    .item-image {
      width: 100% !important;
      height: 100% !important;
    }
  }
  @media (max-width: 600px) {
    .item-image {
      width: 160px;
      height: 80px;
      margin: auto;
    }
    .box-list-logo {
      margin-top: 16px;
      margin-bottom: 32px;
    }
    .col-6 {
      padding-right: 16px;
      padding-left: 16px;
    }
  }
  @media (min-width: 1200px) {
    .item-image {
      width: 244px;
      height: 122px;
      margin: auto;
    }
    .box-list-logo {
      margin-top: 64px;
      margin-bottom: 72px;
    }
    .col-md-3 {
      margin-bottom: 40px;
    }
  }
`
const DivIMG = styled.div`
  overflow: hidden;
  img:hover {
    opacity: 0.5;
  }
`
export default function CardPartners(props) {
  const data = props.input.fields
  const state = useContext(OurWorkStateContext)
  const { listSelected } = state

  const listPartners = listSelected.includes("all")
    ? data
    : data.filter(x => {
        return listSelected.includes(x.partner_category?._meta.uid)
      })
  return (
    <Wrapper className="container">
      <div className="row box-list-logo">
        {listPartners.map((node, index) => (
          <div className="col-6 col-md-3">
            <DivIMG
              as={Link}
              to={node.partner_url.url}
              target={node.partner_url.target}
            >
              <IMG
                className="item-image"
                src={node.partner_logo.url}
                alt={node.partner_logo.alt}
              />
            </DivIMG>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}
