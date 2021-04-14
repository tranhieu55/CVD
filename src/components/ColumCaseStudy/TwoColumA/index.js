
import React from 'react';
import styled from 'styled-components';



export default function TwoColum (props) {
    console.log("day la ++++++++++++++++++++",props)
    return (
        <Container>
            {/* {data.prismic.allProjectss.edges[7].node.body.map((item, index) => (
                <div key={index}>
                    <Img
                        alt={item.primary.image_side_left.alt}
                        src={item.primary.image_side_left.url}
                    ></Img>
                    <Img
                        alt={item.primary.image_side_right.alt}
                        src={item.primary.image_side_right.url}
                    ></Img>
                </div>
            ))} */}
            
        </Container>
    )
}

const Container = styled.div`
    width : 1240px;
    height: 650px;
    display: flex;
    justify-content: space-between;
`

const Img = styled.img`
    width: 48.71%;
    height: 100%;
`
