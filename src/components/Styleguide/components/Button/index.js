import React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
    padding:15px;
    background-color: ${({background}) => background};
    color: ${({color}) => color};
    border: ${({border}) => border};


`
export default function ButtonStyled(props) {
    const {name, background , border , color , icon} = props;
    console.log(name, background , border , color , icon)
  return (
    <Wrapper name={name} background={background} color={color} icon={icon} border={border}>
        <button>
            {name}
        </button>
    </Wrapper>
  );
}
