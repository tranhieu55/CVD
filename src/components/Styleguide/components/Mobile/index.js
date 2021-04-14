import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    color: ${({color}) => `${color}`};
    text-align: ${({textAlign}) => textAlign};
    font-size: ${({fontSize}) => fontSize};
    font-family: ${({fontFamily}) => fontFamily};
    letter-spacing:${({letSpace}) => `${letSpace}px`};
    line-height:${({lineH}) => `${lineH}px`};
    margin-bottom:${({mrb}) => `${mrb}px`};

`
export default function Mobile(props) {
    const {name, fontFamily, fontSize,color ,letSpace,lineH ,mrb} = props;
  return (
    <Wrapper fontFamily={fontFamily} fontSize={fontSize} mrb={mrb} color={color} letSpace={letSpace} lineH={lineH}>
        <span>
            {name}
        </span>
    </Wrapper>
  );
}
