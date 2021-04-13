import React from 'react';
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const Input  = styled.div`
margin-bottom:26px;
width: 100%;
border-radius: 10px;
margin-right: 72px;
.MuiFormControl-root{
  width: 100%;
}
.MuiOutlinedInput-inputMarginDense{
  padding-top: 16.5px;
  padding-bottom: 10.5px;
}
.edit-cl{
  border-color: rgb(0 0 0);
}

`
const useStyles = makeStyles((theme) => ({
  root: {
    color:'red',
    color: '#222222',
    fontFamily: 'Calibre Regular',
    fontSize: '18px',
    letterSpacing: 0,
    lineHeight: '24px',
  }
}));
export default function TextInput(props) {
    const {name , id, value, error ,helperText,display} = props;
    console.log("123",display)
    const classes = useStyles();
  return (
    <Input>
       <TextField id="outlined-basic"
        className={display == 2 ? "edit-cl" : ""}
        size="small" 
        label={name} 
        variant="outlined" 
        defaultValue={value}
        id={id}
        error={error}
        helperText={helperText}
       />
    </Input>
  );
}