import styled from "styled-components"
import React from 'react';
import TwoColum from "../components/ColumCaseStudy/TwoColumA";


const ComponentCaseStudys = () =>{
    return (
        <Container>
            <TwoColum />
        </Container>
    )
}

export default ComponentCaseStudys

const Container = styled.div`
  margin-left: 72px;
  margin-top: 72px;
`
