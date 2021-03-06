import React from "react"
import styled from "styled-components"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"

const Input = styled.div`
  margin-bottom: 26px;
  width: 100%;
  border-radius: 10px;
  margin-right: 72px;
  .MuiFormControl-root {
    width: 100%;
  }
  legend {
    span {
      font-family: "Calibre Semibold";
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 1px;
      color: #6e6e6e;
      font-weight: 600;
    }
  }
  .MuiOutlinedInput-inputMarginDense {
    padding-top: 16.5px;
    padding-bottom: 10.5px;
    font-size: 18px;
    line-height: 24px;
    color: #222222;
    font-family: "Calibre Regular";
  }
  .edit-cl {
    border-color: rgb(0 0 0);
  }

  .MuiFormLabel-root.Mui-focused {
    color: #6e6e6e !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    letter-spacing: 1px;
  }
  .MuiFormHelperText-contained {
    margin-left: 0px;
    margin-right: 0px;
    color: #f10909 !important;
    font-size: 18px !important;
    letter-spacing: 0;
    font-family: "Calibre Regular";
  }
  .MuiOutlinedInput-root {
    border-radius: 3px;
  }

  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    color: #6e6e6e;
    font-family: "Calibre Semibold";
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 16px;
  }
  .MuiFormLabel-root.Mui-error {
    color: #f44336;
    font-family: "Calibre Semibold";
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
  }
`
const useStyles = makeStyles(theme => ({
  root: {
    color: "#222222",
    fontFamily: "Calibre Regular",
    fontSize: "18px",
    letterSpacing: 0,
    lineHeight: "24px",
  },
}))
export default function TextInput(props) {
  const { name, id, value, error, helperText, display } = props
  const classes = useStyles()
  return (
    <Input>
      <TextField
        id="outlined-basic"
        className={`${display === 2 ? "edit-cl" : ""}`}
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
  )
}
