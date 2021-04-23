import { Link } from "gatsby"
import React, { useContext } from "react"
import styled from "styled-components"
import { OurWorkStateContext } from "../context/ourwork/OurWorkContextProvider"
import IMG from "./Image"

const Wrapper = styled.div`
  @media (max-width: 600px) {
    .box-list-logo {
      margin-top: 16px;
      margin-bottom: 32px;
    }
  }
  @media (min-width: 1200px) {
    .box-list-logo {
      margin-top: 64px;
      margin-bottom: 72px;
    }
    .col-md-3 {
      margin-bottom: 33px;
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
  console.log(data)
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
              <IMG src={node.partner_logo.url} alt={node.partner_logo.alt} />
            </DivIMG>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}
