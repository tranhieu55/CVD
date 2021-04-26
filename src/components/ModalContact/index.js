import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';

const Modals = ({ showModal, setShowModal }) => {
    const data = useStaticQuery(graphql`
    query ModalQuery {
        prismic {
            allContact_pages {
                edges {
                    node {
                        body {
                            ... on PRISMIC_Contact_pageBodyForm_submit {
                                type
                                label
                                fields {
                                    placeholder
                                    requied
                                    type
                                }
                                primary {
                                    title_contact_form
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    `)
    const Titles = data.prismic.allContact_pages.edges[0].node.body.filter(item => item.type === 'form_submit');
    const [isOpen, setIsOpen] = useState(null);
    function setLabels(index) {
        if (isOpen === index) {
            setIsOpen(null)
        } else {
            setIsOpen(index);

        }
    }
    return (
        <>
            {showModal ?
                <Container>
                    <Modal showModal={showModal}
                    >
                        <ButtonClose onClick={() => setShowModal(prev => !prev)}></ButtonClose>
                        <Content>
                            <TiTle>{Titles[0].primary.title_contact_form.map(item => item.text)}</TiTle>
                            {Titles[0].fields.map((item, index) => {
                                if(item.type === 'text') {
                                    return <Inputs>
                                        <Input size="lg" type="text" placeholder=" "/>
                                        <label >
                                            {item.placeholder.map(item => item.text)}
                                        </label>
                                    </Inputs>
                                }
                                if(item.type === 'textarea') {
                                    return <Inputs>
                                    <Textarea size="lg" type="text" placeholder=" "/>
                                    <label >
                                            {item.placeholder.map(item => item.text)}
                                    </label>
                                </Inputs>
                                }
                                return null;
                            })}
                            <Submit>Submit</Submit>
                        </Content>
                    </Modal>
                </Container>
                : null}
        </>
    );
}

export default Modals

const TiTle = styled.h1`
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 52px;
  margin-bottom: 0px;
  @media(max-width: 600px){
      letter-spacing : -0.5px;
      font-size: 32px;
      text-align : center;
      height: 32px;
      margin-bottom: 21px;
      line-height: 32px;
  }
`
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  position: fixed;
  top: 0px;
  background: rgba(0, 0, 0, 0.35);
  z-index: 10000;
  overflow-y: auto;
`

const ButtonClose = styled.span`
  top: 26px;
  right: 26px;
  position: absolute;
  &::after {
    content: "\f00d";
    font-family: "Font Awesome 5 Pro Regular";
    height: 20px;
    width: 19px;
    font-size: 31px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 24px;
    text-align: right;
    color: #333333;
    margin-left: 24px;
    opacity: 1;
  }
  @media (max-width: 320px) {
    top: 16px;
    right: 16px;
  }
  @media(max-width: 600px){
      top: 26px;
      right: 26px;
      &::after {
        content: "\f00d";
        font-family: "Font Awesome 5 Pro Regular";
        font-size: 30px;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 24px;
        text-align: right;
        color: #333333;
        margin-left: 24px;
        opacity: 1;
      }
  }
`
const Inputs = styled.div`
    position: relative;
    width: 100%;
    label{
        color: #B6B6B6;
        font-family: Calibre Regular;
        font-size: 20px;
        letter-spacing: 0;
        line-height: 24px;
        box-shadow: none;
        border-top: 0px;
        position : absolute;
        transform: translate(24px, 24px) scale(1);
        top: 0;
        left: 0;
    }
    @media(max-width: 600px){
        label{
            color: #222222;
            transform: translate(14px, 14px) scale(1);
            font-family: Calibre Regular;
            font-size: 18px;
            letter-spacing: 0;
            line-height: 24px;
        }
    }
    @media(min-width: 600px){
        color: #B6B6B6;
        label{
            transform: translate(24px, 24px) scale(1);
        }
    }
`

const Input = styled.input`
    width: 100%;
    height: 64px;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 8px 8px 30px 0 rgba(0,0,0,0.07);
    margin-bottom: 24px;
    box-sizing: border-box;
    border: 2px solid #cccccc;
    border-radius: 3px;
    padding-left: 24px;
    box-shadow: none;
    padding-top: 15px;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    :active~label,
    :focus~label,
    :not(:placeholder-shown) ~ label{
            color: #6E6E6E;
            font-family: Calibre Semibold;
            font-size: 14px;
            letter-spacing: 1px;
            line-height: 24px;
            position: absolute;
            transform: translate(26px, 12px) scale(1);
            top: 0;
            left: 0;
            text-transform: uppercase;
    }
    :focus{
        outline: none;
        border: 2px solid #B6B6B6 ;
    }
    @media(max-width: 320px){
        margin-bottom: 20px;
    }
    @media(max-width: 600px){
        border: 1px solid #6E6E6E;
        margin-bottom: 20px;
        padding-top: 0px;
        height: 48px;
        padding-left: 16px;
        :focus{
            outline: none;
            border: 2px solid #6E6E6E ;
        }
        :focus~label{
            color: #6E6E6E;
            font-family: Calibre Semibold;
            font-size: 14px;
            letter-spacing: 1px;
            line-height: 24px;
            position: absolute;
            transform: translate(12px, -9px) scale(1);
            top: 0px;
            left: 0px;
            background: #ffffff;
            padding: 0px 5px;
            text-transform: uppercase;
        }
        :not(:placeholder-shown) ~ label{
            color: #B6B6B6;
            font-family: Calibre Semibold;
            font-size: 14px;
            letter-spacing: 1px;
            line-height: 24px;
            position: absolute;
            transform: translate(12px, -9px) scale(1);
            top: 0px;
            left: 0px;
            background: #ffffff;
            padding: 0px 5px;
            text-transform: uppercase;
        }
    }
    @media(min-width: 768px){
        height: 48px;
        padding-top: 15px;
        :not(:placeholder-shown) ~ label{
            left: 1px;
            transform: translate(24px, 6px) scale(1);
            text-transform: uppercase;
        }
        :focus~label{
            transform: translate(24px, 6px) scale(1);
            text-transform: uppercase;
        }
    }
    @media(min-width: 768px){
        height: 64px;
        :focus~label{
            transform: translate(24px, 12px) scale(1);
            text-transform: uppercase;
        }
        :not(:placeholder-shown) ~ label{
            left: 1px;
            transform: translate(24px, 12px) scale(1);
            text-transform: uppercase;
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
    border: 2px solid #cccccc;
    border-radius: 3px;
    padding-top: 24px;
    padding-left: 24px;
    box-shadow: none;
    padding-top: 25px;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    :active~label,
        :focus~label,
        :not(:placeholder-shown) ~ label{
            color: #6E6E6E;
            font-family: Calibre Semibold;
            font-size: 14px;
            letter-spacing: 1px;
            line-height: 24px;
            position: absolute;
            transform: translate(26px, 12px) scale(1);
            top: 0;
            left: 0;
            text-transform: uppercase;
        }
    @media(max-width: 320px){
        margin-bottom: 20px;
        padding-top: 12px;
    }
    @media(max-width: 768px){
        height: 138px;
    }
    
    @media(max-width: 600px){
        border: 1px solid #6E6E6E;
        margin-bottom: 12px;
        padding-left: 16px;
        padding-top: 12px;
        height: 158px;
        :focus{
            outline: none;
            border: 2px solid #6E6E6E ;
        }
        :focus~label{
            color: #6E6E6E;
            font-family: Calibre Semibold;
            font-size: 14px;
            letter-spacing: 0;
            line-height: 24px;
            position: absolute;
            transform: translate(15px, -9px) scale(1);
            top: 0;
            left: 0px;
            background: #ffffff;
            padding: 0px 5px;
            text-transform: uppercase;
        }
        :not(:placeholder-shown) ~ label{
            color: #6E6E6E;
            font-family: Calibre Semibold;
            font-size: 14px;
            letter-spacing: 1px;
            line-height: 24px;
            position: absolute;
            transform: translate(12px, -9px) scale(1);
            top: 0px;
            left: 0px;
            background: #ffffff;
            padding: 0px 5px;
            text-transform: uppercase;
        }
    }
    
`

const Submit = styled.button`
  height: 64px;
  width: 180px;
  border-radius: 3px;
  background-color: #fecf09;
  border-color: #fecf09;
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
      height: 48px;
      padding: 18px 0px;
  }
  @media(min-width: 600px){
      width: 180px;
      height: 64px;
      padding: 25px 0px;
  }
`
const Content = styled.div`
  margin: 46px 48px;
  @media (max-width: 768px) {
    margin: 26px 24px;
  }
  @media (max-width: 320px) {
    margin: 20px 24px;
  }
`
const Modal = styled.div`
    height: 872px;
    width: 605px;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 8px 8px 30px 0 rgba(0,0,0,0.07);
    position: relative;
    margin: auto;
    
    @media(max-width: 768px){
        height:  780px;
    }
    @media(max-width: 600px){
        height: 667px;
    }
`
