import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    color: ${({color}) => color};
    text-align: ${({textAlign}) => textAlign};
    font-size: ${({fontSize}) => fontSize};
    font-family: ${({fontFamily}) => fontFamily};

`
export default function Mobile(props) {
    const {name, fontFamily, fontSize,color ,end} = props;
  return (
    <Wrapper fontFamily={fontFamily} fontSize={fontSize} color={color} end={end}>
        <span>
            {name}
        </span>
    </Wrapper>
  );
}
