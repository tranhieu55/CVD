
import React from 'react';
import styled from 'styled-components';



export default function ThreeColum (props) {
    return (
        <Box>
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
        </Box>
    )
}

const Box = styled.div`
    @media(max-width: 600px){
        margin: 0px 16px 28px;
    }
    @media(min-width: 600px){
        margin: 0px;
    }
`

const Container = styled.div`
    width : 1240px;
    margin: 0px auto 96px;
    height: 650px;
    display: flex;
    justify-content: space-between;
    @media(max-width: 600px){
        height: 432px;
        width: 343px;
        overflow-x: auto;
        overflow-y: hidden;
        margin-bottom: 28px;
    }
    @media(max-width: 480px){
        height: 432px;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        margin-bottom: 28px;
    }
    @media(max-width: 320px){
        height: 432px;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        margin-bottom: 28px;
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
        overflow: hidden;
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
    height: ${props => props.alt !== "image item 1" && props.alt !== "item image" ? '100%' : ""};
    width: ${props => props.alt !== "image item 1" && props.alt !== "item image" ? '100%' : ""};
    margin: ${props => props.alt !== "image item 1" && props.alt !== "item image"? '0px' : "68px 73px"};
    object-fit: cover;
    @media(max-width: 600px){
        height: ${props => props.alt !== "image item 1" && props.alt !== "item image" ? '100%' : "378px"};
        object-fit: cover;
        margin: ${props => props.alt !== "image item 1" && props.alt !== "item image"? '0px' : "33px 37px"};
    }
    @media(min-width: 600px){
        width: ${props => props.alt !== "image item 1" && props.alt !== "item image" ? '100%' : "80%"};
        margin: ${props => props.alt !== "image item 1" && props.alt !== "item image"? '0px' : "22px 18px"};
    }
    @media(min-width: 992px){
        width: ${props => props.alt !== "image item 1" && props.alt !== "item image" ? '100%' : "80%"};
        margin: ${props => props.alt !== "image item 1" && props.alt !== "item image"? '0px' : "2px 18px"};
    }
    @media(min-width: 1024px){
        margin: ${props => props.alt !== "image item 1" && props.alt !== "item image"? '0px' : "17px 28px"};
    }
    @media(min-width: 1200px){
        margin: ${props => props.alt !== "image item 1" && props.alt !== "item image"? '0px' : "19px 32px"};
    }
    @media(min-width: 1440px){
        height: ${props => props.alt !== "image item 1" && props.alt !== "item image" ? '100%' : ""};
        width: ${props => props.alt !== "image item 1" && props.alt !== "item image" ? '100%' : "auto"};
        margin: ${props => props.alt !== "image item 1" && props.alt !== "item image"? '0px' : "68px 73px"};
    }
`
const DivImg = styled.div`
    width: 31.6%;
    height: 100%;
    background-color: ${props => props.alt === "image item 1" && props.alt === "item image" ? '' : "#f1f1f1"};
    @media(max-width: 600px){
        width: 258px;
        height: 100%;
        display: table;
        margin-right: 22px;
        background-color: ${props => props.alt === "image item 1" && props.alt === "item image" ? '' : "#f1f1f1"};
    }
`