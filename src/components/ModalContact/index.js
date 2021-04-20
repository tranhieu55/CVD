import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import TextField from "@material-ui/core/TextField"

const Modals = ({ showModal, setShowModal }) => {
  const data = useStaticQuery(graphql`
    query ModalQuery {
      prismic {
        allContact_pages {
          edges {
            node {
              body {
                ... on PRISMIC_Contact_pageBodyForm_submit {
                  type
                  label
                  fields {
                    placeholder
                    requied
                    type
                  }
                  primary {
                    title_contact_form
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const Titles = data.prismic.allContact_pages.edges[0].node.body.filter(
    item => item.type === "form_submit"
  )
  console.log({ dsad: Titles[0].fields })
  return (
    <>
      {showModal ? (
        <Container>
          <Modal showModal={showModal}>
            <ButtonClose
              onClick={() => setShowModal(prev => !prev)}
            ></ButtonClose>
            <Content>
              <TiTle>
                {Titles[0].primary.title_contact_form.map(item => item.text)}
              </TiTle>
              {Titles[0].fields.map((item, index) => {
                if (item.type === "text") {
                  return (
                    <Input>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        label={item.placeholder.map(item => item.text)}
                      />
                    </Input>
                  )
                }
                if (item.type === "textarea") {
                  return (
                    <Input>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        label={item.placeholder.map(item => item.text)}
                      />
                    </Input>
                  )
                }
                return null
              })}
              <Submit>Submit</Submit>
            </Content>
          </Modal>
        </Container>
      ) : null}
    </>
  )
}

export default Modals

const TiTle = styled.h1`
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 52px;
  margin-bottom: 0px;
`
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  position: fixed;
  top: 0px;
  background: rgba(0, 0, 0, 0.35);
  z-index: 10000;
  overflow-y: auto;
`

const ButtonClose = styled.span`
  top: 26px;
  right: 26px;
  position: absolute;
  &::after {
    content: "\f00d";
    font-family: "Font Awesome 5 Pro Regular";
    height: 20px;
    width: 19px;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 24px;
    text-align: right;
    color: #333333;
    margin-left: 24px;
    opacity: 0.6;
  }
  @media (max-width: 320px) {
    top: 16px;
    right: 16px;
  }
`

const Input = styled.div`
  width: 100%;
  height: 64px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 8px 8px 30px 0 rgba(0, 0, 0, 0.07);
  margin-bottom: 24px;
  box-sizing: border-box;
  border: 2px solid #cccccc;
  border-radius: 3px;
  background-color: #ffffff;
  padding-left: 24px;
  box-shadow: none;
  position: relative;
  &::placeholder {
    height: 24px;
    width: 184px;
    color: #b6b6b6;
    font-family: Calibre Regular;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
    box-shadow: none;
    border-top: 0px;
  }
  :hover {
    border: 1px solid #222222;
  }
  :focus {
    outline: none;
    &::placeholder {
      height: 24px;
      width: 184px;
      color: #b6b6b6;
      font-family: Calibre Regular;
      font-size: 14px;
      letter-spacing: 0;
      line-height: 24px;
      position: absolute;
      top: 5px;
      box-shadow: none;
      border-top: 0px;
    }
  }
  @media (max-width: 320px) {
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    :hover {
      border: 1px solid #222222;
      position: relative;
    }
    :focus {
      outline: none;
      &::placeholder {
        height: 24px;
        width: 184px;
        color: #6e6e6e;
        font-family: Calibre Regular;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 24px;
        position: absolute;
        top: -12px;
        box-shadow: none;
        border-top: 0px;
        background-color: #ffffff;
      }
    }
  }
  @media (max-width: 768px) {
    height: 44px;
  }
`

const Textarea = styled.textarea`
  width: 100%;
  height: 178px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 8px 8px 30px 0 rgba(0, 0, 0, 0.07);
  margin-bottom: 24px;
  box-sizing: border-box;
  border: 2px solid #cccccc;
  border-radius: 3px;
  padding-top: 24px;
  padding-left: 24px;
  box-shadow: none;
  position: relative;
  &::placeholder {
    height: 24px;
    width: 184px;
    color: #b6b6b6;
    font-family: Calibre Regular;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
    box-shadow: none;
    border-top: 0px;
  }
  :hover {
    border: 1px solid #222222;
  }
  :focus {
    outline: none;
    &::placeholder {
      height: 24px;
      width: 184px;
      color: #b6b6b6;
      font-family: Calibre Regular;
      font-size: 14px;
      letter-spacing: 0;
      line-height: 24px;
      position: absolute;
      top: 2px;
      box-shadow: none;
      border-top: 0px;
    }
  }
  @media (max-width: 320px) {
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    :hover {
      border: 1px solid #222222;
      position: relative;
    }
    :focus {
      outline: none;
      &::placeholder {
        height: 24px;
        width: 184px;
        color: #6e6e6e;
        font-family: Calibre Regular;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 24px;
        position: absolute;
        top: -12px;
        box-shadow: none;
        border-top: 0px;
        background-color: #ffffff;
      }
    }
  }
  @media (max-width: 768px) {
    height: 138px;
  }
`

const Submit = styled.button`
  height: 64px;
  width: 180px;
  border-radius: 3px;
  background-color: #fecf09;
  border-color: #fecf09;
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
  padding: 25px 0px;
  border-width: 0px;
`
const Content = styled.div`
  margin: 46px 48px;
  @media (max-width: 768px) {
    margin: 26px 48px;
  }
  @media (max-width: 320px) {
    margin: 20px 24px;
  }
`
const Modal = styled.div`
  height: 872px;
  width: 605px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 8px 8px 30px 0 rgba(0, 0, 0, 0.07);
  position: relative;
  margin: auto;
  @media (max-width: 768px) {
    height: 672px;
  }
`
