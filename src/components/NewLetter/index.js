import React, { useState } from "react"
import styled from "styled-components"

export default function NewLetter({ dataFooter }) {
  const data = dataFooter
    ? dataFooter.edges[0]?.node.body?.filter(
        item => item.type === "newsletter_signup"
      )
    : []
  const [errors, setError] = useState("")
  const [vali, setVali] = useState("")
  const validateEmail = e => {
    var email = e.target.value

    if (email.length > 0) {
      setError("")
      setVali(email)
    } else {
      setError("This field is required")
      setVali(email)
    }
  }
  const ValiButton = vali => {
    if (vali !== "") {
      setError("")
    } else {
      setError("This field is required")
    }
  }
  return (
    <Container>
      <Title>
        {data[0]?.primary?.title?.map(item => (item?.text ? item?.text : item))}
      </Title>
      <Text>
        {data[0]?.primary?.title_side?.map(item =>
          item?.text ? item?.text : item
        )}
      </Text>
      <DivInput>
        <Input
          boder = {errors}
          onChange={e => validateEmail(e)}
          type="email"
          placeholder={data[0]?.primary?.form_submit_placeholder?.map(item =>
            item?.text ? item?.text : item
          )}
        ></Input>
        <Errors hienthi={errors}>{errors}</Errors>
      </DivInput>
      <Submit onClick={() => ValiButton(vali)}>
        {data[0]?.primary?.text_button?.map(item =>
          item?.text ? item?.text : item
        )}
      </Submit>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: block;
    padding: 0 16px;
  }
  @media (min-width: 600px) {
    display: block;
    padding: 0 86px;
  }
  @media (min-width: 768px) {
    width: 420px;
    margin: 0 auto;
    padding: 0;
  }
  @media (min-width: 992px) {
    display: flex;
    margin: 0px 16px;
    border-bottom: 1px solid #92939b;
    padding: 0 0px;
    height: 208px;
    width: auto;
  }
  @media (min-width: 1280px) {
    height: 208px;
    width: 1240px;
    margin: 0px auto;
    display: flex;
    border-bottom: 1px solid #92939b;
  }
`
const Title = styled.h1`
  color: #ffffff;
  font-family: Calibre Bold;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 38px;
  margin-top: 80px;
  margin-right: 86px;
  margin-bottom: 0px;
  @media (max-width: 600px) {
    padding-top: 48px;
    text-align: center;
    margin-top: 0px;
    margin-right: 0px;
  }
  @media (min-width: 600px) {
    padding-top: 48px;
    text-align: center;
    margin-top: 0px;
    margin-right: 0px;
  }
  @media (min-width: 992px) {
    padding-top: 0px;
    margin-top: 60px;
  }
  @media (min-width: 1280px) {
    color: #ffffff;
    font-family: Calibre Bold;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.5px;
    line-height: 38px;
    margin-top: 80px;
    margin-right: 86px;
    margin-bottom: 0px;
  }
`
const Text = styled.p`
  width: 253px;
  opacity: 0.7;
  color: #ffffff;
  font-family: Calibre Medium;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 26px;
  margin-top: 78px;
  margin-right: 77px;
  margin-bottom: 0px;
  @media (max-width: 600px) {
    margin-top: 0px;
    text-align: center;
    width: auto;
    height: auto;
    padding: 0px 16px;
  }
  @media (min-width: 600px) {
    margin-top: 0px;
    text-align: center;
    width: auto;
    height: auto;
    padding: 0px 16px;
    margin-right: 0px;
  }
  @media (min-width: 992px) {
    margin-top: 70px;
    padding: 0px 56px;
    text-align: left;
  }
  @media (min-width: 1188px) {
    margin-top: 70px;
    margin-right: 46px;
    margin-left: 46px;
    padding: 0px 16px;
  }
  @media (min-width: 1280px) {
    width: 253px;
    opacity: 0.7;
    color: #ffffff;
    font-family: Calibre Medium;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;
    margin-top: 78px;
    margin-right: 77px;
    margin-left: 0px;
    padding: 0px;
  }
`
const Input = styled.input`
  height: 48px;
  width: 393px;
  color: #bebfc6;
  font-family: "Calibre Regular";
  font-size: 18px;
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 78px;
  border: ${props => props.boder === "This field is required" ? '1px solid #f10909' :  '1px solid #92939b'};
  border-radius: 3px;
  box-sizing: border-box;
  background: transparent;
  padding: 15px 15px 12px 15px;
  margin-right: 18px;
  position: relative;
  :focus-visible {
    outline: none;
  }
  :not(:placeholder-shown):invalid{
    border: 2px solid #F10909;
  }
  ::-webkit-input-placeholder {
    /* Edge */
    height: 24px;
    line-height: 24px;
    font-size: 18px;
    color: #bebfc6;
    position: absolute;
    top: 30%;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    height: 24px;
    line-height: 24px;
    font-size: 18px;
    color: #bebfc6;
    position: absolute;
    top: 30%;
  }

  ::placeholder {
    height: 24px;
    line-height: 24px;
    font-size: 18px;
    color: #bebfc6;
    position: absolute;
    top: 30%;
  }
  div {
    height: 24px;
  }
  @media (max-width: 600px) {
    margin-top: 16px;
    width: 100%;
    margin-right: 0px;
  }
  @media (min-width: 600px) {
    margin-top: 16px;
    width: 100%;
    margin-right: 0px;
  }
  @media (min-width: 992px) {
    width: auto;
    margin-right: 18px;
    margin-top: 73px;
  }
  @media (min-width: 1280px) {
    height: 48px;
    width: 393px;
    color: #bebfc6;
    font-family: Calibre Regular;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
    margin-top: 78px;
    border: ${props => props.boder === "This field is required" ? '1px solid #f10909' :  '1px solid #92939b'};
    border-radius: 3px;
    box-sizing: border-box;
    background: transparent;
    padding: 15px 15px 12px 15px;
    margin-right: 18px;
    :focus-visible {
      outline: none;
    }
    ::-webkit-input-placeholder {
      /* Edge */
      height: 24px;
      line-height: 24px;
      font-size: 18px;
      color: #bebfc6;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      height: 24px;
      line-height: 24px;
      font-size: 18px;
      color: #bebfc6;
    }

    ::placeholder {
      height: 24px;
      line-height: 26px;
      font-size: 18px;
      color: #bebfc6;
    }
  }
`
const Submit = styled.button`
  background: transparent;
  box-sizing: border-box;
  height: 48px;
  border: 2px solid #fecf09;
  border-radius: 3px;
  color: #ffffff;
  font-family: "Calibre Semibold";
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 22px;
  text-align: center;
  margin-top: 78px;
  padding: 14px 45px;
  :hover {
    color: #101010;
    background: #fecf09;
    border: 2px solid #fecf09;
  }
  :focus {
    outline: none;
  }
  @media (max-width: 600px) {
    margin-top: 16px;
    width: 100%;
    padding: 13px 45px;
  }
  @media (min-width: 600px) {
    margin-top: 16px;
    width: 100%;
    padding: 13px 45px;
  }
  @media (min-width: 992px) {
    width: auto;
    margin-top: 73px;
  }
  @media (min-width: 1280px) {
    background: transparent;
    box-sizing: border-box;
    height: 48px;
    border: 2px solid #fecf09;
    border-radius: 3px;
    color: #ffffff;
    font-family: Calibre Semibold;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 22px;
    text-align: center;
    margin-top: 78px;
    padding: 14px 45px;
  }
`
const DivInput = styled.div`
  display: block;
`
const Errors = styled.p`
  color: #f10909;
  padding-top: ${props => (props.hienthi === "" ? "0px" : "10px")};
  text-align: left;
  display: ${props => (props.hienthi === "" ? "none" : "block")};
  margin-bottom: 0px;
  line-height: 24px;
  font-size: 18px;
  font-family: "Calibre Regular";
`
