import React from 'react';
function PortfolioCard () {
    return (<div class="class">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage text_align_center">
                     <h2>Our Skating Class</h2>
                     <p>There are many variations of passages of Lorem</p>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-4 margi_bottom">
                  <div class="class_box text_align_center">
                     <i><img src="images/class1.png" alt="#"/></i> {/**screenshot here */}
                     <h3>Skateboard</h3>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations </p>
                    <a href="https://sleepy-fjord-06143-4fd214f298ec.herokuapp.com/" target='_blank'> Become a User and join and/or create the discussion!</a>
                    <p>Techblog for Discussion (users only)</p>
                    <a href="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting" target='_blank'>Github link to see the coding work I did underneath</a>
                  </div>
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
               </div>
               <div class="col-md-4 margi_bottom">
                  <div class="class_box blue text_align_center">
                     <i><img src="images/class2.png" alt="#"/></i>
                     <h3>Skateboard</h3>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations </p>
                  </div>
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
               </div>
               <div class="col-md-4 margi_bottom">
                  <div class="class_box text_align_center">
                     <i><img src="images/class3.png" alt="#"/></i>
                     <h3>Skateboard</h3>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations </p>
                  </div>
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
               </div>
            </div>
         </div>
      </div>)
};
export default PortfolioCard;