import React from 'react';
function PortfolioCard () {
    return (<div class="class">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage text_align_center">
                     <h2>Portfolio of some of my previous work</h2>
                     <p>Includes collaborative and individual</p>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-4 margi_bottom">
                  <div class="class_box text_align_center">
                     <i><img src="images/Blogpost.png" alt="#"/></i> 
                     <h3>Coding Format: MVC (full stack)</h3>
                     <p> Techblog for Discussion (users only) </p>
                    <a href="https://sleepy-fjord-06143-4fd214f298ec.herokuapp.com/" target='_blank'> Become a User and join and/or create the discussion!</a>
                    <p></p>
                    <a href="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting" target='_blank'>Github link to see the coding work I did underneath</a>
                  </div>
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
               </div>
               <div class="col-md-4 margi_bottom">
                  <div class="class_box blue text_align_center">
                     <i><img src="images/pokemonOnline.png" alt="#"/></i>
                     <h3>Pokémon Match (using HTML, CSS and JavaScript)</h3>
                     <p>Group Project by Jake Pearson, Joseph Collins and Calvin Yue  </p>
                     <a href='https://github.com/calvinyueWillTry/Project_1_Group' target='_blank'> Github link for our to see our coding work </a>
                  </div>
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
               </div>
               <div class="col-md-4 margi_bottom">
                  <div class="class_box text_align_center">
                     <i><img src="images/PlateswithPurpose.png" alt="#"/></i>
                     <h3>Plates With Purpose (using Handlebars, SQL, Sequelize, Bcrypt and SALT)</h3>
                     <p>Group Project by Kevin Roper, Joseph Collins, Jose Villabos and Calvin Yue </p>
                    <a href='https://github.com/calvinyueWillTry/PlatesWithPurpose/tree/main' target='_blank'> Github link for our to see our coding work </a>
                    <p></p>
                    <a href='https://plates-with-purpose-383e0dfd259c.herokuapp.com/' target='_blank'> Website link - feel free to become a user and try it out! </a>
                  </div>
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
               </div>
            </div>
            <div class="col-md-4 margi_bottom">
                  <div class="class_box text_align_center">
                     <i><img src="images/Note_Taking.Homepage.png" alt="#"/></i> 
                     <h3>Note Taker</h3>
                     <p>  </p>
                    <a href="https://infinite-temple-67769-6b752bbaadb8.herokuapp.com/" target='_blank'> Become a User and join and create some notes for yourself!</a>
                    <p></p>
                    <a href="https://github.com/calvinyueWillTry/Taking_Notes_with_backend_JS/tree/main" target='_blank'>Github link to see the coding work I did behind the scene</a>
                  </div>
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
               </div>
         </div>
      </div>)
};
export default PortfolioCard;