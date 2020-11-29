import styled from "styled-components"
const IMG = styled.img`
  opacity: ${({ oct }) => oct};
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit};
  height: ${({ h }) => `${h}px`};
  width: ${({ w }) => `${w}px`};
  height: ${({ heightPercent }) => `${heightPercent}%`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  cursor: pointer;
  position: ${({ position }) => `${position}`};
  transition: all 0.3s;
  /* :hover {
    transform: scale(1.05);
  } */
`
export default IMG
