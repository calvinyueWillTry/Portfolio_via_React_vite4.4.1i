import React, {useState} from 'react';

function Resume() {
    return (
        <div className="about">
         <div className="container-fluid">
            <div className="row d_flex">
               <div className="col-md-6">
                  <div className="text_align_center">
                     <h2>Previous <br/>Experiences <br/> </h2>
                     <p> Computer Coding: </p>
                     <p> Certificate of Completion: University or Oregon Coding Bootcamp </p>
                     <p> For previous work, see the Coding Portfolio Page </p>
                     <p> Audiovisual: </p>
                     <p> Associates in Audio Production - LCC</p>
                     <p> Audiovisual Technician - Graduate Eugene Hotel (AVMS) </p>
                     <p>Audiovisual Crew Member - IATSE 675 </p>
                     <p> Audiovisual Recording Engineer </p>
                     <p> Previous Productions include: </p>
                     <p> fill in later (too many to name) </p>
                     <p>Other experiences: </p>
                     <p> Formerly an Office Worker at Holt International (group picture on the Homepage) </p>
                     <div className="link_btn">
                        <a className="read_more" href="AV resume 2022.pdf" target='_blank'>Click to view my Resume</a>
                     </div>
                  </div>
               </div>
               <div className="col-md-6"> {/**replace with images */}
                  <div className="about_img text_align_center">
                     <figure><img src="images/about.png" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
};
export default Resume;