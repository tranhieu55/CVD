import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import { Divider } from "../../bits"

const TextWithBulletList = props => {
  const fields = props.input.fields[0]
  const title = fields.title[0].text
  const content = fields.content
  const bulletsLeft = fields.bullet_list_left
  const bulletsMiddle = fields.bullet_list_middle
  const bulletsRight = fields.bullet_list_right

  return (
    <Container context={props.context}>
      <Title>{title}</Title>
      <Content className="content">{RichText.render(content)}</Content>
      <BulletsRow>
        <BulletsCol className="content">
          {RichText.render(bulletsLeft)}
        </BulletsCol>
        <BulletsCol className="content">
          {RichText.render(bulletsMiddle)}
        </BulletsCol>
        <BulletsCol className="content">
          {RichText.render(bulletsRight)}
        </BulletsCol>
      </BulletsRow>
      <Divider marginTop={"5rem"} marginBottom={"4.625rem"}></Divider>
    </Container>
  )
}

export default TextWithBulletList

TextWithBulletList.propTypes = {
  input: PropTypes.object.isRequired,
}

const Container = styled.div`
  ${props =>
    props.context &&
    css`
      padding: 0 3rem;
    `}
`

const Title = styled.h2`
  color: #101010;
  font-family: "Calibre Semibold";
  margin: auto;
  font-size; 2rem;
  line-height: 2rem;
  letter-spacing: -0.5px;
`

const Content = styled.div`
  margin: auto;
  color: #222;
  font-size: 1.25rem;
  line-height: 1.75rem;
`
const BulletsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
`

const BulletsCol = styled.div`
  flex-basis: 33.33%;
  height: auto;
  font-size: 1.25rem;
  line-height: 2rem;
  padding: 0 1rem;
`
