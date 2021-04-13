import React from 'react';
import Layout from '../components/Layout';
import BoxColorBig from '../components/Styleguide/components/BoxColorBig';
import ListItem from '../components/Styleguide/components/BoxColorBig/itemcolor';
import styled from "styled-components"
import LogoConvert from '../components/Styleguide/components/Logo';
import Form from '../components/Styleguide/components/Form';
import TextInput from '../components/Styleguide/components/Form/input';
import InputSelect from '../components/Styleguide/components/Form/select';
import InputRadio from '../components/Styleguide/components/Form/radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import CheckBox from '../components/Styleguide/components/Form/checkbox';
import ButtonStyled from '../components/Styleguide/components/Button';


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
    .form-input {
        margin-top:40px;
        display: flex;
        
    }
    .checkbox {
        display: flex;
    }
`
const WrapperButton = styled.div`
    display: flex;
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
        <WrapperForm>
            <TileColour>
                <h2>Form</h2>
                <hr />
            </TileColour>
            <div className="form-input">
                <div>
                    <TextInput name="Input Field"/>
                    <TextInput name="LABLE" value="Text Field" id="outlined-basic"/>
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
            <ButtonStyled name="(03) 9070 3463" background="#FECF09" color="#101010" icon="" border="none"/>
            <ButtonStyled name="Button" background="#FECF09" color="#101010" icon="" border="none"/>
            <ButtonStyled name="Butoon" background="#101010" color="#FFFFFF" icon="" border="1px solid #FECF09"/>
            <ButtonStyled name="Learn more" background="transparent" color="#101010" icon="" border="none"/>
         </WrapperButton>   
    </Layout>
    </>
  );
}
