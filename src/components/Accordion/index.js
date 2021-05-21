import React from 'react';
import styled from 'styled-components';

export default function Accordion() {
    return (
        <Container>
            <Content>
                <SubTitle>CLIENT SUCCESS TEAM</SubTitle>
                <Title>Digital Ecommerce Account Manager</Title>
                <ContentSub>
                    <Text>Convert Digital are looking for a Shopify developer who has experience with Shopify Plus, scripts, Flow, app development, 
                        systems integration and has the ability to simplify complex problems with best practise solutions.
                    <br></br>Why work at Convert Digital:
                    </Text>
                    <TextLi>One of a select group of Shopify Plus Partners in Australia</TextLi>
                    <TextLi>One of a select group of Shopify Plus Partners in Australia</TextLi>
                    <TextLi>One of a select group of Shopify Plus Partners in Australia</TextLi>
                    <TextLi>One of a select group of Shopify Plus Partners in Australia</TextLi>
                    <TextLi>One of a select group of Shopify Plus Partners in Australia</TextLi>
                </ContentSub>
            </Content>
        </Container>
    )
}
const Container = styled.div`
    @media(max-width: 600px){
        margin : 0 16px;
        height: auto;
    }
    @media(min-width: 600px){
        margin : 0 32px;
        height: auto;
    }
    @media(min-width: 768px){
        margin : 0 48px;
    }
    @media(min-width: 992px){
        width: 900px;
        margin: 0 auto;
        height: auto;
    }
`
const Content = styled.div`
    width: 100%;
    height: auto;
    border-bottom: 1px solid #E4E4E4;
    &::after{
        content: "\f067";
        font-family: "Font Awesome 5 Pro Regular";
        height: 18px;
        line-height: 16px;
        font-size: 18px;
        color: #222222;
    }
`
const SubTitle = styled.p`
    color: #999999;
    font-family: Calibre Semibold;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 16px;
    margin-bottom: 10px;
    position : relative;
    margin-left: 80px;
    &::after{
        position: absolute;
        right: calc(100% + 16px);
        top: 31%;
        display: block;
        content: "";
        width: 64px;
        height: 2px;
        background: rgb(254,207,9);
    }
`
const Title = styled.h1`
    color: #101010;
    font-family: Calibre Semibold;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -0.5px;
    line-height: 32px;
    margin-bottom: 30px;
    @media(max-width: 600px){
        font-size: 24px;
        line-height: 24px;
        width: 99%;
    }
`
const ContentSub = styled.div`
`
const Text = styled.p`
    color: #222222;
    font-family: Calibre Regular;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
`
const TextLi = styled.li`
    color: #222222;
    font-family: Calibre Regular;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
    margin-left: 10px;
    margin-bottom: 4px;
    @media(max-width: 600px){
        margin-bottom: 8px;
    }
    
`