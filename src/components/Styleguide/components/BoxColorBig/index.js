import React from 'react';
import styled from "styled-components"

const BoxColor = styled.div`
width: 182px;
height:197px;
box-shadow: 4px 4px 12px 0 rgba(0,0,0,0.15);
.item-color {
    width:100%;
    height:84px;
    background-color: ${({color}) => color};
}
.title-color {
    padding-left:16px;
    padding-top:16px;
    span {
        font-family: "Work Sans";
        font-size:14px;
        color:#6F6F6F;
        display: block;
    }
}
`


export default function BoxColorBig(props) {

    const {color, name} = props ? props : ""
  return (
    <BoxColor color={color} name={name} {...props}>
        <div className="item-color">
        </div>
        <div className="title-color">
            <span>
                {name}
            </span>
            <span>
                {color}
            </span>
        </div>
    </BoxColor>
  );
}
