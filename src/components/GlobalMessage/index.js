import React from 'react';
import styled from 'styled-components';

export default function GlobalMessage () {
    return(
        <Container>
            <Content>
                <Text lh={24}>This is a sample global message bar.</Text>
                <LI lh={24}>View Here</LI>
            </Content>
            <Contents>
                <Text lh={20}>This is a sample global message bar. With two lines of text in a message.</Text>
                <LI lh={20}>View Here</LI>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
    @media(max-width: 600px){
        height: 64px;
        position : absolute;
        z-index: 9999;
        width: 100%;
        background-color: #2A304F;
        &::after{
            content: "\f00d";
            font-family: "Font Awesome 5 Pro Regular";
            height: 13.33px;
            width: 12.44px;
            color: #ffffff;
            position: absolute;
            top: 17px;
            right: 16.5px;
        }
    }
    @media(min-width: 600px){
        width: 100%;
        height: 48px;
        background-color: #2A304F;
        &::after{
            content: "\f00d";
            font-family: "Font Awesome 5 Pro Regular";
            height: 13.33px;
            width: 12.44px;
            color: #ffffff;
            position: absolute;
            top: 12px;
            right: 25px;
        }
    }
`
const Text = styled.span`
    color: #FFFFFF;
    font-family: Calibre Medium;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: ${({lh}) => `${lh}px`};
    margin-bottom : 0px;
`
const LI = styled.span`
    color: #FFFFFF;
    font-family: Calibre Medium;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: ${({lh}) => `${lh}px`};
    margin-bottom : 0px;
    list-style: none;
    border-bottom: 1px solid #ffffff;
    height: 18px;
`
const Content = styled.div`
    @media(min-width: 600px){
        display: flex;
        margin: auto;
        padding-top: 12px;
        width: 299px;
    }
    @media(max-width: 600px){
        display: none;
    }
`
const Contents = styled.div`
    @media(max-width: 600px){
        display: block;
        margin-left: 14.5px;
        padding-top: 11px;
        width: 309px;
    }
    @media(min-width: 600px){
        display: none;
    }
`