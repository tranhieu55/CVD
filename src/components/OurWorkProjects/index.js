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
  const { listSelected } = state

  console.log("list-selected : ", listSelected)

  console.log("listProject", listProjects)

  const test = listSelected.includes("all")
    ? listProjects
    : listProjects.filter(x => {
        return listSelected.includes(
          x.project_item?.relationship_to_project_category._meta.uid
        )
      })

  console.log('test " ', test)

  return (
    <ListBlogStyle>
      <Rows className="row">
        {test.map((project, index) => (
          <CardProject key={index} input={project} />
        ))}
      </Rows>
    </ListBlogStyle>
  )
}

export default OurWorkProjects

const ListBlogStyle = styled.div`
  margin-top: 10px;
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
    background-color: gold;
    color: white;
  }
`
const Rows = styled.div``
