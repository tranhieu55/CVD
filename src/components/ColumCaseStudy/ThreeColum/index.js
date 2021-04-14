
import React from 'react';
import styled from 'styled-components';



export default function ThreeColum (props) {
    return (
        <Container>
            <Img
                alt={props.input.primary.image_side_left.alt}
                src={props.input.primary.image_side_left.url}
            ></Img>
            <Img
                alt={props.input.primary.image_center.alt}
                src={props.input.primary.image_center.url}
            ></Img>
            <Img
                alt={props.input.primary.image_side_right.alt}
                src={props.input.primary.image_side_right.url}
            ></Img>
        </Container>
    )
}

const Container = styled.div`
    width : 1240px;
    margin: 0px auto 96px;
    height: 650px;
    display: flex;
    justify-content: space-between;
   
    @media(max-width: 600px){
        width: 470px;
        margin : 0px auto 28px;
        height: 236px;
    }
    @media(max-width: 480px){
        width: 343px;
        margin : 0px auto 28px;
        height: 236px;
    }
    @media(max-width: 320px){
        width: 278px;
        margin : 0 auto;
        height: 220px;
    }
    @media(min-width: 600px){
        width: 585px;
        margin : 0 auto 32px;
        height: 340px;
    }
    @media(min-width: 992px){
        width: 785px;
        margin : 0 auto 32px;
        height: 400px;
    }
    @media(min-width: 1024px){
        width: 885px;
        margin : 0 auto 32px;
        height: 480px;
    }
    @media(min-width: 1200px){
        width: 985px;
        margin : 0 auto 64px;
        height: 540px;
    }
    @media(min-width: 1400px){
        width: 1240px ;
        margin: 0px auto 96px;
        height: 650px;
    }
`

const Img = styled.img`
    width: 31.6%;
    height: 100%;
`
