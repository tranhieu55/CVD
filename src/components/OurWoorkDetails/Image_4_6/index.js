import React from 'react'
import styled from 'styled-components'

export default function Image46(props) {
    let data = props.input.fields.map((item) => (item.width))
    console.log(data)

    return (
        <Image
            className="list-image-background"
        // data-sal="slide-down"
        // data-sal-delay="5000"
        // data-sal-easing="ease"
        // data-sal-duration="1000"
        >
            <div className="three-image background-left">
                <img src="https://images.unsplash.com/photo-1598099947145-e85739e7ca28?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" />
            </div>
            <div className="three-image background">
                <div className='image'>
                    <img src="https://images.unsplash.com/photo-1597947216176-73eeb189ea51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                </div>
            </div>


            {/* {props.input.fields.map((item, index) => (
                <div className="image-background" key={index}>
                    <img
                        src={item.image4_6.url}
                        alt={item.image4_6.alt}
                    ></img>
                </div>
            ))} */}

        </Image>
    )
}
const Image = styled.div`
display:flex;
margin-bottom:96px;
.three-image {
    height:650px;
    img {
        height:100%;
        width:100%;
    }
}
.background {
    background-color:#f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 650px;
    width: 816px;
    
    .image{
        width:700px;
        height:435px;
        img {
            width:100%;
            height:100%;
        }
    }
}
.background-left {
    padding-right:30px;
    height: 650px;
    width: 392px;
}

    
`
