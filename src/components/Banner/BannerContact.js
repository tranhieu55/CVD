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
`
const ContentBanner = styled.div`
    width: 430px;
    position: relative;
    top: 210px;
    left: 180px;

`
const Title = styled.h1`
    color: #FFFFFF;
    font-family: Calibre Bold;
    font-size: 64px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 56px;
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
`
const PhoneNumber = styled.h4`
    width: 135px;
    color: #FFFFFF;
    font-family: Calibre;
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
`