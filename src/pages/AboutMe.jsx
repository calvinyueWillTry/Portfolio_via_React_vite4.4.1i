import React from 'react';
function About () {
    return (
    <div className="about">
         <div className="container-fluid">
            <div className="row d_flex">
               <div className="col-md-6">
                  <div className="titlepage text_align_left">
                     <h2>About <br/>Me <br/> </h2>
                     <p>Born and Raised in Eugene, Oregon. 
                     </p>
                     <div className="link_btn">
                        <a className="read_more" href="about.html">Read More</a>
                     </div>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="about_img text_align_center">
                     <figure><img src="images/computer.jpg" alt="#"/></figure>
                  </div>{/**how to get this to change dimensions or sides? */}
               </div>
            </div>
         </div>
      </div>
    )
};
export default About;