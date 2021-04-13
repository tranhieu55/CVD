import React from 'react';
import styled from "styled-components"
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const RadioForm = styled.div`
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
  .MuiRadio-root {
    color:#101010 !important;
  }
`
export default function InputRadio(props) {
    const {name} = props
  return (
    <RadioForm>
        <FormControlLabel value={name} control={<Radio color="black"/>} label={name} />
    </RadioForm>
  );
}
