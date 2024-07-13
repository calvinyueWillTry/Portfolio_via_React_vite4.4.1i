import React from 'react';
function About () {
    return (
    <div className="about">
         <div className="container-fluid">
            <div className="row d_flex">
               <div className="col-md-6">
                  <div className="text_align_left">
                     <h2>About <br/>Me <br/> </h2>
                     <p>Born and Raised in Eugene, Oregon. 
                     </p>
                     <p></p>
                     <div className="link_btn">
                        <a className="read_more" href="Resume Worship 2024.pdf" target='_blank'>Click here to see my Church Worship Resume</a>
                     </div>
                     <div className="link_btn">
                        <a className="read_more" href="AV resume 2022.pdf" target='_blank'>Click here to see my AudioVisual resume</a>
                     </div>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="about_img text_align_center">
                     <figure><img src="images/computer.jpg" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
};
export default About;