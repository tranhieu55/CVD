import React from 'react';
import styled from "styled-components"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Wrapper = styled.div`
height: 47px;
  .MuiFormControlLabel-root{
    margin-top: 12px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-left: -10px;
    margin-right: 34px;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
  }
  .MuiCheckbox-root{
      color:#101010;
  }
  .MuiTypography-body1 {
    font-family: "Calibre Regular";
    font-size: 18px;
    color: #222222;
    margin-top:5px;
  }
`
export default function CheckBox(props) {
    const {name} = props
  return (
    <Wrapper>
        <FormControlLabel control={<Checkbox name="checkedC" color="black"/>} label={name} />
    </Wrapper>
  );
}
