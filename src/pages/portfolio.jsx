import { useState } from 'react';
import React from 'react';
import Project from '../Components/Project';
function Portfolio() {
    return (
        <div className="shop">
        <div className="container-fluid">
           <div className="row d_flex d_grid">
              <div className="col-md-7">
                 <div className="shop_img text_align_center" data-aos="fade-right">
                    <figure>
                     <img className="img_responsive" src="images/Web.Clarinetist.jpg" alt="#"/>
                    <img className="img_responsive" src="images/Web.ECCChristmas.jpg" alt="#"/>
                    </figure>
                  
                 </div>
              </div>
              <div className="col-md-5 order_1_mobile">
                 <div className="titlepage text_align_left ">
                    <h2>Our  Skate <br/>Shop</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variatioThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variationsns
                    </p>
                    <a className="read_more" href="shop.html">Buy Now</a>
                  <div>
                     <Project portfolioType={"YouTube"}></Project>
                     <Project portfolioType={"Music"}></Project>
                     <Project portfolioType={"Studio"}></Project>
                  </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
    )
};
export default Portfolio;
