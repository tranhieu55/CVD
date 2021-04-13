import React from 'react';
import styled from "styled-components"


const TextHeader  = styled.span`
display: block;
color: ${({color}) => color};
text-align: ${({textAlign}) => textAlign};
font-size: ${({fontSize}) => fontSize};
font-family: ${({fontFamily}) => fontFamily};
`
export default function Title(props) {
    const { name, textAlign ,fontSize ,fontFamily, color } = props
  return (
    <TextHeader name={name} textAlign={textAlign} fontSize={fontSize} fontFamily={fontFamily} color={color}>
        {name}
    </TextHeader>
  );
}