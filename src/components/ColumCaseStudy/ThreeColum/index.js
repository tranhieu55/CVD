
import React from 'react';
import styled from 'styled-components';



export default function ThreeColum (props) {
    console.log({props})
    return (
        <Container>
            <DivImg show={props.input.primary.image_side_left.alt}>
                <Img
                    alt={props.input.primary.image_side_left.alt}
                    src={props.input.primary.image_side_left.url}
                ></Img>
            </DivImg>
            <DivImg show={props.input.primary.image_side_left.alt}>
                <Img
                    alt={props.input.primary.image_center.alt}
                    src={props.input.primary.image_center.url}
                ></Img>
            </DivImg>
            <DivImg show={props.input.primary.image_side_left.alt}> 
                <Img
                    alt={props.input.primary.image_side_right.alt}
                    src={props.input.primary.image_side_right.url}
                ></Img>
            </DivImg>
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
    height: ${props => props.alt === "image item " ? '100%' : ""};
    width: ${props => props.alt === "image item " ? '100%' : ""};
    margin: ${props => props.alt === "image item " ? '0px' : "68px 73px"};
    object-fit: cover;
`
const DivImg = styled.div`
    width: 31.6%;
    height: 100%;
    background-color: ${props => props.show === "image item " ? '' : "#f1f1f1"};
`