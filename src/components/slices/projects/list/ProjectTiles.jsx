import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ProjectTiles = ({ input }) => {
  // const [limit, setLimit] = useState(4)
  // const [orinal, setOrinal] = useState(0)
  const [toggle, setToggle] = useState(false)

  // function setMap() {
  //   if (input && limit > input.fields?.length ? input.fields?.length : 0) {
  //     setLimit(4)
  //     setOrinal(0)
  //   } else {
  //     setOrinal(orinal + 4)
  //     setLimit(limit + 4)
  //   }
  // }
  const handelClickLoadMore = () => {
    setToggle(!toggle)
  }
  return (
    <ListBlogStyle>
      <SubTitle>OUR WORK</SubTitle>
      <Title>Case Studies</Title>
      <Rows className="row">
        {input.fields
          ?.slice(0, toggle ? input?.length : 4)
          ?.map((edge, index) => (
            <Colum
              className={`${input.length === 3 ? "col-md-4" : "col-md-6"}`}
              key={index}
            >
              <DivIMG
                as={Link}
                to={`/projects/${edge.project_item.relationship_to_project_category._meta.uid}/${edge.project_item._meta.uid}`}
              >
                <Img
                  alt={edge.project_item.project_header_image.alt}
                  src={edge.project_item.project_header_image.url}
                />
                <Phur></Phur>
              </DivIMG>
              <TitleImageBlog>
                <Span>{edge.project_item.name_category_of_project}</Span>
                <H3>{edge.project_item.project_name.map(item => item.text)}</H3>
              </TitleImageBlog>
            </Colum>
          ))}
      </Rows>
      <MyBtn>
        <ButtonCustom
          wt="212"
          ht="48"
          lineh="48"
          className="btn-studies"
          id="loadMore"
          onClick={handelClickLoadMore}
        >
          {toggle === false ? "View Case Studies" : "View Case Studies"}
        </ButtonCustom>
      </MyBtn>
    </ListBlogStyle>
  )
}

export default ProjectTiles

const ListBlogStyle = styled.div`
  margin-top: 48px;
  margin-left: 32px;
  margin-right: 32px;
  .col-md-6 {
    margin-bottom: 22px;
    padding: 0 16px;
  }
  .img {
    width: 100%;
    object-fit: cover;
    position: relative;
  }
  .btn-studies {
    background-color: transparent;
    color: #101010;
  }
  .btn-studies:hover {
    background-color: #fecf09;
    color: #101010;
  }
  @media (max-width: 600px) {
    height: auto;
    margin: 48px 16px 0px;
  }
`
const SubTitle = styled.span`
  margin-top: 28px;
  color: #999999;
  font-family: Calibre Semibold;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  position: relative;
  margin-left: 80px;
  height: 16px;
  &::after {
    position: absolute;
    right: calc(100% + 16px);
    top: 31%;
    display: block;
    content: "";
    width: 64px;
    height: 2px;
    background: rgb(254, 207, 9);
  }
  @media (max-width: 600px) {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 14px;
    margin-left: 48px;
    &::after {
      width: 32px;
    }
  }
`
const Title = styled.p`
  color: #101010;
  font-family: Calibre Bold;
  font-size: 64px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 56px;
  margin-bottom: -15px;
  margin-top: 12px;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    margin-bottom: 10px;
  }
  @media (max-width: 600px) {
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.5px;
    line-height: 32px;
    margin-bottom: -10px;
    margin-top: 6px;
  }
`
const DivIMG = styled.div`
  overflow: hidden;
  transition: all 200ms ease-in;
  position: relative;
  display: inline-block;
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
    img {
      transition: all 0.4s ease-in;
      transform: scale(1.05);
    }
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`
const Phur = styled.div`
  position: absolute;
  opacity: 0.3;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  height: 50%;
  width: 100%;
  bottom: 0;
`
const Rows = styled.div`
  @media (max-width: 600px) {
    margin-top: 11px;
  }
`
const Colum = styled.div`
  a {
    width: 100%;
  }
  @media (max-width: 600px) {
    height: 245px;
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 8px !important;
  }
`
const TitleImageBlog = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 5rem;
  left: 6rem;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    bottom: 18px;
    left: 39px;
  }
  @media (max-width: 347px) {
    bottom: 15px;
    left: 35px;
  }
  @media only screen and (min-width: 600px) {
    bottom: 48px;
    left: 63px;
  }
`
const Span = styled.span`
  font-weight: bold;
  color: #fecf09;
  font-family: "Calibre Semibold";
  font-weight: 600;
  font-size: 18px;
  @media (max-width: 600px) {
    color: #fecf09;
    font-family: "Calibre Semibold";
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 16px;
  }
`
const H3 = styled.h3`
  color: #ffffff;
  font-family: Calibre Bold;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 32px;
  margin-bottom: 0;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 20px;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 10px;
  }
`
const MyBtn = styled.div`
  margin: 3px auto 0px;
  width: 212px;
  @media (max-width: 600px) {
    margin: 16px 0px;
    height: 48px;
    width: 100%;
  }
`
const ButtonCustom = styled.button`
  font-family: "Calibre Semibold";
  border: 2px solid #fecf09;
  border-radius: 3px;
  background-color: ${({ bgColor }) =>
    bgColor === null ? "transparent" : bgColor};
  color: ${({ textColor }) => textColor};
  outline: none;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  width: ${({ wt }) => `${wt}px`};
  height: ${({ ht }) => `${ht}px`};
  font-size: 18px;
  line-height: ${({ lineh }) => `${lineh}px`};
  position: relative;
  overflow: hidden;
  font-weight: 500;
  color: #101010;
  :hover {
    transition: all 0.6s ease;
    background-color: #ffd700;
    color: #101010;
  }
  :focus {
    outline: none;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
`
const Img = styled.img`
  display: block;
  height: 500px;
  width: 100%;
  object-fit: cover;
  transition: all 0.4s ease-in;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 768px) {
    height: 300px;
  }
  @media (min-width: 1366px) {
    height: 500px;
  }
`
