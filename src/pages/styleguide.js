import React from "react"
import Layout from "../components/Layout"
import BoxColorBig from "../components/Styleguide/components/BoxColorBig"
import ListItem from "../components/Styleguide/components/BoxColorBig/itemcolor"
import styled from "styled-components"
import LogoConvert from "../components/Styleguide/components/Logo"
import TextInput from "../components/Styleguide/components/Form/input"
import InputSelect from "../components/Styleguide/components/Form/select"
import InputRadio from "../components/Styleguide/components/Form/radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import CheckBox from "../components/Styleguide/components/Form/checkbox"
import ButtonStyled from "../components/Styleguide/components/Button"
import Title from "../components/Styleguide/components/Header"
import Mobile from "../components/Styleguide/components/Mobile"

const WrapperStyledGuide = styled.div`
  display: flex;
  margin-top: 57px;
  hr {
    margin-top: 16px !important;
    margin-bottom: 36px !important;
    color: #dddddd !important;
  }
`
const WrapperColour = styled.div`
  width: 802px;
  margin-right: 56px;
  margin-left: 76px;
`
const BoxStyleguide = styled.div`
  width: 802px;
  display: flex;
  margin-right: 25px;
`

const BoxColour = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`
const TileColour = styled.div`
  h2 {
    height: 28px;
    width: 72px;
    color: #6f6f6f;
    font-family: "Helvetica Neue Regular";
    font-size: 24px;
    letter-spacing: 0;
    line-height: 29px;
  }
  .w-hr {
    width: 378px;
  }
`
const BoxListItem = styled.div`
  width: 51%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 25px;
  .item-left {
    margin-right: 25px;
  }
`
const WrapperLogog = styled.div``

const WrapperForm = styled.div`
  width: 600px;
  margin-left: 76px;
  margin-top: 135px;
  margin-right: 91px;
  margin-bottom: 70px;
  .form-input {
    margin-top: 40px;
    display: flex;
    .forms-left {
      width: 264px;
      height: 297px;
      margin-right: 72px;
    }
  }
  .checkbox {
    display: flex;
  }
`
const WrapperButton = styled.div`
  display: flex;
  height: 48px;
  margin-top: 87px;
  margin-bottom: 61px;
`
const BoxFormButton = styled.div`
  display: flex;
`
const BoxHeader = styled.div`
  .box-header {
    max-width: 1600px;
    margin-left: 76px;
    margin-right: 194px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 54px;
  }
`
const TileHeader = styled.div`
  margin-left: 76px;
  font-family: "Helvetica Neue Regular";
  color: #6f6f6f;
  font-size: 24px;
  hr {
    margin-right: 196px;
  }
`
const SpanContent = styled.div`
  display: block;
  margin-left: 76px;
  margin-bottom: 54px;
  font-size: 20px;
  font-family: "Calibre Regular";
  color: #222222;
  a {
    color: #555555 !important;
    text-decoration-line: underline !important;
  }
`
const Moblie = styled.div``
const BoxMoblie = styled.div`
  margin-bottom: 95px;
`
const BoxBold = styled.div`
  font-family: "Calibre Semibold";
  font-size: 32px;
  letter-spacing: -0.5px;
  color: #111111;
`
const BoxRegular = styled.div`
  font-family: "Calibre Regular";
  font-size: 24px;
  color: #222222;
  margin-bottom: 80px;
`
const BoxWrapperBold = styled.div`
  margin-left: 76px;
`
const MobileBold = styled.div`
  margin-bottom: 73px;
`
const TitleMoblie = styled.div`
  position: relative;
  margin-bottom: 70px;
  font-family: "Helvetica Neue Regular";
  font-size: 24px;
  color: #6f6f6f;
  .cl-hr::before {
    position: absolute;
    content: "";
    width: 1326px;
    height: 1px;
    background-color: #dddddd;
    bottom: -17px;
  }
`
const FormsRight = styled.div`
  margin-top: 139px;
  margin-left: 87px;
  span {
    height: 20px;
    width: 90px;
    color: #101010;
    font-family: Calibre Medium;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 20px;
    margin-left: 21px;
    &::after {
      content: "\f178";
      font-family: "Font Awesome 5 Pro Regular";
      height: 18px;
      width: 21px;
      line-height: 0px;
      font-size: 20px;
      color: #101010;
      padding: 0px 0.6rem;
    }
  }
`

export default function Styledguid() {
  const [value, setValue] = React.useState("female")

  const handleChangeRadio = event => {
    setValue(event.target.value)
  }
  return (
    <>
      <Layout location="/styleguide">
        <WrapperStyledGuide>
          <WrapperColour>
            <TileColour>
              <h2>Colour</h2>
              <hr />
            </TileColour>
            <BoxStyleguide>
              <BoxColour>
                <BoxColorBig color="#FECF09" name="Primary Colour" />
                <BoxColorBig color="#101010" name="Secondary Colour" />
              </BoxColour>
              <BoxListItem>
                <div className="item-left">
                  <ListItem color="#000000" name="Black" />
                  <ListItem color="#333333" name="Black 2" />
                  <ListItem color="#666666" name="Black 3" />
                </div>
                <div>
                  <ListItem color="#999999" name="Black 4" />
                  <ListItem color="#CCCCCC" name="Black 5" />
                  <ListItem color="#FFFFFF" name="White" />
                </div>
              </BoxListItem>
            </BoxStyleguide>
          </WrapperColour>
          <WrapperLogog>
            <TileColour>
              <h2>Logo</h2>
              <hr className="w-hr" />
            </TileColour>
            <LogoConvert background="black" />
          </WrapperLogog>
        </WrapperStyledGuide>
        <BoxFormButton>
          <WrapperForm>
            <TileColour>
              <h2>Form</h2>
              <hr />
            </TileColour>
            <div className="form-input">
              <div className="forms-left">
                <TextInput name="Input Field" />
                <TextInput
                  name="LABLE"
                  value="Text Field"
                  id="outlined-basic"
                  display="2"
                />
                <TextInput
                  name="LABLE"
                  value="Text Field"
                  id="outlined-size-small"
                />
                <TextInput
                  name="LABLE"
                  value="12345678"
                  id="outlined-error-helper-text"
                  helperText="Please enter a valid contact number"
                  error="error"
                />
              </div>
              <div>
                <InputSelect
                  name="Dropdown Text"
                  id="demo-simple-select-outlined-label"
                  nameSelect={["number1", "number2", "number3"]}
                  lable="lable"
                />

                <InputSelect
                  name="Dropdown Text"
                  id="demo-simple-select-outlined-label"
                  nameSelect={["number4", "number5", "number6"]}
                  lable="lable"
                />

                <InputSelect
                  name="Dropdown Text"
                  id="demo-simple-select-outlined-label"
                  nameSelect={["number4", "number5", "number6"]}
                  lable="lable"
                />
              </div>
            </div>
            <div className="checkbox">
              <div>
                <CheckBox name="Unchecked Box" />
                <CheckBox name="Checked Box" />
              </div>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChangeRadio}
              >
                <InputRadio name="Unchecked Radio" />
                <InputRadio name="Checked Radio" />
              </RadioGroup>
            </div>
          </WrapperForm>
          <FormsRight>
            <WrapperButton>
              <ButtonStyled
                name="(03) 9070 3463"
                background="#FECF09"
                color="#101010"
                icon="1"
                border="none"
                width="208"
                fontSize="18"
              />

              <ButtonStyled
                name="Button"
                background="#FECF09"
                color="#101010"
                icon=""
                border="none"
                width="166"
                fontSize="16"
              />

              <ButtonStyled
                name="Butoon"
                background="#101010"
                color="#FFFFFF"
                icon=""
                border="2px solid #FECF09"
                width="196"
                height="76"
                room="1"
                fontSize="18"
              />
            </WrapperButton>
            <span>Learn more</span>
          </FormsRight>
        </BoxFormButton>

        <BoxHeader>
          <TileHeader>
            <span>Desktop Heading Styles</span>
            <hr />
          </TileHeader>
          <div className="box-header">
            <div>
              <Title
                name="Heading 1"
                textAlign="left"
                letSpace="-1.5"
                fontSize="80px"
                fontFamily="Calibre Bold"
                color="#101010"
              />
              <Title
                name="Heading 2"
                textAlign="left"
                letSpace="-1"
                fontSize="64px"
                fontFamily="Calibre Bold"
                color="#101010"
              />
              <Title
                name="Heading 3"
                textAlign="left"
                letSpace="0"
                fontSize="48px"
                fontFamily="Calibre Semibold"
                color="#101010"
              />
              <Title
                name="Heading 4"
                textAlign="left"
                letSpace="-0.5"
                fontSize="32px"
                fontFamily="Calibre Semibold"
                color="#101010"
              />
              <Title
                name="Heading 5"
                textAlign="left"
                letSpace="-0.5"
                fontSize="28px"
                fontFamily="Calibre Semibold"
                color="#101010"
              />
              <Title
                name="Heading 6"
                textAlign="left"
                letSpace="1"
                fontSize="14px"
                fontFamily="Calibre Semibold"
                color="#999999"
              />
            </div>
            <div>
              <Title
                name="Heading 1"
                textAlign="center"
                letSpace="-1.5"
                fontSize="80px"
                fontFamily="Calibre Bold"
                color="#101010"
              />
              <Title
                name="Heading 2"
                textAlign="center"
                letSpace="-1"
                fontSize="64px"
                fontFamily="Calibre Bold"
                color="#101010"
              />
              <Title
                name="Heading 3"
                textAlign="center"
                letSpace="0"
                fontSize="48px"
                fontFamily="Calibre Semibold"
                color="#101010"
              />
              <Title
                name="Heading 4"
                textAlign="center"
                letSpace="-0.5"
                fontSize="32px"
                fontFamily="Calibre Semibold"
                color="#101010"
              />
              <Title
                name="Heading 5"
                textAlign="center"
                letSpace="-0.5"
                fontSize="28px"
                fontFamily="Calibre Semibold"
                color="#101010"
              />
              <Title
                name="Heading 6"
                textAlign="center"
                letSpace="1"
                fontSize="14px"
                fontFamily="Calibre Semibold"
                color="#999999"
              />
            </div>
            <div>
              <Title
                name="Heading 1"
                textAlign="right"
                letSpace="-1.5"
                fontSize="80px"
                fontFamily="Calibre Bold"
                color="#101010"
              />
              <Title
                name="Heading 2"
                textAlign="right"
                letSpace="-1"
                fontSize="64px"
                fontFamily="Calibre Bold"
                color="#101010"
              />
              <Title
                name="Heading 3"
                textAlign="right"
                letSpace="0"
                fontSize="48px"
                fontFamily="Calibre Semibold"
                color="#101010"
              />
              <Title
                name="Heading 4"
                textAlign="right"
                letSpace="-0.5"
                fontSize="32px"
                fontFamily="Calibre Semibold"
                color="#101010"
              />
              <Title
                name="Heading 5"
                textAlign="right"
                letSpace="-0.5"
                fontSize="28px"
                fontFamily="Calibre Semibold"
                color="#101010"
              />
              <Title
                name="Heading 6"
                textAlign="right"
                letSpace="1"
                fontSize="14px"
                fontFamily="Calibre Semibold"
                color="#999999"
              />
            </div>
          </div>
        </BoxHeader>
        <SpanContent>
          This is an example of a <a>text link</a> in a body of text.
        </SpanContent>
        <BoxWrapperBold>
          <BoxBold>Bold Intro</BoxBold>
          <BoxRegular>Regular Intro</BoxRegular>

          <TitleMoblie>
            <p className="cl-hr">Mobile Heading Styles</p>
          </TitleMoblie>

          <BoxMoblie>
            <Mobile
              name="Mob Heading 1"
              letSpace="-1"
              fontFamily="Calibre Bold"
              fontSize="40px"
              color="#101010"
            />
            <Mobile
              name="Mob Heading 2"
              letSpace="-0.5"
              fontFamily="Calibre Bold"
              fontSize="32px"
              color="#101010"
            />
            <Mobile
              name="Mob Heading 3"
              mrb="14"
              letSpace="0"
              fontFamily="Calibre Semibold"
              fontSize="32px"
              color="#111111"
            />
            <Mobile
              name="Mob Heading 4"
              letSpace="-0.5"
              fontFamily="Calibre Semibold"
              fontSize="24px"
              color="#101010"
            />
          </BoxMoblie>
          <MobileBold>
            <Mobile
              name="Mobile Bold Intro"
              lineH="26"
              mrb="16"
              letSpace="-0.25"
              fontFamily="Calibre Semibold"
              fontSize="24px"
              color="#101010"
            />
            <Mobile
              name="Mobile Regular Intro"
              lineH="24"
              letSpace="0"
              fontFamily="Calibre Regular"
              fontSize="20px"
              color="#222222"
              end="end"
            />
          </MobileBold>
        </BoxWrapperBold>
      </Layout>
    </>
  )
}
