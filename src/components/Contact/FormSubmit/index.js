import React from "react"
import styled from "styled-components"

export default function FormSumit({ input }) {
  const data = input
  const FormSumits = styled.form`
    height: 802px;
    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 8px 8px 30px 0 rgba(0, 0, 0, 0.07);
    position: absolute;
    top: 186px;
    right: 180px;
    @media (max-width: 600px) {
      left: 0px;
      right: 0px;
      margin: 0px 16px;
      top: 391px;
      height: auto;
    }
    @media (max-width: 360px) {
      left: 0px;
      right: 0px;
      margin: 0px 16px;
      top: 391px;
      height: 718px;
    }
    @media (max-width: 320px) {
      left: 0px;
      right: 0px;
      margin: 0px 16px;
      top: 435px;
      height: 718px;
    }
    @media (min-width: 600px) {
      right: 16px;
      width: 310px;
      height: 770px;
    }
    @media (min-width: 768px) {
      width: 340px;
      right: 30px;
      height: 770px;
    }
    @media (min-width: 1024px) {
      right: 40px;
      width: 480px;
      height: 802px;
    }
    @media (min-width: 1200px) {
      right: 40px;
      width: 480px;
    }
    @media (min-width: 1444px) {
      right: 65px;
      width: 604px;
    }
    @media (min-width: 1540px) {
      right: 110px;
    }
    @media (min-width: 1600px) {
      right: 180px;
    }
  `
  const Forms = styled.div`
    padding: 48px 48px;
    @media (max-width: 600px) {
      padding: 33px 24px 27px;
    }
    @media (min-width: 600px) {
      padding: 30px 24px;
    }
    @media (min-width: 1024px) {
      padding: 48px 48px;
    }
  `
  const Input = styled.input`
    height: 64px;
    margin-bottom: 24px;
    width: 100%;
    border-radius: 3px;
    border: 2px solid #cccccc;
    padding: 0px;
    padding-right: 24px;
    text-indent: 14px;
    box-shadow: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    animation-name: mui-auto-fill-cancel;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    padding-top: 6.5px;

    :focus {
      outline: none;
      border: 2px solid #6e6e6e;
    }
    :active ~ label,
    :focus ~ label,
    :not(:placeholder-shown) ~ label {
      color: #999999;
      font-family: Calibre Semibold;
      font-size: 14px;
      letter-spacing: 1px;
      line-height: 24px;
      position: absolute;
      transform: translate(11px, -6px) scale(1);
      top: 0;
      left: 1px;
      text-transform: uppercase;
      background: #ffffff;
      padding: 0px 5px;
    }
    :not(:placeholder-shown) {
      border: 1px solid #6e6e6e;
    }

    :focus ~ label {
      color: #6e6e6e;
    }
    @media (max-width: 600px) {
      margin-bottom: 16px;
      padding-top: 0px;
      text-indent: 14px;
      :focus {
        outline: none;
        border: 2px solid #6e6e6e;
      }
      :focus ~ label {
        color: #6e6e6e;
        font-family: Calibre Semibold;
        font-size: 14px;
        letter-spacing: 1px;
        line-height: 24px;
        position: absolute;
        transform: translate(11px, -6px) scale(1);
        top: 0px;
        left: 0px;
        background: #ffffff;
        padding: 0px 5px;
        text-transform: uppercase;
      }
      :not(:placeholder-shown) ~ label {
        color: #999999;
        font-family: Calibre Semibold;
        font-size: 14px;
        letter-spacing: 1px;
        line-height: 24px;
        position: absolute;
        transform: translate(11px, -6px) scale(1);
        top: 0px;
        left: 0px;
        background: #ffffff;
        padding: 0px 5px;
        text-transform: uppercase;
      }
      :not(:placeholder-shown) {
        border: 2px solid #6e6e6e;
      }
    }

    color: #222222;
    font-family: Calibre Regular;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
    // height: 62px;
  `
  const Inputs = styled.div`
    position: relative;
    width: 100%;
    input {
      border: 2px solid #cccccc;
      border-radius: 3px;
      background-color: #ffffff;
    }

    label {
      color: #b6b6b6;
      font-family: Calibre Semibold;
      font-size: 20px;
      letter-spacing: 0;
      line-height: 24px;
      position: absolute;
      left: 14px;
      top: 30px;
      transition: 0.2s;
      pointer-events: none;
    }

    input:active ~ label {
      top: 0;
      color: #6e6e6e;
      font-family: Calibre Semibold;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1px;
      line-height: 16px;
    }

    input:focus ~ label {
      color: #6e6e6e;
      font-family: Calibre Semibold;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1px;
      line-height: 16px;
      top: 0;
      text-transform: uppercase;
    }

    input:not(:placeholder-shown) ~ label {
      color: #999999;
      font-family: Calibre Semibold;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1px;
      line-height: 16px;
      top: 0;
      text-transform: uppercase;
    }

    input:not(:placeholder-shown) {
      // border: 2px solid #cccccc;
    }
    textarea {
      border: 2px solid #cccccc;
      border-radius: 3px;
      background-color: #ffffff;
      min-height: 178px;
    }

    label {
      color: #b6b6b6;
      font-family: Calibre Semibold;
      font-size: 20px;
      letter-spacing: 0;
      line-height: 24px;
      position: absolute;
      left: 14px;
      top: 30px;
      transition: 0.2s;
      pointer-events: none;
    }

    textarea:active ~ label {
      top: 0;
      color: #6e6e6e;
      font-family: Calibre Semibold;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1px;
      line-height: 16px;
    }

    textarea:focus ~ label {
      color: #6e6e6e;
      font-family: Calibre Semibold;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1px;
      line-height: 16px;
      top: 0;
      text-transform: uppercase;
    }

    textarea:not(:placeholder-shown) ~ label {
      color: #999999;
      font-family: Calibre Semibold;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1px;
      line-height: 16px;
      top: 0;
      text-transform: uppercase;
    }

    textarea:not(:placeholder-shown) {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      border: 1px solid #6e6e6e;
=======
      // border: 2px solid #cccccc;
>>>>>>> Stashed changes
=======
      // border: 2px solid #cccccc;
>>>>>>> Stashed changes
    }
    label {
      color: #b6b6b6;
      font-family: Calibre Regular;
      font-size: 20px;
      letter-spacing: 0;
      line-height: 24px;
      box-shadow: none;
      border-top: 0px;
      position: absolute;
      transform: translate(24px, 24px) scale(1);
      top: 0;
      left: 0;
    }
    @media (max-width: 600px) {
      label {
        transform: translate(24px, 22px) scale(1);
      }
    }
  `
  const Textarea = styled.textarea`
    width: 100%;
    height: 178px;
    border-radius: 5px;
    box-shadow: 8px 8px 30px 0 rgba(0, 0, 0, 0.07);
    margin-bottom: 14px;
    box-sizing: border-box;
    animation-name: mui-auto-fill-cancel;
    border-radius: 3px;
    border: 2px solid #cccccc;
    padding-top: 20px;
    padding-left: 14px;
    padding-right: 24px;
    box-shadow: none;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    :active ~ label,
    :focus ~ label,
    :not(:placeholder-shown) ~ label {
      color: #999999;
      font-family: Calibre Semibold;
      font-size: 14px;
      letter-spacing: 1px;
      line-height: 15px;
      position: absolute;
      transform: translate(11px, -6px) scale(1);
      top: 0;
      left: 1px;
      text-transform: uppercase;
      background: #ffffff;
      padding: 0px 5px;
    }
    :focus ~ label {
      color: #6e6e6e;
    }
    :focus {
      outline: none;
      border: 2px solid #6e6e6e;
    }
    :not(:placeholder-shown) {
      border: 1px solid #6e6e6e;
    }

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
    @media (max-width: 600px) {
      text-indent: 14px;
      padding-left: 0px;
      margin-bottom: 6px;

      :focus {
        outline: none;
        border: 2px solid #6e6e6e;
      }
      :focus ~ label {
        color: #6e6e6e;
        font-family: Calibre Semibold;
        font-size: 14px;
        letter-spacing: 1px;
        line-height: 24px;
        position: absolute;
        transform: translate(11px, -6px) scale(1);
        top: 0;
        left: 0px;
        background: #ffffff;
        padding: 0px 5px;
        text-transform: uppercase;
      }
      :not(:placeholder-shown) ~ label {
        color: #999999;
        font-family: Calibre Semibold;
        font-size: 14px;
        letter-spacing: 1px;
        line-height: 24px;
        position: absolute;
        transform: translate(11px, -6px) scale(1);
        top: 0px;
        left: 0px;
        background: #ffffff;
        padding: 0px 5px;
        text-transform: uppercase;
      }
      :not(:placeholder-shown) {
        border: 2px solid #6e6e6e;
      }
    }

    color: #222222;
    font-family: Calibre Regular;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
    resize: none;
  `
  const ButtonForm = styled.button`
    height: 64px;
    width: 180px;
    border-radius: 3px;
    background-color: #fecf09;
    border-color: #fecf09;
    color: #101010;
    font-family: Calibre Semibold;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 18px;
    text-align: center;
    padding: 27px 0px;
    border-width: 0px;
    @media (max-width: 600px) {
      width: 100%;
      font-size: 20px;
    }
    :focus {
      outline: none;
    }
  `
  return (
    <FormSumits
      name="lpsurveyform"
      ng-controller="landingpage.surveysFormCtrl as formCtrl"
      ng-submit="onSubmit($event)"
      class="surveys-forms"
      method="post"
      novalidate=""
      action="/Response/SurveyLP/54207a5fb757803e44cq6b18858f311efc67-06f09d865ec6800f5gu4527fba754b0312fb?pUrl=https%3A%2F%2Fr1.dotmailer-surveys.com%2F54207a5fb757803e44cq6b18858f311efc67-06f09d865ec6800f5gu4527fba754b0312fb"
    >
      <Forms>
        {data ? (
          data.fields?.map((item, index) => {
            if (item?.type === "text") {
              return (
                <Inputs>
                  <Input size="lg" type="text" placeholder=" " />
                  <label>
                    {item?.placeholder?.map(item =>
                      item?.text ? item?.text : item
                    )}
                  </label>
                </Inputs>
              )
            }
            if (item?.type === "textarea") {
              return (
                <Inputs>
                  <Textarea size="lg" type="text" placeholder=" " />
                  <label>
                    {item?.placeholder?.map(item =>
                      item?.text ? item?.text : item
                    )}
                  </label>
                </Inputs>
              )
            }
            return null
          })
        ) : (
          <></>
        )}
        <a href="#">
          <ButtonForm>Submit</ButtonForm>
        </a>
      </Forms>
    </FormSumits>
  )
}
