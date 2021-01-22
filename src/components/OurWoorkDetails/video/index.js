import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Box>
            <Slider {...settings}>
                <div className="div">
                    <img src="https://images.unsplash.com/photo-1610944770887-c470bab58def?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                </div>
                <div className="div">
                    <img src="https://images.unsplash.com/photo-1610955072206-d2c2a9cb41e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                </div>
                <div className="div">
                    <img src="https://images.unsplash.com/photo-1610903953576-fc21d18d83d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" />
                </div>
                <div className="div">
                    <img src="https://images.unsplash.com/photo-1563620915-8478239e9aab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" />
                </div>
            </Slider>
        </Box>
    );
}
const Box = styled.div`
    .div {
        height:100%;
    }
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    
    img {
        width:100%;
        height:880px;
        object-fit:cover;
    }

`