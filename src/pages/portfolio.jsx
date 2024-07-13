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
                    <img className="img_responsive" src="images/avms2019.jpg" alt="#" />
                     <img className="img_responsive" src="images/Web.Clarinetist.jpg" alt="#"/>
                    <img className="img_responsive" src="images/Web.ECCChristmas.jpg" alt="#"/>
                    <img className="img_responsive" src="images/Web.Green Screen Before.png" alt="#" />
                    <p> Before apply the green screen effect </p>
                    <img className="img_responsive" src="images/Web.Green Screen After.png" alt="#" />
                    <p>After applying the background for the green screen effect</p> 
                    </figure>
                  
                 </div>
              </div>
              <div className="col-md-5 order_1_mobile">
                 <div className="titlepage text_align_left ">
                    <h2>Audiovisual <br/>Recording Engineer <br/>Portfolio </h2>
                    <p>The following are some representations of some of my work. 
                    </p>
                  <div>
                     <Project portfolioType={"YouTube"}></Project>
                     <Project portfolioType={"Music"}></Project>
                     {/**<Project portfolioType={"Studio"}></Project>*/}
                  </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
    )
};
export default Portfolio;
