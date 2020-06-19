import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"

const TextWithBulletList = ({ input }) => {
  const fields = input.fields[0]
  const title = fields.title[0].text
  const content = fields.content
  const bulletsLeft = fields.bullet_list_left
  const bulletsMiddle = fields.bullet_list_middle
  const bulletsRight = fields.bullet_list_right

  return (
    <Container>
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
    </Container>
  )
}

export default TextWithBulletList

TextWithBulletList.propTypes = {
  input: PropTypes.object.isRequired,
}

const Container = styled.div``
const Title = styled.h2`
  color: #101010;
  margin: auto;
`

const Content = styled.div`
  margin: auto;
  color: #222222;
`
const BulletsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  border: 2px solid red;
`

const BulletsCol = styled.div`
  flex-basis: 33.33%;
  height: auto;
  border: 1px solid blue;
`
