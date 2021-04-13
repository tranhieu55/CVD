import React from 'react';
import styled from "styled-components"
import IconIphone from "../../../../images/phone-black@2x.png"
import IconRight from "../../../../images/phone-black@2x.png"

const Wrapper = styled.button`
    background-color:transparent;
    padding:15px;
    background-color: ${({background}) => background};
    color: ${({color}) => color};
    border: ${({border}) => border};
    width:${({width}) => `${width}px`};
    border-radius: 3px;
    font-family:'Calibre Semibold';
    font-size:18px;
    margin-right:24px;
    img {
      width:16px;
      height:16px;
    }
`
const BgrButton = styled.div`
  margin-right:24px;
  display: flex;
  justify-content:center;
  align-items:center;
  width:${({width}) => `${width}px`};
  height: ${({height}) => `${height}px`};
  background-color: ${({background}) => background};
  button {
    width:166px;
    height: 48px;
    margin-right:0px;
  }
` 
export default function ButtonStyled(props) {
    const {name, background , border , color , icon, width,room,height} = props;
  return (
    <>{ room == 1 ? 
    <BgrButton width={width} background={background} height={height}>
      <Wrapper name={name}  color={color} icon={icon} border={border}>
      {icon == 1 ? <img src={IconIphone}/> : ""} {name}
      </Wrapper>
    </BgrButton>
    :
    <Wrapper width={width} name={name} background={background} color={color} icon={icon} border={border}>
      {icon == 1 ? <img src={IconIphone}/> : ""} {name}
    </Wrapper>
     }
    </>
  );
}
