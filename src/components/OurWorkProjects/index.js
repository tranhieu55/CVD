import React, { useContext, useEffect, useState } from "react"
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
  const {listSelected} = state; 

  const [showList , setShowList] = useState(listSelected) ;
  console.log("list-listProjects : ", listProjects)

  const test = listSelected.includes("all")
    ? listProjects
    : listProjects.filter(x => {
      return listSelected.includes(
      x.project_item?.relationship_to_project_category._meta.uid
      )
      })
    console.log("list-selected : ", test)
      
  return (
    <ListBlogStyle>
      <Rows className="row">
        {test.slice(0,4).map((project, index) => (
          <CardProject key={index} input={project} />
        ))}
      </Rows>
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
    color: black;
  }
  .btn-studies:hover {
    background-color: #fecf09;
    color: white;
  }
  @media (max-width: 600px) {
    margin-top: 16px;
  }
  .row{
    margin-right: -16px;
    margin-left: -16px;
  }
`
const Rows = styled.div``
