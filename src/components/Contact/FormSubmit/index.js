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
    <body
            ng-app="landingPageApp"
            class="lpv2"
        >
            {/* <script type="text/javascript" id="defaultFormData">
                window.lpFormDefaults = {
                    textbox3: "",
                    textbox4: "@EMAIL@" || "",
                    textbox5: "",
                    textbox6: "",
                    textbox7: "",
                    textbox8: "",
                }
            </script> */}
            <FormSumits
                name="lpsurveyform"
                ng-controller="landingpage.surveysFormCtrl as formCtrl"
                ng-submit="onSubmit($event)"
                class="surveys-forms"
                method="post"
                novalidate=""
                action="/Response/SurveyLP/54207a5fb757803e44cq6b18858f311efc67-06f09d865ec6800f5gu4527fba754b0312fb?pUrl=https%3A%2F%2Fr1.dotmailer-surveys.com%2F54207a5fb757803e44cq6b18858f311efc67-06f09d865ec6800f5gu4527fba754b0312fb"
            >
                <input name="defaultSubmitAction" type="hidden" value="Complete" /><input
                    name="respondent"
                    type="hidden"
                    value="$RESPONDERGUID$"
                />
                <Forms id="lp-container" ee-show-font-styles="" ee-template-version="1.0">
                    <div id="lp-container-fixed">
                        <div class="ee_dropzone">
                            <div
                                class="ee_element ee_textelement"
                                ee-type="element"
                                data-title="Text"
                            >
                                <div class="ee_editable"><h2>Contact form</h2></div>
                            </div>
                            <div
                                class="ee_element lp-row ee_spacer"
                                ee-type="element"
                                data-title="Spacer"
                            ></div>
                            <div
                                class="ee_element ee_editable ee_textelement"
                                ee-type="element"
                                data-title="Text"
                            >
                                <p >
                                    <font
                                        >Complete this form, we will be in touch shortly.</font>
                                    <br />
                                </p>
                            </div>
                            <div
                                class="ee_customedit ee_sections animate-none ee_element"
                                ee-type="container"
                                data-title="Sections"
                            >
                                <div class="ee_sections_inner" ee-page-container="">
                                    <div
                                        class="ee_container ved-expandcontract"
                                        ee-type="container"
                                        ee-page=""
                                        page-id="1"
                                        page-uuid="5ce18454-004d-45fe-9628-b53b313daafb"
                                        section-logic='{"allow":false,"showByDefault":true,"rules":[],"pageId":1,"pageTitle":"","pageUuid":"5ce18454-004d-45fe-9628-b53b313daafb"}'
                                    >
                                        <div class="ee_dropzone">
                                            <Input
                                                class="ee_customedit ee_textbox ee_element survey-required-answer"
                                            >
                                                <div
                                                    ng-messages="lpsurveyform[3].$error"
                                                    aria-live="assertive"
                                                >
                                                    <div
                                                        class="survey-input-validation-message"
                                                        ng-message="required"
                                                    >
                                                        Please answer the question below
                                                    </div>
                                                </div>
                                                <div
                                                    class="ee_textboxcontent"
                                                >
                                                    <label
                                                        class="ee_editable ee_questiontext"
                                                        for="textbox-3"
                                                        >Name</label>
                                                    <Inputs
                                                        type="text"
                                                        required="required"
                                                        name="3"
                                                        id="textbox-3"
                                                        ng-model="lpForm.textbox3"
                                                        created="2019-12-10T13:53:56.401Z"
                                                    />
                                                </div>
                                            </Input>
                                            <Input
                                                class="ee_customedit ee_textbox ee_element survey-required-answer"
                                                ee-type="element"
                                                landingpage-survey-textbox=""
                                                data-title="Text box (@EMAIL@)"
                                                data-required="jquery|angular|directive|localisation"
                                                data-element-settings='{"labelPosition":"top","id":4,"created":"2019-12-10T13:54:04.742Z","dataFieldAction":"update","questionType":"email","errorMessage":"Please answer the question below","validationMessage":"The format is incorrect","requiredAnswer":true,"dataField":"EMAIL","outOfRangeValidationMesssage":"Number is out of accepted range"}'
                                            >
                                                <div
                                                    ng-messages="lpsurveyform[4].$error"
                                                    aria-live="assertive"
                                                >
                                                    <div
                                                        class="survey-input-validation-message"
                                                        ng-message="email"
                                                    >
                                                        The format is incorrect
                                                    </div>
                                                    <div
                                                        class="survey-input-validation-message"
                                                        ng-message="required"
                                                    >
                                                        Please answer the question below
                                                    </div>
                                                </div>
                                                <div
                                                    class="ee_textboxcontent"
                                                >
                                                    <label
                                                        class="ee_editable ee_questiontext"
                                                        for="textbox-4"
                                                        >Email</label>
                                                    <Inputs
                                                        type="email"
                                                        required="required"
                                                        name="4"
                                                        id="textbox-4"
                                                        ng-model="lpForm.textbox4"
                                                        created="2019-12-10T13:54:04.742Z"
                                                    />
                                                </div>
                                            </Input>
                                            <Input
                                                class="ee_customedit ee_textbox ee_element"
                                                ee-type="element"
                                                landingpage-survey-textbox=""
                                                data-title="Text box"
                                                data-required="jquery|angular|directive|localisation"
                                                data-element-settings='{"labelPosition":"top","id":5,"created":"2019-12-10T13:54:23.255Z","dataFieldAction":"update","questionType":"tel","requiredAnswer":false,"errorMessage":"Please answer the question below","validationMessage":"The format is incorrect"}'
                                            >
                                                <div
                                                    ng-messages="lpsurveyform[5].$error"
                                                    aria-live="assertive"
                                                >
                                                    <div
                                                        class="survey-input-validation-message"
                                                        ng-message="intlTelInput"
                                                    >
                                                        The format is incorrect
                                                    </div>
                                                    <div
                                                        class="survey-input-validation-message"
                                                        ng-message="email"
                                                    >
                                                        The format is incorrect
                                                    </div>
                                                </div>
                                                <div
                                                    class="ee_textboxcontent"
                                                >
                                                    <label
                                                        class="ee_editable ee_questiontext"
                                                        for="textbox-5"
                                                        >Phone</label>
                                                    <Inputs
                                                        type="text"
                                                        allow-dropdown="true"
                                                        lp-survey-phone-number=""
                                                        placeholder="07700 900514"
                                                        name="5"
                                                        id="textbox-5"
                                                        ng-model="lpForm.textbox5"
                                                        created="2019-12-10T13:54:23.255Z"
                                                    />
                                                </div>
                                            </Input>
                                            <Input
                                                class="ee_customedit ee_textbox ee_element"
                                                ee-type="element"
                                                landingpage-survey-textbox=""
                                                data-title="Text box"
                                                data-required="jquery|angular|directive|localisation"
                                                data-element-settings='{"labelPosition":"top","id":6,"created":"2019-12-10T13:54:40.060Z"}'
                                            >
                                                <div
                                                    ng-messages="lpsurveyform[6].$error"
                                                    aria-live="assertive"
                                                ></div>
                                                <div
                                                    class="ee_textboxcontent"
                                                >
                                                    <label
                                                        class="ee_editable ee_questiontext"
                                                        for="textbox-6"
                                                        >Company / Organisation</label>
                                                    <Inputs
                                                        type="text"
                                                        name="6"
                                                        id="textbox-6"
                                                        ng-model="lpForm.textbox6"
                                                        created="2019-12-10T13:54:40.060Z"
                                                    />
                                                </div>
                                            </Input>
                                            <Input
                                                class="ee_customedit ee_textbox ee_element"
                                                ee-type="element"
                                                landingpage-survey-textbox=""
                                                data-title="Text box"
                                                data-required="jquery|angular|directive|localisation"
                                                data-element-settings='{"labelPosition":"top","id":7,"created":"2019-12-10T13:54:46.447Z"}'
                                            >
                                                <div
                                                    ng-messages="lpsurveyform[7].$error"
                                                    aria-live="assertive"
                                                ></div>
                                                <div
                                                    class="ee_textboxcontent"
                                                >
                                                    <label
                                                        class="ee_editable ee_questiontext"
                                                        for="textbox-7"
                                                        >Website</label>
                                                    <Inputs
                                                        type="text"
                                                        name="7"
                                                        id="textbox-7"
                                                        ng-model="lpForm.textbox7"
                                                        created="2019-12-10T13:54:46.447Z"
                                                    />
                                                </div>
                                            </Input>
                                            <Input
                                                class="ee_customedit ee_textbox ee_element survey-required-answer"
                                                ee-type="element"
                                                landingpage-survey-textbox=""
                                                data-title="Text box"
                                                data-required="jquery|angular|directive|localisation"
                                                data-element-settings='{"labelPosition":"top","id":8,"created":"2019-12-10T13:54:55.876Z","dataFieldAction":"update","questionType":"text","requiredAnswer":true,"errorMessage":"Please answer the question below","validationMessage":"The format is incorrect"}'
                                            >
                                                <div
                                                    ng-messages="lpsurveyform[8].$error"
                                                    aria-live="assertive"
                                                >
                                                    <div
                                                        class="survey-input-validation-message"
                                                        ng-message="required"
                                                    >
                                                        Please answer the question below
                                                    </div>
                                                </div>
                                                <div
                                                    class="ee_textboxcontent"
                                                >
                                                    <label
                                                        class="ee_editable ee_questiontext"
                                                        for="textbox-8"
                                                        >Message</label>
                                                    <Textarea
                                                        required="required"
                                                        name="8"
                                                        id="textbox-8"
                                                        ng-model="lpForm.textbox8"
                                                        created="2019-12-10T13:54:55.876Z"
                                                    ></Textarea>
                                                </div>
                                            </Input>
                                            <div
                                                class="ee_customedit ee_consent ee_element survey-required-answer"
                                                ee-type="element"
                                                landingpage-survey-consent=""
                                                data-title="Consent"
                                                data-required="jquery|angular|directive|localisation"
                                                data-element-settings='{"id":9,"created":"2019-12-10T13:55:35.125Z","requiredAnswer":true,"errorMessage":"Please provide your consent by ticking the box"}'
                                            >
                                                <div
                                                    ng-messages="lpsurveyform[9].$error"
                                                    aria-live="assertive"
                                                >
                                                    <div
                                                        class="survey-input-validation-message"
                                                        ng-message="required"
                                                    >
                                                        Please provide your consent by ticking the box
                                                    </div>
                                                </div>
                                                <div
                                                    class="ee_consentcontent"
                                                >
                                                    <div class="option-wrapper">
                                                        <div class="ee_list_item_label">
                                                            <span class="input"
                                                                ><input
                                                                    type="checkbox"
                                                                    required="required"
                                                                    name="9"
                                                                    id="consent-9"
                                                                    ng-model="lpForm.consent9"
                                                                    created="2019-12-10T13:55:35.125Z"
                                                            /></span>
                                                            <label
                                                                class="ee_editable ee_answertext"
                                                                for="consent-9"
                                                                >Subscribe to Convert Digital updates</label
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="ee_customedit ee_confirmation animate-none ee_element"
                                ee-type="container"
                                data-title="Confirmation"
                            >
                                <div class="ee_confirmation_inner">
                                    <div
                                        class="ee_container ved-expandcontract"
                                        ee-type="container"
                                        ee-confirmation=""
                                        confirmation-options='{"redirectType":1,"multiple":"multipleTimes","addressBook":{"id":0,"name":null}}'
                                    >
                                        <div class="ee_dropzone">
                                            <div
                                                class="ee_element ee_textelement"
                                                ee-type="element"
                                                data-title="Text"
                                            >
                                                <div class="ee_editable">
                                                    <h1>Thank you<br /></h1>
                                                </div>
                                            </div>
                                            <div
                                                class="ee_element ee_textelement"
                                                ee-type="element"
                                                data-title="Text"
                                            >
                                                <p >
                                                    This will be displayed when the user submits the form
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ButtonForm
                                class="ee_customedit ee_actionbuttons ee_element"
                                ee-type="element"
                                landingpage-survey-paging=""
                                data-title="Action buttons"
                            >
                                <div
                                    class="ee_actionbuttonscontent"
                                >
                                    <div
                                        class="directive-container"
                                        ee-page-buttons=""
                                        back-text="Back"
                                        next-text="Next"
                                        save-text="Save"
                                        submit-text="Submit"
                                        button-position="default"
                                        button-layout="split"
                                    >
                                        <fieldset class="ng-cloak">
                                            <div class="action-button-container">
                                                <input
                                                    class="paging-button-submit"
                                                    type="submit"
                                                    value="Submit"
                                                />
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </ButtonForm>
                        </div>
                    </div>
                </Forms>
            </FormSumits>
            <script
                src="/assets/scripts/LandingPagesEmbedded1_2"
                name="bundle"
                data-embedded="true"
            ></script>
            <script
                src="/Resources/LandingPagesEmbedded/localised/strings.js"
                name="localisation"
                data-embedded="true"
            ></script>
        </body>
  )
}
