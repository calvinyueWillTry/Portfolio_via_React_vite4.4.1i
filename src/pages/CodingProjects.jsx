import React from 'react';
function CodingPortfolio () {
    return (
        <div className="about">
         <div className="container-fluid">
            <div className="row d_flex">
               <div className="col-md-6">
                  <div className="titlepage text_align_left">
                     <h2>About <br/>Skating <br/> school</h2>
                     <p>This is my portfolio of some of my work in the coding bootcamp
                     </p>
                     <div className="link_btn">
                        <p className="read_more" >Techblog for Discussion (users only)</p>
                        <a href="https://sleepy-fjord-06143-4fd214f298ec.herokuapp.com/" target='_blank'> Become a User and join and/or create the discussion!</a>
                        <a href="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting" target='_blank'>Github link to see the coding work I did underneath</a>
                     </div>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="about_img text_align_center">
                     <figure><img src="images/about.png" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
};
export default CodingPortfolio;