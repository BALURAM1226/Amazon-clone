import React from "react";
import "./PosterSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";

export default function PosterSlider() {

  return (
    <>
    
    <Slider autoplay={true} dots={true}>
   
        <img className="img" src={image1} alt="images"/>
        <img className="img" src={image2} alt="images"/>
        <img className="img" src={image3} alt="images"/>
        <img className="img" src={image4} alt="images"/>
        <img className="img" src={image5} alt="images"/>  
      </Slider>
      
    </>
  );
}
