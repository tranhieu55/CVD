import React from 'react';
import styled from "styled-components"

const Item = styled.div`
display: flex;
width:182px;
height:55px;
margin-bottom:16px;
box-shadow: 4px 4px 12px 0 rgba(0,0,0,0.15);

.color-item {
    width:55px;
    height:55px;
    background-color: ${({color}) => color};
}
.title-color-item {
    margin-left:14px;
    margin-top: 7px;
    span {
        font-family: "Work Sans";
        font-size:14px;
        color:#6F6F6F;
        display: block;
    }
}
`
export default function BoxItem(props) {
  const {color, name} = props
    return (
    <Item color={color} name={name}>
        <div className="color-item"></div>
        <div className="title-color-item">
            <span>{name}</span>
            <span>{color}</span>
        </div>
    </Item>
  );
}
