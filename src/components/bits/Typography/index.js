import styled from "styled-components"
const P = styled.p`
  font-family: "Calibre Semibold";
  font-size: ${({ fontSise }) => `${fontSise}px`};
  padding-top: ${({ pdt }) => `${pdt}px`};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "")};
  color: ${({ coLor }) => coLor};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: 0;
  padding: 0;
  margin-bottom: ${({ mrb }) => `${mrb}px`};
  margin-bottom: ${({ mrb_rem }) => `${mrb_rem}rem`};
  margin-top: ${({ mt }) => `${mt}px`};
  padding-left: ${({ pdl_rem }) => `${pdl_rem}rem`};
  padding-bottom: ${({ pdb }) => `${pdb}px`};
  width: ${({ w }) => `${w}px`};
  font-family: ${({ fontFamily }) => `${fontFamily}`};
  line-height: ${({ lineh }) => `${lineh}px`};
  letter-spacing: ${({ lett }) => `${lett}px`};
`
export default P
