
import React from 'react';
import styled from 'styled-components';



export default function TwoColum (props) {
    return (
        <Container>
            {/* <Img
                alt={props.input.primary.image_side_left.alt}
                src={props.input.primary.image_side_left.url}
            ></Img>
            <Img
                alt={props.input.primary.image_side_right.alt}
                src={props.input.primary.image_side_right.url}
            ></Img> */}
        </Container>
    )
}

const Container = styled.div`
    width : 1240px;
    margin: 0px auto 96px;
    height: 650px;
    display: flex;
    justify-content: space-between;
`

const Img = styled.img`
    width: 48.71%;
    height: 100%;
`
