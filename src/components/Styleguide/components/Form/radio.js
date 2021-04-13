import React from 'react';
import styled from "styled-components"
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const RadioForm = styled.div`
`
export default function InputRadio(props) {
    const {name} = props
  return (
    <RadioForm>
        <FormControlLabel value={name} control={<Radio color="black"/>} label={name} />
    </RadioForm>
  );
}
