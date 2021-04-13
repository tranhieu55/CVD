import React from 'react';
import styled from "styled-components"


const TextHeader  = styled.span`
display: block;
color: ${({color}) => color};
text-align: ${({textAlign}) => textAlign};
font-size: ${({fontSize}) => fontSize};
font-family: ${({fontFamily}) => fontFamily};
letter-spacing: ${({letSpace}) => `${letSpace}px`};
line-height: ${({lineH}) => `${lineH}px`};
`
export default function Title(props) {
    const { name, textAlign ,fontSize ,fontFamily, color ,letSpace,lineH} = props
  return (
    <TextHeader className="test" name={name} textAlign={textAlign} letSpace={letSpace} lineH={lineH} fontSize={fontSize} fontFamily={fontFamily} color={color}>
        {name}
    </TextHeader>
  );
}