import React from 'react';
import styled from "styled-components"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Option = styled.div`
  margin-bottom:24px;
 .MuiFormControl-root {
    width:264px;
  }
  .MuiOutlinedInput-input {
    padding: 9.5px 14px;
  }
  .MuiSelect-outlined.MuiSelect-outlined {
  }
  .test {
    top:-6px;
  }
`
export default function InputSelect(props) {
const [age, setAge] = React.useState('');

const handleChange = (event) => {
    setAge(event.target.value);
  };
  const {id , name , lable ,nameSelect} = props
  console.log("lee",nameSelect)
  return (
    <Option>
        <FormControl variant="outlined">
        <InputLabel id={id} className="test">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label={lable}
          className="test"
        >
          {nameSelect.map((item,index) => (
              <MenuItem value={10}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Option>
  );
}
