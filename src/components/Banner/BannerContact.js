import React from 'react';
import styled from 'styled-components';

export default function BannerContacts ({title, content, button, Phones}) {
    
    return (
        <Banner>
            <ContentBanner>
                <Title>{title}</Title>
                <Content>{content}</Content>
                <ButtonBanner>
                    <Buttons>{button}</Buttons>
                    <PhoneNumber>{Phones}</PhoneNumber>
                </ButtonBanner>
            </ContentBanner>
        </Banner>
    )
}

const Banner = styled.div`
    height: 614px;
    width: 100%;
    background-color: #0F1534;
    clip-path: polygon(0px 0%, 100% 0px, 100% 86%, 0% 100%);
    @media(min-width: 600px){
        clip-path: polygon(0px 0%, 100% 0px, 100% 92%, 0% 100%);
    }
    @media(min-width: 1024px){
        clip-path: polygon(0px 0%, 100% 0px, 100% 86%, 0% 100%);
    }
`
const ContentBanner = styled.div`
    width: 430px;
    position: relative;
    top: 210px;
    left: 180px;
    @media(max-width: 600px){
        left: 0px;
        right: 0px;
        margin: 0 auto;
        width: 330px;
        top: 84px;
    }
    @media(max-width: 320px){
        left: 0px;
        right: 0px;
        margin: 0 auto;
        width: 288px;
        top: 84px;
    }
    @media(min-width: 600px){
        left: 0px;
        right: 0px;
        margin: 0 auto;
        width: 260px;
        top: 160px;
    }
    @media(min-width: 768px){
        left: 30px;
        width: 330px;
    }
    @media(min-width: 1024px){
        left: 50px;
        width: 430px;
    }
    @media(min-width: 1200px){
        left: 180px;
        top: 210px;
    }
`
const Title = styled.h1`
    color: #FFFFFF;
    font-family: Calibre Bold;
    font-size: 64px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 56px;
    @media(max-width: 600px){
        fon-size: 40px;
    }
    @media(max-width: 320px){
        font-size: 40px;
    }
    @media(min-width: 600px){
        font-size: 50px;
    }
    @media(min-width: 768px){
        font-size: 64px;
    }
`
const Content = styled.p`
    color: #FFFFFF;
    font-family: Calibre Medium;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;
    margin-top: 10px;
`
const Buttons = styled.button`
    box-sizing: border-box;
    height: 48px;
    width: 142px;
    border: 2px solid #FECF09;
    border-radius: 3px;
    color: #FFFFFF;
    font-family: Calibre Semibold;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 22px;
    text-align: center;
    background: transparent;
    padding: 14px 0px;
`
const PhoneNumber = styled.h4`
    width: 135px;
    color: #FFFFFF;
    font-family: Calibre Semibold;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 18px;
    text-align: center;
    margin-bottom: 0px;
    padding: 15px 0px;
    &::before{
        content: "\f095";
        font-family: "Font Awesome 5 Pro Regular";
        height: 16px;
        width: 16px;
        color: #FFFFFF;
        line-height: 0px;
        font-size: 14px;
        padding: 15px 0px;
        margin-right: 8px;
    }
    
`

const ButtonBanner = styled.div`
    display: flex;
    margin-top: 31px;
    width: 301px;
    justify-content: space-between;
    @media(min-width: 600px){
        display: block;
    }
    @media(max-width: 320px){
        width: 288px;
    }
    @media(min-width: 768px){
        display: flex;
    }
`