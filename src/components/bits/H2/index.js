import styled from "styled-components"

const H2 = styled.h2`
  font-size: ${({ fz }) => `${fz}px`};
  font-weight: ${fw => `${fw}`};
  margin-bottom: ${({ mrb_rem }) => `${mrb_rem}rem`};
  margin-bottom: ${({ mrb }) => `${mrb}px`};
  padding-left: ${pdl => `${pdl}`};
  padding-bottom: ${({ pdb }) => `${pdb}px`};
  margin-left: ${({ mrl }) => `${mrl}px`};
  margin-top: ${({ mrt }) => `${mrt}px`};
  letter-spacing: ${({ letsp }) => `${letsp}px`};
  font-family: ${({ fontFamily }) => `${fontFamily}`};
  line-height: ${({ lineh }) => `${lineh}px`};
  color: ${({ col }) => `${col}`};
  font-weight: ${({ fontw }) => `${fontw}px`};
  letter-spacing: ${({ lett }) => `${lett}px`};
  font-family: ${({ fontFamily }) => `${fontFamily}`};
`
export default H2
