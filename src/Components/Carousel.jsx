import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css";

function HomeCarousel() {
    return (
<Carousel interval={null} >
   <Carousel.Item>
   <img className="img_responsive" src="images/Web.Seattle.JPG"/>
      <Carousel.Caption>
         <h3 className="carousel-text">Calvin Yue Technical Professional in the Making</h3>
      </Carousel.Caption> 
   </Carousel.Item>
   
   
   <Carousel.Item>
   <img className="img_responsive" src="images/Web.ECCChristmas.jpg"/>
      <Carousel.Caption>
         <h3 className="carousel-text">Calvin Yue Computer Full-Stack Coding Technician</h3>
      </Carousel.Caption>
   </Carousel.Item>   

   <Carousel.Item>
   <img className="img_responsive" src="images/computer.jpg"/>
      <Carousel.Caption>
         <h3 className="carousel-text">Calvin Yue Audiovisual Production</h3>
      </Carousel.Caption>
   </Carousel.Item>  

   <Carousel.Item>
   <img className="img_responsive" src="images/ECCChoir.jpg"/>
      <Carousel.Caption>
         <h3 className="carousel-text">Calvin Yue Church and Community Member</h3>
      </Carousel.Caption>
   </Carousel.Item>  
</Carousel>      
      
    )
};
export default HomeCarousel;