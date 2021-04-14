import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`

const Title = styled.div`
  font-family:"Helvetica Neue Regular";
  font-size: 24px;
  letter-spacing: 0;
  line-height: 29px;
  color: #6F6F6F;
  margin-bottom:30px;
  &:before {
    position: absolute;
    content:"";
    top:0;
    left:0;
    height: 1px;
    width: 1600px;
    background-color: #DDDDDD;
  }

`
const BoxImamgeRight = styled.div`
  width:392px;
  height: 650px;
`
const BoxImamgeLeft = styled.div`
  background-color:#F1F1F1;
  padding:100px 53px;
  margin-right:32px;
`
const IMG = styled.img`
  width:100%;
  height: 100%;
`
const WrapperIMG = styled.div`
  display: flex;
`
export default function ColumnC(props) {
    console.log('hiêutt' , props)
  return (
    <Wrapper>
      <WrapperIMG>
        <BoxImamgeLeft>
          <IMG src={props.input.primary.image_side_left.url} alt={props.input.primary.image_side_left.alt}>
          </IMG>
        </BoxImamgeLeft>
        <BoxImamgeRight>
          <IMG src={props.input.primary.image_side_right.url} alt={props.input.primary.image_side_right.alt}>
          </IMG>
        </BoxImamgeRight>
      </WrapperIMG>
    </Wrapper>
  );
}
