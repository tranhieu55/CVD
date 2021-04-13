import React from 'react';
import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Checkbox from '@material-ui/core/Checkbox';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));
const Wrapper = styled.div`
  margin-bottom:30px;
  margin-left:76px;
  input {
    font-family:'Calibre Regular';
    font-size:18px;
    color:#222222;
  }
  span {
    font-family: "Calibre Semibold";
    font-size: 14px;
  }
  .MuiFormControl-root {
    width:264px;
    .fRSElf .MuiOutlinedInput-input{
      padding: 14.5px 14px;
    }
  }
  .MuiOutlinedInput-input {
    padding: 9.5px 14px;
  }
  .MuiSelect-outlined.MuiSelect-outlined {
  }
  .test {
    top:-6px;
  }
  .MuiCheckbox-root {
    color: rgb(0 0 0);
  }
  .MuiRadio-root {
    color: rgb(0 0 0);
  }
`
export default function Form(props) {
  const classes = useStyles();
  const {type , placeholder ,lable} = props;
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = React.useState('female');

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };
  return (
    <Wrapper>
        <TextField id="outlined-basic" size="small" label="Input Field" variant="outlined" />
        <TextField id="outlined-basic" size="small" label="TextField" variant="outlined" placeholder="TextField"/>
        <TextField
          label="LABLE"
          id="outlined-size-small"
          defaultValue="Text Field"
          variant="outlined"
          size="small"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="LABLE"
          defaultValue="12345678"
          helperText="Please enter a valid contact number"
          variant="outlined"
          size="small"
        />

        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" className="test">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" className="test">label</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="label"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel control={<Checkbox name="checkedC" color="black"/>} label="Uncontrolled" />
      <FormControlLabel control={<Checkbox name="checkedC" color="black"/>} label="Uncontrolled" />
      {/* //RAdio */}
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeRadio}>
        <FormControlLabel value="male" control={<Radio color="black"/>} label="Male" />
      </RadioGroup>
       <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeRadio}>
        <FormControlLabel value="female" control={<Radio color="black"/>} label="Female" />
      </RadioGroup>
    </Wrapper>
  );
}
