import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width : 1240px;
margin: 0px auto 96px;
height: 650px;
display: flex;
justify-content: space-between;
@media(max-width: 600px){
    width: 468px;
    margin : 0 auto;
    height: auto;
    display: block;
}
@media(max-width: 498px){
    width: 343px;
    margin : 0 autol
    height: auto;
}
@media(max-width: 320px){
    width: 296px;
    margin : 0 auto;
    height: auto;
}
@media(min-width: 600px){
    width: 585px;
    margin : 0 auto 32px;
    height: 220px;
    display: flex;
}
@media(min-width: 992px){
    width: 785px;
    margin : 0 auto 32px;
    height: 280px;
}
@media(min-width: 1024px){
    width: 885px;
    margin : 0 auto 32px;
    height: 340px;
}
@media(min-width: 1200px){
    width: 985px;
    margin : 0 auto 64px;
    height: 380px;
}
@media(min-width: 1400px){
    width: 1240px ;
    margin: 0px auto 96px;
    height: 650px;
}
`

const BoxImamgeLeft = styled.div`
  width: 31.6%;
  height: 100%;
  @media(max-width: 600px){
    width: 100%;
    height: 369px;
  }
`
const BoxImamgeRight = styled.div`
  width: 65.8%;
  height: 100%;
  @media(max-width: 600px){
    width: 100%;
    height: 272px;
    margin-top: 12px;
  }
`
const IMG = styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;
`
export default function ColumnB(props) {
  return (
    <Wrapper>
        {props ? 
          <BoxImamgeLeft>
            <IMG  src={props?.input?.primary?.image_sile_left?.url ? props?.input?.primary?.image_sile_left?.url : ""} 
                  alt={props?.input?.primary?.image_side_left?.alt ? props?.input?.primary?.image_side_left?.alt : ""}
            >
            </IMG>
          </BoxImamgeLeft>
          : <></>
        }
       {props ? 
         <BoxImamgeRight>
          <IMG  src={props?.input?.primary?.image_side_right?.url ? props?.input?.primary?.image_side_right?.url : ""} 
                alt={props?.input?.primary?.image_side_right?.alt ? props?.input?.primary?.image_side_right?.alt : ""}>
          </IMG>
        </BoxImamgeRight>
        : <></>
       }
    </Wrapper>
  );
}
