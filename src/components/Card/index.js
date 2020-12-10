import React from "react"
import styled from "styled-components"
import ImgIntagram from "../../images/img-intagram.jpg"
import ImgIntagram1 from "../../images/img-intagram-1.jpg"
import IMG from "../Image"
import H4 from "../../components/bits/H4"

const CardStyle = styled.div`
  .box-content {
    display: flex;
    margin-bottom: 80px;
  }
  .border-bootom {
    display: inline-block;
    width: 50px;
    border-top: 3px solid gold;
    margin-right: 20px;
  }
  .text-date {
    font-weight: bold;
    color: #9b9b9b;
    letter-spacing: 1px;
  }
`
const DivIMG = styled.div`
  overflow: hidden;
  margin-bottom: 30px;
  display: inline-block;
  transition: all 200ms ease-in;
  position: relative;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    background-color: gold;
    height: 5px;
    transition: all 0.4s ease-in;
  }
  :hover {
    ::after {
      width: 100%;
    }
  }
`

export default function Card() {
  const FakeData = [
    {
      src: ImgIntagram,
    },
    {
      src: ImgIntagram1,
    },
  ]
  return (
    <>
      {FakeData.map((item, i) => (
        <CardStyle className="col-md-6" key={i}>
          <DivIMG>
            <IMG
              objectFit="cover"
              w="572"
              h="400"
              className="img-fluid"
              src={item?.src}
            />
          </DivIMG>

          <div
            className="box-content"
            data-sal="slide-up"
            data-sal-delay="2000"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <div>
              <span className="border-bootom"></span>
            </div>
            <div>
              <span className="text-date">June 25, 2019</span>
              <H4>
                Five eays tricks to satisfy customers before they ask for help
              </H4>
            </div>
          </div>
        </CardStyle>
      ))}
    </>
  )
}
