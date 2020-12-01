import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"

const ButtonCustom = styled.button`
  font-family: "Calibre Semibold";
  border: 2px solid #fecf09;
  border-radius: 3px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  font-weight: ${({ fw }) => `${fw}`};
  outline: none;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  width: ${({ wt }) => `${wt}px`};
  height: ${({ ht }) => `${ht}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  padding-left: ${({ pdl }) => `${pdl}px`};
  padding-right: ${({ pdr }) => `${pdr}px`};
  height: ${({ cc }) => `${cc}px`};
  font-size: ${({ fz }) => `${fz}px`};
  line-height: ${({ lineh }) => `${lineh}px`};
  padding: ${({ pd1 }) => `${pd1}px`} ${({ pd2 }) => `${pd2}px`};
  position: relative;
  overflow: hidden;
  white-space: ${({ wspace }) => `${wspace}`};
  :hover {
    transition: all 0.6s ease;
    background-color: #ffd700;
    color: #000;
  }
`
export default ButtonCustom