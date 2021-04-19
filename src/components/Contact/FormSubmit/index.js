import React from 'react';
import styled from 'styled-components';
import { Form } from "react-bootstrap";
import ButtonCustom from "../../ButtonCustom/index";


export default function FormSumit ({input}) {
    const data = input;
    const FormSumits = styled.div`
        height: 802px;
        width: 604px;
        border-radius: 3px;
        background-color: #FFFFFF;
        box-shadow: 8px 8px 30px 0 rgba(0,0,0,0.07);
        position: absolute;
        top: 186px;
        right: 180px;
        @media(max-width: 600px){
            left: 0px;
            right: 0px;
            margin: 0px auto;
            width: 343px;
            top: 391px;
            height: 718px;
        }
        @media(max-width: 360px){
            left: 0px;
            right: 0px;
            margin: 0px auto;
            width: 320px;
            top: 391px;
            height: 718px
        }
        @media(max-width: 320px){
            left: 0px;
            right: 0px;
            margin: 0px auto;
            width: 288px;
            top: 415px;
            height: 718px
        }
        @media(min-width: 600px){
            right: 16px;
            width: 310px;
            height: 770px
        }
        @media(min-width: 768px){
            width: 340px;
            right: 20px;
            height: 770px;
        }
        @media(min-width: 1024px){
            right : 40px;
            width: 480px;
            height: 802px;
        }
        @media(min-width: 1200px){
            right : 40px;
            width: 480px;
        }
        @media(min-width: 1444px){
            right : 150px;
            width: 604px;
        }
        @media(min-width: 1600px){
            right : 180px;
        }
    `
    const Forms = styled.div`
        padding: 48px 48px;
        @media(max-width: 600px){
            padding: 30px 24px;
        }
        @media(min-width: 600px){
            padding: 30px 24px;
        }
        @media(min-width: 1024px){
            padding: 48px 48px;
        }
    `
    const Input = styled.input`
        height: 64px };
        margin-bottom: 24px;
        width: 100%;
        box-sizing: border-box;
        border: 2px solid #CCCCCC;
        border-radius: 3px;
        background-color: #FFFFFF;
        padding-left: 24px;
        box-shadow: none;
        &::placeholder {
            height: 24px;
            width: 184px;
            color: #B6B6B6;
            font-family: Calibre Regular;
            font-size: 20px;
            letter-spacing: 0;
            line-height: 24px;
        }
        @media(max-width: 600px){
            margin-bottom: 16px;
        }
        :hover{
            border: 2px solid #222222 ;
        }
        :focus{
            &::placeholder {
                height: 24px;
                width: 184px;
                color: #B6B6B6;
                font-family: Calibre Regular;
                font-size: 14px;
                letter-spacing: 0;
                line-height: 24px;
                position: absolute;
                top: 2px;

            }
        }
       
    `
    const Textarea = styled.textarea`
        width: 100%;
        height: 178px;
        border-radius: 5px;
        background-color: #FFFFFF;
        box-shadow: 8px 8px 30px 0 rgba(0,0,0,0.07);
        margin-bottom: 24px;
        box-sizing: border-box;
        border: 2px solid #CCCCCC;
        border-radius: 3px;
        background-color: #FFFFFF;
        padding-top: 24px;
        padding-left: 24px;
        box-shadow: none;
        &::placeholder {
            height: 24px;
            width: 184px;
            color: #B6B6B6;
            font-family: Calibre Regular;
            font-size: 20px;
            letter-spacing: 0;
            line-height: 24px;
        }
        :hover{
            border: 2px solid #222222 ;
        }
        :focus{
            &::placeholder {
                height: 24px;
                width: 184px;
                color: #B6B6B6;
                font-family: Calibre Regular;
                font-size: 14px;
                letter-spacing: 0;
                line-height: 24px;
                position: absolute;
                top: 2px;
            }
        }
        @media(max-width: 768px){
            margin-bottom: 10px;
        }
    `
    const ButtonForm = styled.button`
        height: 64px;
        width: 180px;
        border-radius: 3px;
        background-color: #FECF09;
        border-color: #FECF09;
        color: #101010;
        font-family: Calibre Semibold;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0;
        line-height: 18px;
        text-align: center;
        padding: 25px 0px;
        border-width: 0px;
        @media(max-width: 600px){
            width: 100%;
        }
    `
    return(
        <FormSumits>
            <Forms>
                {data.fields.map((item, index) => {
                     if(item.type === 'text') {
                        return <Input size="lg" type="text" placeholder={item.placeholder.map(item => item.text)} ht={index}/>
                    }
                    if(item.type === 'textarea') {
                        return <Textarea size="lg" type="text" placeholder={item.placeholder.map(item => item.text)} ht={index}/>
                    }
                    return null;
                })}
               <ButtonForm>Submit</ButtonForm>
            </Forms>
        </FormSumits>
    )
}
