import React from 'react';
import styled from 'styled-components';


export default function Derection ({input}) {
    const data = input.fields;
    const DivIMG = styled.div`
    overflow:hidden;
    `
    const Derections = styled.div`
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
            margin: 565px 0px 72px 16px;
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
        @media(min-width: 1200px){
            margin: 66px 0px 72px 180px;
            width: 456px;
        }
        @media(min-width: 1440px){
            margin: 66px 0px 72px 180px;
            width: 556px;
        }
    `
    const Title = styled.h1`
        @media(max-width: 600px){
            height: 52px;
            font-size: 32px;
            margin-bottom: 24px;
        }
        @media(min-width: 600px){
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
        }
    `
    const Contentleft = styled.div`
        width: 43.2%;
        @media(max-width: 600px){
            width: 100%;
        }
        @media(min-width: 600px){
            width: 100%;
        }
        @media(min-width: 1024px){
            width: 43.2%;
        }
    `
    const ContentRight = styled.div`
        width: 48.9%;
        .googole-map{
            border: none;
        }
        @media(max-width: 600px){
            width: 100%;
        }
        @media(min-width: 600px){
            width: 100%;
        }
        @media(min-width: 1024px){
            width: 48.9%;
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
    const DivLink = styled.div`
        display: flex;
        margin-top: 12px;
    `
    const Link = styled.p`
        opacity: 0.9;
        color: #555555;
        font-family: Calibre;
        font-size: 20px;
        letter-spacing: 0;
        line-height: 24px;
        border-bottom: 1px solid #555555;
        margin-bottom: 0px;
        margin-right: 16px;
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
                            <DivLink>
                                <Link>Call</Link>
                                <Link>Directions</Link>
                            </DivLink>
                        </Contentleft>
                    <ContentRight>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.2612906442637!2d144.9868783163482!3d-37.80734834145114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642d8a7795b53%3A0x7efe11a86e7e0b15!2sConvert%20Digital!5e0!3m2!1sen!2sau!4v1619490398964!5m2!1sen!2sau" 
                        width="100%" height="100%" className='googole-map' allowfullscreen="" loading="lazy"
                    >
                    </iframe>
                    </ContentRight>
                </Content>
            ))}
        </Derections>
    )
}

