import React from "react"
import styled from "styled-components"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const Option = styled.div`
  margin-bottom: 24px;
  margin-top: 5px;
  .MuiFormControl-root {
    width: 264px;
    .MuiOutlinedInput-input {
      padding: 12px 14px;
      font-size: 18px;
      line-height: 24px;
      color: #222222;
      font-family: "Calibre Regular";
      font-weight: 400;
    }
  }
  .MuiOutlinedInput-input {
    padding: 9.5px 14px;
    color: #222222;
    font-family: "Calibre Regular";
    letter-spacing: 0;
  }
  .MuiSelect-outlined {
    border-radius: 3px;
  }
  .test {
    top: -6px;
    background-color: white;
    color: #6e6e6e;
    font-family: "Calibre Semibold";
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 16px;
  }
  .MuiOutlinedInput-root {
    border-radius: 3px !important;
  }
  .MuiFormLabel-root.Mui-focused {
    color: #6e6e6e !important;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: #6e6e6e !important;
  }
`
export default function InputSelect(props) {
  const [age, setAge] = React.useState("")

  const handleChange = event => {
    setAge(event.target.value)
  }
  const { id, name, lable, nameSelect, checked } = props
  return (
    <Option>
      <FormControl variant="outlined">
        <InputLabel id={id} className="test">
          {name}
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label={lable}
          className="test"
          checked={checked}
        >
          {nameSelect?.map((item, index) => (
            <MenuItem value={10}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Option>
  )
}
