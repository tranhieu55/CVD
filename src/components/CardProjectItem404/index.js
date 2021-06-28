import React from "react"
import styled from "styled-components"
import IMG from "../Image"
import { Link } from "gatsby"

function CardProjectItem404(props) {
  const { input, resize } = props
  return (
    <Wrapper>
      <ListCaseStudy>
        <Row>
          {input?.fields?.map((item, key) => {
            return (
              <Colum className="col-md-6" key={key}>
                {item ? (
                  <DivIMG
                    as={Link}
                    to={`/projects/${item?.link_case_study?.relationship_to_project_category?._meta?.uid}/${item?.link_case_study?._meta?.uid}`}
                  >
                    <IMG
                      alt={
                        item?.link_case_study?.project_header_image?.alt
                          ? item?.link_case_study?.project_header_image?.alt
                          : ""
                      }
                      src={
                        item?.link_case_study?.project_header_image?.url
                          ? item?.link_case_study?.project_header_image?.url
                          : ""
                      }
                      objectFit="cover"
                      h={resize ? "433" : "500"}
                    />
                  </DivIMG>
                ) : (
                  <></>
                )}
                {item ? (
                  <TitleImageBlog>
                    <Span>
                      {item?.link_case_study?.name_category_of_project
                        ? item?.link_case_study?.name_category_of_project
                        : ""}
                    </Span>
                    <H3>
                      {item?.link_case_study?.project_name[0]?.text
                        ? item?.link_case_study?.project_name[0]?.text
                        : ""}
                    </H3>
                  </TitleImageBlog>
                ) : (
                  <></>
                )}
              </Colum>
            )
          })}
        </Row>
      </ListCaseStudy>
    </Wrapper>
  )
}

export default CardProjectItem404

const Wrapper = styled.div``
const ListCaseStudy = styled.div`
  height: auto;
  margin: 0 180px;
  padding-bottom: 130px;

  @media (min-width: 1367px) {
    padding-bottom: 250px;
    margin-bottom: -120px;
  }
  @media (max-width: 1366px) {
    margin: 0 100px;
    padding-bottom: 250px;
    margin-bottom: -120px;
  }
  @media (max-width: 1200px) {
    margin: 0 40px;
    padding-bottom: 200px;
    margin-bottom: -120px;
  }
  @media (max-width: 768px) {
    margin: 0 20px;
    padding-bottom: 160px;
    margin-bottom: -100px;
  }
  @media (max-width: 600px) {
    margin: 0 16px;
    padding-bottom: 98px;
    height: auto;
    margin-bottom: -50px;
  }
  @media (min-width: 1600px) {
    display: flex;
    justify-content: center;
  }
`
const Row = styled.div`
  display: flex;
  height: 100%;

  img {
    width: 100%;
    object-fit: cover;
    position: relative;
  }
  @media (max-width: 600px) {
    display: block;
    margin-top: 16px;
  }
  @media (min-width: 600px) {
    display: flex;
    margin-top: 16px;
  }
  @media (min-width: 1600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    margin-top: 0;

    .col-md-6 {
      width: 604px;
      max-width: 100%;
      height: 433px;
      padding-left: 0;
      padding-right: 0;
    }
  }
`
const DivIMG = styled.div`
  overflow: hidden;
  transition: all 200ms ease-in;
  position: relative;
  display: inline-block;
  width: 100%;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    background-color: #fecf09;
    height: 6px;
    transition: all 0.4s ease-in;
  }
  :hover {
    ::after {
      width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    img {
      height: 245px;
    }
    ::after {
      height: 4px;
    }
  }
  @media (min-width: 1600px) {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
const Colum = styled.div`
  @media (min-width: 600px) {
    height: ${({ resize }) => (resize ? " 433px" : "")};
  }
  @media (min-width: 600px) and (max-width: 768px) {
    margin-bottom: 8px;
  }
  @media only screen and (max-width: 600px) {
    padding: 0px;
    margin-top: 0px !important;
    margin-bottom: -3px;
  }
`

const TitleImageBlog = styled.div`
  position: absolute;
  left: 63px;
  bottom: 30px;
  z-index: 2;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    left: 24px;
    bottom: 21px;
  }

  @media only screen and (min-width: 600px) {
    bottom: 24px;
    left: 34px;
  }
  @media only screen and (min-width: 690px) {
    bottom: 40px;
    left: 60px;
  }
  @media only screen and (min-width: 768px) {
    bottom: 40px;
    left: 40px;
  }
  @media only screen and (min-width: 992px) {
    bottom: 50px;
    left: 40px;
  }
  @media only screen and (min-width: 1200px) {
    bottom: 3rem;
    left: 40px;
  }
  }
  @media only screen and (min-width: 1366px) {
    bottom: 31px;
    left: 38px;
  }
`
const Span = styled.span`
  color: #fecf09;
  font-size: 16px;
  line-height: 16px;
  font-family: "Calibre Semibold";
  display: block;
  padding: 0;
  margin: 0;
  margin-bottom: 12px;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 0px;
  }
`
const H3 = styled.h3`
  color: #ffffff;
  font-size: ${({ resize }) => (resize ? "40px" : "48px")};
  font-family: "Calibre";
  font-weight: bold;
  margin: 0;
  padding: 0;
  line-height: 32px;
  margin-top: 10px;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin-top: 0px;
  }
`
