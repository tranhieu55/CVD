import React from 'react';
import Layout from '../components/Layout';
import BoxColorBig from '../components/Styleguide/components/BoxColorBig';
import ListItem from '../components/Styleguide/components/BoxColorBig/itemcolor';
import styled from "styled-components"
import LogoConvert from '../components/Styleguide/components/Logo';
import TextInput from '../components/Styleguide/components/Form/input';
import InputSelect from '../components/Styleguide/components/Form/select';
import InputRadio from '../components/Styleguide/components/Form/radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import CheckBox from '../components/Styleguide/components/Form/checkbox';
import ButtonStyled from '../components/Styleguide/components/Button';
import Title from '../components/Styleguide/components/Header';
import Mobile from '../components/Styleguide/components/Mobile';


const WrapperStyledGuide = styled.div`
    display:flex;
    hr {
        margin-top:16px!important;
        margin-bottom:36px!important;
        color:#DDDDDD!important
    }

`
const WrapperColour = styled.div`
    width:802px;
    margin-right:56px;
    margin-left:76px;

`
const BoxStyleguide = styled.div`
    width:802px;
    display: flex;
    margin-right:25px;
`

const BoxColour = styled.div`
    width:50%;
    display:flex;
`
const TileColour = styled.div`
    h2 {
        height: 28px;
        width: 72px;
        color: #6F6F6F;
        font-family: "Helvetica Neue Regular";
        font-size: 24px;
        letter-spacing: 0;
        line-height: 29px;
    }
    .w-hr {
        width:378px;
    }
  
`
const BoxListItem = styled.div`
    width:50%;
    display:flex;
    flex-wrap:wrap;
    .item-left {
        margin-right:25px;
    }
    
`
const WrapperLogog = styled.div``


const WrapperForm = styled.div`
    width:600px;
    margin-left:76px;
    margin-top:150px;
    margin-right:  91px;
    margin-bottom:38px;
    .form-input {
        margin-top:40px;
        display: flex;
        
    }
    .checkbox {
        display: flex;
    }
`
const WrapperButton = styled.div`
    margin-top:240px;
    display: flex;
    height: 48px;
`
const BoxFormButton = styled.div`
    display: flex;
`
const BoxHeader = styled.div`
.box-header {
    max-width:1600px;
    margin-left:76px;
    margin-right:194px;
    display:flex;
    justify-content:space-between;
    margin-bottom:54px;
}

`
const TileHeader = styled.div`
    margin-left:76px;
    font-family:"Helvetica Neue Regular";
    color:#6F6F6F;
    font-size:24px;
    hr {
        margin-right: 196px;
    }
`
const SpanContent = styled.div`
    display: block;
    margin-left:76px;
    margin-bottom:54px;
    font-size: 20px;
    font-family: 'Calibre Regular';
    color:#222222;
    a {
       color:#555555!important;
       text-decoration-line: underline !important;
    }
`
const Moblie = styled.div``
const BoxMoblie = styled.div`
    margin-bottom:100px;
`
const BoxBold = styled.div`
    font-family:'Calibre Semibold';
    font-size:32px;
    letter-spacing:-0.5px;
    color:#111111;

`
const BoxRegular = styled.div`
    font-family: 'Calibre Regular';
    font-size:24px;
    color:#222222;
    margin-bottom:100px;
`
const BoxWrapperBold = styled.div`
    margin-left:76px;
`
const MobileBold = styled.div`
    margin-bottom:54px;
`
const TitleMoblie = styled.div`
    position: relative;
    margin-bottom:54px;
    font-family: 'Helvetica Neue Regular';
    font-size:24px;
    color:#6F6F6F;
    .cl-hr::before {
        position: absolute;
        content:"";
        width:1326px;
        height: 1px;
        background-color:#DDDDDD;
        bottom:-17px;
    }

`


export default function Styledguid() {
    const [value, setValue] = React.useState('female');

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
    };
  return (
    <>
     <Layout location="/we-do">
     <WrapperStyledGuide>
            <WrapperColour>
                <TileColour>
                    <h2>Colour</h2>
                    <hr />
                </TileColour>
                <BoxStyleguide>
                    <BoxColour>
                        <BoxColorBig color="#FECF09" name="Primary Colour"/>
                        <BoxColorBig color="#101010" name="Secondary Colour"/>
                    </BoxColour>
                    <BoxListItem>
                        <div className="item-left">
                            <ListItem color="#000000" name="Black"/>
                            <ListItem color="#333333" name="Black 2"/>
                            <ListItem color="#666666" name="Black 3"/>
                        </div>
                        <div>
                            <ListItem color="#999999" name="Black 4"/>
                            <ListItem color="#CCCCCC" name="Black 5"/>
                            <ListItem color="#FFFFFF" name="White"/>
                        </div>
                    </BoxListItem>
                </BoxStyleguide>
            </WrapperColour>
            <WrapperLogog>
                <TileColour>
                    <h2>Logo</h2>
                    <hr className="w-hr"/>
                </TileColour>
                <LogoConvert background="black"/>
            </WrapperLogog>
        </WrapperStyledGuide>
        <BoxFormButton>
            <WrapperForm>
            <TileColour>
                <h2>Form</h2>
                <hr />
            </TileColour>
            <div className="form-input">
                <div>
                    <TextInput name="Input Field"/>
                    <TextInput name="LABLE" value="Text Field" id="outlined-basic" display="2"/>
                    <TextInput name="LABLE" value="Text Field" id="outlined-size-small"/>
                    <TextInput name="LABLE" 
                        value="12345678" 
                        id="outlined-error-helper-text" 
                        helperText="Please enter a valid contact number" 
                        error="error"
                    />
                </div>
                <div>
                    <InputSelect name="Dropdown Text" 
                        id="demo-simple-select-outlined-label"
                        nameSelect={['number1','number2','number3']}
                        lable="lable"/>

                    <InputSelect name="Dropdown Text" 
                        id="demo-simple-select-outlined-label"
                        nameSelect={['number4','number5','number6']}
                        lable="lable"/>

                    <InputSelect name="Dropdown Text" 
                        id="demo-simple-select-outlined-label"
                        nameSelect={['number4','number5','number6']}
                        lable="lable"/>
                </div>
            </div>
            <div className="checkbox">
                <div>
                    <CheckBox name="Unchecked Box" />
                    <CheckBox name="Checked Box"/> 
                </div>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeRadio}>
                    <InputRadio name="Unchecked Radio"/>
                    <InputRadio name="Checked Radio"/>
                </RadioGroup>
            </div>
        </WrapperForm>
            <WrapperButton>
            <ButtonStyled 
                name="(03) 9070 3463" 
                background="#FECF09" 
                color="#101010" icon='1'
                border="none" 
                width="208"/>

            <ButtonStyled 
                name="Button" 
                background="#FECF09" 
                color="#101010" icon="" 
                border="none" 
                width="166"/>

            <ButtonStyled 
                name="Butoon" 
                background="#101010" 
                color="#FFFFFF" icon="" 
                border="1px solid #FECF09" 
                width="196"
                height="76"
                room="1"    
                />

            <ButtonStyled 
                name="Learn more" 
                background="transparent" 
                color="#101010" icon="" 
                border="none" 
                width="166"/>

         </WrapperButton> 
        </BoxFormButton>
        
        <BoxHeader>
        <TileHeader>
            <span>Desktop Heading Styles</span>
            <hr />
        </TileHeader>
        <div className="box-header">
            <div>
                <Title name="Heading 1" textAlign="left" fontSize="80px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 2" textAlign="left" fontSize="64px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 3" textAlign="left" fontSize="48px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 4" textAlign="left" fontSize="32px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 5" textAlign="left" fontSize="28px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 6" textAlign="left" fontSize="14px" fontFamily="Calibre Bold" color="#999999"/>
            </div>
            <div>
                <Title name="Heading 1" textAlign="center" fontSize="80px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 2" textAlign="center" fontSize="64px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 3" textAlign="center" fontSize="48px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 4" textAlign="center" fontSize="32px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 5" textAlign="center" fontSize="28px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 6" textAlign="center" fontSize="14px" fontFamily="Calibre Bold" color="#999999"/>
            </div>
            <div>
                <Title name="Heading 1" textAlign="right" fontSize="80px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 2" textAlign="right" fontSize="64px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 3" textAlign="right" fontSize="48px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 4" textAlign="right" fontSize="32px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 5" textAlign="right" fontSize="28px" fontFamily="Calibre Bold" color="#101010"/>
                <Title name="Heading 6" textAlign="right" fontSize="14px" fontFamily="Calibre Bold" color="#999999"/>
            </div>
        </div>  
        </BoxHeader>
        <SpanContent>This is an example of a <a>text link</a>  in a body of text.</SpanContent>
        <BoxWrapperBold>
            <BoxBold>Bold Intro</BoxBold>
            <BoxRegular>Regular Intro</BoxRegular>

            <TitleMoblie>
                <p className="cl-hr">Mobile Heading Styles</p>
            </TitleMoblie>
            
            <BoxMoblie>
                <Mobile name="Mob Heading 1" fontFamily="Calibre Bold" fontSize="40px" color="#101010"/>
                <Mobile name="Mob Heading 2" fontFamily="Calibre Bold" fontSize="32px" color="#101010"/>
                <Mobile name="Mob Heading 3" fontFamily="Calibre Semibold" fontSize="32px" color="#101010"/>
                <Mobile name="Mob Heading 4" fontFamily="Calibre Semibold" fontSize="24px" color="#101010"/>
            </BoxMoblie>
            <MobileBold>
                <Mobile name="Mobile Bold Intro" fontFamily="Calibre Semibold" fontSize="24px" color="#101010"/>
                <Mobile name="Mobile Bold Intro" fontFamily="Calibre Regular" fontSize="20px" color="#222222" end='end'/>
            </MobileBold>
        </BoxWrapperBold>
    </Layout>
    </>
  );
}