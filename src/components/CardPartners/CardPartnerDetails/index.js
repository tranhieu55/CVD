import React from "react"
import styled from "styled-components"
import ButtonCustom from "../../ButtonCustom"

function CardPartnerDetails({ showDetails }) {
  return (
    <>
      {showDetails ? (
        <Wrapper>
          <Container>
            <Close></Close>
            <DivIMG></DivIMG>
            <Title>Online Marketing Gurus</Title>
            <Descriptions>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </Descriptions>
            <ViewMore>
              <ButtonCustom wt={180} cc={64} bgColor={"#FECF09"} Block={true}>
                <LabelButton>LabelButton</LabelButton>
              </ButtonCustom>
            </ViewMore>
          </Container>
        </Wrapper>
      ) : null}
    </>
  )
}

export default CardPartnerDetails

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.35);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 8px 8px 30px 0 rgba(0, 0, 0, 0.07);
  padding: 36px 61px 41px 48px;
  min-width: 605px;
  position: relative;
`
const Close = styled.span`
  background-color: green;
  position: absolute;
  top: 26px;
  right: 26.33px;
  width: 18.67px;
  height: 20px;
`
const DivIMG = styled.div`
  width: 244px;
  height: 122px;
  background-color: gray;
  margin-bottom: 13px;
`

const Title = styled.h5`
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 34px;
  margin-bottom: 7px;
`

const Descriptions = styled.p`
  max-width: 496px;
  color: #222222;
  font-family: Calibre Regular;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 22px;
`
const ViewMore = styled.div``
const LabelButton = styled.h6`
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
  padding: 0;
  margin: 0;
  padding-top: 6px;
`
