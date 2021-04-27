import React from "react"
import styled from "styled-components"
import IconIphone from "../../../../images/phone-black@2x.png"

const Wrapper = styled.button`
  background-color: transparent;
  padding: 14px;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  width: ${({ width }) => `${width}px`};
  border-radius: 3px;
  font-family: "Calibre Semibold";
  font-size: ${({ fontSize }) => `${fontSize}px`};
  margin-left: 24px;
  img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
`
const BgrButton = styled.div`
  margin-left: 9px;
  margin-top: -15px;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ background }) => background};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  button {
    width: 166px;
    height: 48px;
    margin-left: 0px;
  }
`
export default function ButtonStyled(props) {
  const {
    name,
    background,
    border,
    color,
    icon,
    width,
    room,
    height,
    fontSize,
  } = props
  return (
    <>
      {room === 1 ? (
        <BgrButton
          width={width}
          background={background}
          height={height}
          fontSize={fontSize}
        >
          <Wrapper name={name} color={color} icon={icon} border={border}>
            {icon === 1 ? <img src={IconIphone} /> : ""} {name}
          </Wrapper>
        </BgrButton>
      ) : (
        <Wrapper
          fontSize={fontSize}
          width={width}
          name={name}
          background={background}
          color={color}
          icon={icon}
          border={border}
        >
          {icon === 1 ? <img src={IconIphone} /> : ""} {name}
        </Wrapper>
      )}
    </>
  )
}
