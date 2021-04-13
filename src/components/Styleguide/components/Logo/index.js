import React from 'react';
import styled from "styled-components"
import LogoWhite from "../../../../images/logo_white.png"
import LogoBlack from "../../../../images/logo-black.png"

const BoxLogo = styled.div`
width:208px;
height: 58px;
padding: 14px;
background-color: ${({background}) => background};
.logo-image{
    width:150px;
    display:block;
    margin:auto;
}
.bgr-white {
    background-color:white;
}
`
const Wrapper =  styled.div`

`

export default function LogoConvert(props) {
    const {background} =  props;
    console.log(props)
  return (
    <Wrapper>
        <BoxLogo className="bgr-white">
            <div>
                <img className="logo-image"  src={LogoBlack} alt=""/>        
            </div>
        </BoxLogo>
        <BoxLogo background={background}>
            <div>
                <img className="logo-image"  src={LogoWhite} alt=""/>        
            </div>
        </BoxLogo>
    </Wrapper>
  );
}
