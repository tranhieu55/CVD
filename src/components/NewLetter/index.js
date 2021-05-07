import React from 'react';
import styled from 'styled-components';

export default function NewLetter ({dataFooter}) {
    const data = dataFooter ? dataFooter.edges[0]?.node.body?.filter(item => item.type === "newsletter_signup") : [];
    return(
        <Container>
            <Title>{data[0]?.primary?.title?.map(item => item.text)}</Title>
            <Text>{data[0]?.primary?.title_side?.map(item => item.text)}</Text>
            <Input type="text" placeholder={data[0]?.primary?.form_submit_placeholder?.map(item => item.text)}></Input>
            <Submit>{data[0]?.primary?.text_button?.map(item => item.text)}</Submit>
        </Container>
    )
}   
const Container = styled.div`
    display: flex;
    @media(max-width: 600px){
        display: block;
        padding: 0 16px;
    }
    @media(min-width: 600px){
        display: block;
        padding: 0 86px;
    }
    @media(min-width: 768px){
        width: 420px;
        margin: 0 auto;
        padding: 0;
    }
    @media(min-width: 992px){
        display: flex;
        margin: 0px 16px;
        border-bottom: 1px solid #92939B;
        padding: 0 0px;
        height: 208px;
        width: auto;
    }
    @media(min-width: 1280px){
        height: 208px;
        width: 1240px;
        margin: 0px auto;
        display: flex;
        border-bottom: 1px solid #92939B;
    }
`
const Title = styled.h1`
    color: #FFFFFF;
    font-family: Calibre Bold;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.5px;
    line-height: 38px;
    margin-top: 80px;
    margin-right: 86px;
    margin-bottom: 0px;
    @media(max-width: 600px){
        padding-top: 48px;
        text-align: center;
        margin-top: 0px;
        margin-right: 0px;
    }
    @media(min-width: 600px){
        padding-top: 48px;
        text-align: center;
        margin-top: 0px;
        margin-right: 0px;
    }
    @media(min-width: 992px){
        padding-top: 0px;
        margin-top: 60px;
    }
    @media(min-width: 1280px){
        color: #FFFFFF;
        font-family: Calibre Bold;
        font-size: 32px;
        font-weight: bold;
        letter-spacing: -0.5px;
        line-height: 38px;
        margin-top: 80px;
        margin-right: 86px;
        margin-bottom: 0px;
    }
`
const Text = styled.p`
    width: 253px;
    opacity: 0.7;
    color: #FFFFFF;
    font-family: Calibre Medium;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;
    margin-top: 78px;
    margin-right: 77px;
    margin-bottom: 0px;
    @media(max-width: 600px){
        margin-top: 0px;
        text-align: center;
        width: auto;
        height: auto;
        padding: 0px 16px;
    }
    @media(min-width: 600px){
        margin-top: 0px;
        text-align: center;
        width: auto;
        height: auto;
        padding: 0px 16px;
        margin-right: 0px;
    }
    @media(min-width: 992px){
        margin-top: 70px;
        padding: 0px 56px;
    }
    @media(min-width: 1188px){
        margin-top: 70px;
        margin-right: 46px;
        margin-left: 46px;
        padding: 0px 16px;
    }
    @media(min-width: 1280px){
        width: 253px;
        opacity: 0.7;
        color: #FFFFFF;
        font-family: Calibre Medium;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 26px;
        margin-top: 78px;
        margin-right: 77px;
        margin-left: 0px;
        padding: 0px;
    }
`
const Input = styled.input`
    height: 48px;
    width: 393px;
    color: #BEBFC6;
    font-family: Calibre Regular;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
    margin-top: 78px;
    border: 1px solid #92939B;
    border-radius: 3px;
    box-sizing: border-box;
    background: transparent;
    padding: 0px 15px;
    margin-right: 18px;
    :focus-visible{
        outline: none;
    }
    ::-webkit-input-placeholder { /* Edge */
        margin-top: 5px;
      }
      
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        margin-top: 5px;
      }
      
      ::placeholder {
        margin-top: 5px;
      }
      @media(max-width: 600px){
        margin-top: 16px;
        padding: 13px 15px;
        width: 100%;
        margin-right: 0px;
    }
    @media(min-width: 600px){
        margin-top: 16px;
        padding: 13px 15px;
        width: 100%;
        margin-right: 0px;
    }
    @media(min-width: 992px){
        width: auto;
        margin-right: 18px;
        margin-top: 73px;
    }
    @media(min-width: 1280px){
        height: 48px;
    width: 393px;
    color: #BEBFC6;
    font-family: Calibre Regular;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
    margin-top: 78px;
    border: 1px solid #92939B;
    border-radius: 3px;
    box-sizing: border-box;
    background: transparent;
    padding: 0px 15px;
    margin-right: 18px;
    :focus-visible{
        outline: none;
    }
    ::-webkit-input-placeholder { /* Edge */
        margin-top: 5px;
      }
      
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        margin-top: 5px;
      }
      
      ::placeholder {
        margin-top: 5px;
      }
    }
`
const Submit = styled.button`
    background: transparent;
    box-sizing: border-box;
    height: 48px;
    border: 2px solid #FECF09;
    border-radius: 3px;
    color: #FFFFFF;
    font-family: Calibre Semibold;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 22px;
    text-align: center;
    margin-top: 78px;
    padding: 14px 45px;
    :hover{
        color: #101010;
        background: #fecf09;
        border: 2px solid #FECF09;
    }
    @media(max-width: 600px){
        margin-top: 16px;
        width: 100%;
        padding: 13px 45px;
    }
    @media(min-width: 600px){
        margin-top: 16px;
        width: 100%;
        padding: 13px 45px;
    }
    @media(min-width: 992px){
        width: auto;
        margin-top: 73px;
    }
    @media(min-width: 1280px){
        background: transparent;
        box-sizing: border-box;
        height: 48px;
        border: 2px solid #FECF09;
        border-radius: 3px;
        color: #FFFFFF;
        font-family: Calibre Semibold;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0;
        line-height: 22px;
        text-align: center;
        margin-top: 78px;
        padding: 14px 45px;
    }
`