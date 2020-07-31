import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import {theme} from '../../../../assets/global/Theme'


const ProjectTiles = ({ input }) => {

  const projects = input.fields
  console.log(projects)

  return (
    <Container>
      <Projects>
 
      {projects.map((singleProject, i) => {
      
        const project = singleProject.project
        const title = project.project_title[0].text
        const platform = project.platform
        const image_url = project.project_list_image.url

        return ( 
          <Project image={image_url} key={i}>
            <InnerProject>
              <Platform>{platform}</Platform>
            <ProjectTitle>{title}</ProjectTitle>

            </InnerProject>

          </Project>
        )
      })}

      </Projects>
    </Container>
  )
}

export default ProjectTiles

ProjectTiles.propTypes = {
  input: PropTypes.object.isRequired,
}

const Container = styled.div`
  margin-bottom: 125px;
  margin: 0 ${theme.PageMargin} ;
`
const Projects = styled.div`
  margin-top: 1%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: block;
  }
`

const Project = styled.div`
  background-image: linear-gradient( rgba(0,0,0,0.05), rgba(0, 0, 0, 0.2) ), ${props => (props.image ? "url("+props.image+")" : "none")};
  height: 538px;
  background-position: center;
  width: 95%;
  background-repeat: no-repeat;
  border-bottom: solid 5px ${theme.PrimaryColor} ;
  background-size: cover;
  max-width: 48%;
  position: relative;
  margin: 1%;
  @media (max-width: 768px) {
    width : 95%;
    display: block;
    max-width: initial;
  } 
`

const InnerProject = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: block;
`

const Platform = styled.h5`
  color: ${theme.PrimaryColor} ;
  position: absolute;
  bottom: 55px;
  left: 40px;
  font-size: 18px;
  font-family: "Calibre Bold";

`

const ProjectTitle = styled.h4`
  position: absolute;
  bottom: 25px;
  left: 40px;
  font-family: "Calibre Bold";
  margin: 0;
  font-size: 3rem;
  color: white;
`