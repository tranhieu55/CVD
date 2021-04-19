import React from 'react';
import styled from 'styled-components';

export default function Derection ({input}) {
    const data = input.fields;
    const DivIMG = styled.div`
    overflow:hidden;
    `
    const Derections = styled.div`
        height: 916px;
        width: 556px;
        margin: 66px 0px 72px 180px;
        @media(max-width: 600px){
            margin: 518px auto 72px ;
            width: 343px;
        }
        @media(max-width: 360px){
            margin: 518px 0px 72px 16px;
            width: 328px;
        }
        @media(max-width: 320px){
            margin: 528px 0px 72px 16px;
            width: 288px;
        }
        @media(min-width: 600px){
            margin: 66px 0px 72px 16px;
            width: 240px;
        }
        @media(min-width: 768px){
            margin: 66px 0px 72px 30px;
            width: 296px;
        }
        @media(min-width: 1024px){
            margin: 66px 0px 72px 50px;
            width: 396px;
        }
        @media(min-width: 1444px){
            margin: 66px 0px 72px 180px;
            width: 556px;
        }
    `
    const Title = styled.h1`
        height: 76px;
        width: 100%;
        color: #101010;
        font-family: Calibre Semibold;
        font-size: 48px;
        font-weight: 600;
        letter-spacing: 0;
        line-height: 52px;
        border-bottom: 1px solid #E4E4E4;
        margin-bottom: 32px;
        @media(max-width: 600px){
            height: 52px;
            font-size: 32px;
            margin-bottom: 24px;
        }
    `
    const Contentleft = styled.div`
        width: 40%;
        @media(max-width: 600px){
            width: 100%;
        }
        @media(min-width: 600px){
            width: 100%;
        }
        @media(min-width: 1024px){
            width: 40%;
        }
    `
    const ContentRight = styled.div`
        width: 40%
        color: red;
        @media(max-width: 600px){
            width: 100%;
        }
        @media(min-width: 600px){
            width: 100%;
        }
        @media(min-width: 1024px){
            width: 40%;
        }
    `
    const Content = styled.div`
        width: 100%;
        height: 172px;
        display: flex;
        justify-content : space-between;
        margin-bottom: 40px;
        @media(max-width: 600px){
            display: block;
        }
        @media(min-width: 600px){
            display: block;
        }
        @media(min-width: 1024px){
            display: flex;
        }
    `
    const TitleLeft = styled.div`
        color: #101010;
        font-family: Calibre Semibold;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: -0.5px;
        line-height: 26px;
    `
    const TextLeft = styled.div`
        color: #222222;
        font-family: Calibre Regular;
        font-size: 20px;
        letter-spacing: 0;
        line-height: 24px;
    `
    const Phone = styled.div`
        color: #222222;
        font-family: Calibre Regular;
        font-size: 20px;
        letter-spacing: 0;
        line-height: 24px;
    `
    return(
        <Derections>
            <Title>{input.primary.title.map(item => item.text)}</Title>
            {data.map((item , index) => (
                <Content>
                        <Contentleft key={index}>
                            <TitleLeft>{item.office_title.map(item => item.text)}</TitleLeft>
                            <TextLeft>{item.address.map(item => item.text)}</TextLeft>
                            <Phone>{item.office_phone_number.map(item => item.text)}</Phone>
                        </Contentleft>
                    <ContentRight>

                    </ContentRight>
                </Content>
            ))}
        </Derections>
    )
}

