
import React from 'react';
import styled from 'styled-components';



export default function FullColum (props) {
    return (
        <Container>
            <Img
                alt={props.input.primary.image_full_banner_a.alt}
                src={props.input.primary.image_full_banner_a.url}
            ></Img>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 730px;
    @media(max-width: 600px){
        margin-bottom: 32px;
        height: 236px;
    }
    @media(min-width: 600px){
        margin-bottom: 32px;
        height: 236px;
    }
    @media(min-width: 768px){
        margin-bottom: 32px;
        height: 380px;
    }
    @media(min-width: 1024px){
        margin-bottom: 32px;
        height: 480px;
    }
    @media(min-width: 1200px){
        margin-bottom: 96px;
        height: 480px;
    }
    @media(min-width: 1400px){
        margin-bottom: 96px;
        height: 580px;
    }
    @media(min-width: 1600px){
        margin-bottom: 96px;
        height: 730px;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
`
