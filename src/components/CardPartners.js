import { Link } from "gatsby"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import { OurWorkStateContext } from "../context/ourwork/OurWorkContextProvider"
import IMG from "./Image"
import CardPartnerDetails from "./CardPartners/CardPartnerDetails"

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
  @media (min-width: 600px) {
    .box-list-logo {
      margin-top: 32px;
      margin-bottom: 40px;
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
      margin-bottom: 25px;
    }
  }
`
const DivIMG = styled.div`
  overflow: hidden;

  @media (min-width: 1200px) {
    width: 246px;
    height: 164px;

    :hover {
      box-shadow: 8px 8px 30px 0 rgb(0 0 0 / 7%);

      .learn-more {
        display: inline-block;
      }
    }
  }
`

const LearnMore = styled.div`
  text-align: center;
  margin-top: 8px;
  cursor: pointer;

  a {
    :hover,
    :active,
    :focus,
    :visited {
      text-decoration: none;
    }
  }

  a {
    display: none;
    color: #101010;
    font-family: Calibre Medium;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 20px;

    :after {
      content: "\f178";
      font-family: "Font Awesome 5 Pro Regular";
      color: #101010;
      font-size: 20px;
      letter-spacing: 0;
      line-height: 21px;
      text-align: center;
      padding-left: 9px;
    }
  }
`
export default function CardPartners(props) {
  // declare state for PartnerDetails
  const [uidDetail, setUidDetail] = useState(-1)

  const data = props && props.input?.fields ? props.input?.fields : []
  const state = useContext(OurWorkStateContext)
  const { listSelected } = state

  const listPartners = listSelected.includes("all")
    ? data
    : data.filter(x => {
        return listSelected.includes(
          x.partner_category?._meta?.uid ? x.partner_category?._meta?.uid : ""
        )
      })

  // handle show partner details
  const CloseParnerDetail = () => {
    setUidDetail(-1)
  }

  return (
    <>
      <CardPartnerDetails
        setShowDetails={CloseParnerDetail}
        data={uidDetail * 1 !== -1 ? listPartners[uidDetail] : null}
      />
      <Wrapper className="container">
        <div className="row box-list-logo">
          {listPartners ? (
            listPartners?.map((node, index) => (
              <div className="col-6 col-md-3" key={index}>
                <DivIMG>
                  <IMG
                    onClick={() => setUidDetail(index)}
                    className="item-image"
                    src={node.partner_logo?.url ? node.partner_logo?.url : ""}
                    alt={node.partner_logo?.alt ? node.partner_logo?.alt : ""}
                  />
                  <LearnMore>
                    <Link
                      className="learn-more"
                      to={node.partner_url?.url ? node.partner_url?.url : ""}
                      target={
                        node.partner_url?.target ? node.partner_url?.target : ""
                      }
                    >
                      Learn more
                    </Link>
                  </LearnMore>
                </DivIMG>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </Wrapper>
    </>
  )
}
