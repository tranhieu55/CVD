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
    `
    const Forms = styled.div`
        padding: 48px 48px;
    `
    const Input = styled.input`
        height: ${props => props.ht === 5 ? '178px' : '64px' };
        margin-top: 24px;
        width: 100%;
        box-sizing: border-box;
        border: 2px solid #CCCCCC;
        border-radius: 3px;
        background-color: #FFFFFF;
        padding-left: 24px;
        &::placeholder {
            margin-bottom: ${props => props.ht === 5 ? '59px': ''};
            height: 24px;
            width: 184px;
            color: #B6B6B6;
            font-family: Calibre Regular;
            font-size: 20px;
            letter-spacing: 0;
            line-height: 24px;
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
        padding: 23px 0px;
        margin-top: 24px;
        border-width: 0px;
    `
    return(
        <FormSumits>
            <Forms>
                <Form.Group>
                {data.fields.map((item, index) => (
                    <Input size="lg" type="text" placeholder={item.placeholder.map(item => item.text)} ht={index}/>
                ))}
               <ButtonForm>Submit</ButtonForm>
                </Form.Group>
            </Forms>
        </FormSumits>
    )
}
