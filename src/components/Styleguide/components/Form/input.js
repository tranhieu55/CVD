import React from 'react';
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const Input  = styled.div`
margin-bottom:24px;
margin-right:72px;

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
    const {name , id, value, error ,helperText} = props;
    const classes = useStyles();
  return (
    <Input>
       <TextField id="outlined-basic"
        className={classes.root}
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