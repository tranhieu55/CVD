import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import ButtonCustom from "../ButtonCustom";
import { theme } from "../../utils/theme"

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        height                : '872px',
        width                 : '605px',
        backgroundColor        : '#FFFFFF',
        marginRight           : '-50%',
        padding                : '48px',
        transform             : 'translate(-50%, -50%)'
    }
  };

const Modals = () => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }

    function closeModal(){
      setIsOpen(false);
    }
    return (
        <Container>
            <BoxBtn>
                <ButtonCustom
                    variant="primary" onClick={openModal}
                    className="my-btn-back  my-btn button-header w3-button w3-black"
                    bgColor={theme.colors.transparent}
                    textColor={theme.colors.white}
                    variant="primary"
                    fz="20"
                    pd1="16"
                    pd2="31.5"
                    lineh="24"
                    Block={true}
                    margin="auto"
                >
                    <H2 className="get-in-touch">Get in touch</H2>
                </ButtonCustom>
            </BoxBtn>
            <Modal
            isOpen={modalIsOpen}
            //   onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <ButtonClose onClick={closeModal}></ButtonClose>
            <TiTle>Get in touch</TiTle>
            <Inputs>
                <Input ht='64' placeholder='Name'></Input>
                <Input ht='64' placeholder='Email'></Input>
                <Input ht='64' placeholder='NUMBER'></Input>
                <Input ht='64' placeholder='Company'></Input>
                <Input ht='64' placeholder='Current Website URL'></Input>
                <Input ht='178' placeholder='Message / Requirement'></Input>
            </Inputs>
            <Submit>Submit</Submit>
            </Modal>
        </Container>
    );
}
  
  export default Modals;


const Span = styled.span``
const BoxBtn = styled.div``
const H2 = styled.h2``
const TiTle = styled.h1`
    color: #101010;
    font-family: Calibre Semibold;
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 52px;
    margin-bottom : 0px;
    
`
const Container = styled.div`
  
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
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 24px;
    text-align: right;
    color: #333333;
    margin-left: 24px;
    opacity: 0.6;
}
`
const Inputs = styled.div`
    margin-top: 20px;
    width : 100%;
    height: 618px;
`
const Input = styled.input`
    width: 100%;
    height: ${({ht}) => `${ht}px`};
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 8px 8px 30px 0 rgba(0,0,0,0.07);
    margin-bottom: 24px;
`
const Submit = styled.button`
    height: 64px;
    width: 180px;
    border-radius: 3px;
    background-color: #FECF09;
    margin-top: 24px;
    color: #101010;
    font-family: Calibre Semibold;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 18px;
    text-align: center;
`