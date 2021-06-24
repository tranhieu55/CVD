import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import CardProject from "../CardProject"
import { OurWorkStateContext } from "../../context/ourwork/OurWorkContextProvider"

OurWorkProjects.propTypes = {
  input: PropTypes.object,
}

function OurWorkProjects(props) {
  const { input } = props

  const [listProjects, setListProject] = useState(input.fields)
  const state = useContext(OurWorkStateContext)
  const { listSelected } = state
  const [toggle, setToggle] = useState(false)
  let test = listSelected?.includes("all")
    ? listProjects
    : listProjects.filter(x => {
        return listSelected?.includes(
          x.project_item?.relationship_to_project_category?._meta?.uid
            ? x.project_item?.relationship_to_project_category?._meta?.uid
            : x
        )
      })
  const handelClickLoadMore = () => {
    setToggle(!toggle)
  }
  return (
    <ListBlogStyle>
      <Rows className="row">
        {test ? (
          test
            ?.slice(0, toggle ? test?.length : 4)
            .map((project, index) => (
              <CardProject key={index} input={project} />
            ))
        ) : (
          <></>
        )}
      </Rows>
      <MyBtn className={test.length < 4 ? "none" : ""}>
        <ButtonCustom
          wt="178"
          ht="48"
          fz="16"
          lineh="48"
          className="btn-studies"
          id="loadMore"
          onClick={handelClickLoadMore}
        >
          {toggle === false ? "Load more project" : "Load less project"}
        </ButtonCustom>
      </MyBtn>
    </ListBlogStyle>
  )
}

export default OurWorkProjects

const ListBlogStyle = styled.div`
  margin-top: 2px;
  margin-left: 32px;
  margin-right: 32px;

  .col-md-6 {
    margin-top: 30px;
    /* height: 500px; */
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
    color: white;
  }
  @media (max-width: 600px) {
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
  }
  .row {
    margin-right: 0px;
    margin-left: 0px;
  }
  .none {
    display: none;
  }
`
const Rows = styled.div``
const MyBtn = styled.div`
  margin: 34px auto 38px;
  width: 176px;
  @media (max-width: 600px) {
    margin: 6px 0px 24px;
    height: 48px;
    width: 100%;
  }
`
const ButtonCustom = styled.button`
  font-family: "Calibre Medium";
  border: 2px solid #fecf09;
  border-radius: 3px;
  background-color: ${({ bgColor }) =>
    bgColor === null ? "transparent" : bgColor};
  color: ${({ textColor }) => textColor};
  font-weight: ${({ fw }) => `${fw}`};
  outline: none;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  width: ${({ wt }) => `${wt}px`};
  width: ${({ w }) => `${w}%`};
  height: ${({ ht }) => `${ht}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin: ${({ margin }) => `${margin}`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  padding-left: ${({ pdl }) => `${pdl}px`};
  padding-right: ${({ pdr }) => `${pdr}px`};
  height: ${({ cc }) => `${cc}px`};
  font-size: ${({ fz }) => `${fz}px`};
  line-height: ${({ lineh }) => `${lineh}px`};
  padding: ${({ pd1 }) => `${pd1}px`} ${({ pd2 }) => `${pd2}px`};
  position: relative;
  overflow: hidden;
  white-space: ${({ wspace }) => `${wspace}`};
  font-weight: 500;
  color: #101010;
  :hover {
    transition: all 0.6s ease;
    background-color: #ffd700;
    color: #000;
  }
  :focus {
    border: 2px solid #ffd700;
    outline: none;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`
