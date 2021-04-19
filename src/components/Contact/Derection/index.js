import React from 'react';
import styled from 'styled-components';

export default function Derection ({input}) {
    console.log("derection =================", input);
    const data = input;
    const DivIMG = styled.div`
    overflow:hidden;
    `
    const Derections = styled.div`
        height: 916px;
        width: 556px;
        margin: 66px 0px 72px 180px;
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
    `
    const Contentleft = styled.div`
        width: 40%;
    `
    const ContentRight = styled.div`
        width: 40%
        color: red;
    `
    const Content = styled.div`
        width: 100%;
        height: 172px;
        display: flex;
        justify-content : space-between;
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
            <Title>Offices</Title>
            <Content>
                <Contentleft>
                    <TitleLeft>{data.primary.office_title.map(item => item.text)}</TitleLeft>
                    <TextLeft>{data.primary.address.map(item => item.text)}</TextLeft>
                    <Phone>{data.primary.office_phone_number.map(item => item.text)}</Phone>
                </Contentleft>
                <ContentRight>

                </ContentRight>
            </Content>
        </Derections>
    )
}

