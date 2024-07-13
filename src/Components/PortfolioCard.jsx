import React from 'react';
function PortfolioCard () {
    return (<div className="className">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage text_align_center">
                     <h2>Portfolio of some of my previous work</h2>
                     <p>Includes collaborative and individual</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 margi_bottom">
                  <div className="className_box text_align_center">
                     <i><img src="images/Blogpost.png" alt="#"/></i> 
                     <h3>Coding Format: MVC (full stack)</h3>
                     <p> Techblog for Discussion (users only) </p>
                    <a href="https://sleepy-fjord-06143-4fd214f298ec.herokuapp.com/" target='_blank'> Click this link to become a User and join and/or create the discussion!</a>
                    <p></p>
                    <a href="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting" target='_blank'>Click this Github link to see the coding work I did underneath</a>
                  </div>
                 
               </div>
               <div className="col-md-4 margi_bottom">
                  <div className="className_box text_align_center">
                     <i><img src="images/pokemonOnline.png" alt="#"/></i>
                     <h3>Pokémon Match (using HTML, CSS and JavaScript)</h3>
                     <p>Group Project by Jake Pearson, Joseph Collins and Calvin Yue  </p>
                     <a href='https://github.com/calvinyueWillTry/Project_1_Group' target='_blank'> Click this Github link for our to see our coding work </a>
                  </div>
                  
               </div>
               <div className="col-md-4 margi_bottom">
                  <div className="className_box text_align_center">
                     <i><img src="images/PlateswithPurpose.png" alt="#"/></i>
                     <h3>Plates With Purpose (using Handlebars, SQL, Sequelize, Bcrypt and SALT)</h3>
                     <p>Group Project by Kevin Roper, Joseph Collins, Jose Villabos and Calvin Yue </p>
                     <a href='https://plates-with-purpose-383e0dfd259c.herokuapp.com/' target='_blank'> Click this website link - feel free to become a user and try it out! </a>
                     <p></p>
                    <a href='https://github.com/calvinyueWillTry/PlatesWithPurpose/tree/main' target='_blank'> Click this Github link for our to see our coding work </a>
                  </div>
                  
               </div>
            </div>
          <div className="row" >  
            <div className="col-md-4 margi_bottom">
                  <div className="className_box text_align_center">
                     <i><img src="images/Note_Taking.Homepage.png" alt="#"/></i> 
                     <h3>Note Taker</h3>
                     <p>  </p>
                    <a href="https://infinite-temple-67769-6b752bbaadb8.herokuapp.com/" target='_blank'> Click this link to become a User and join and create some notes for yourself!</a>
                    <p></p>
                    <a href="https://github.com/calvinyueWillTry/Taking_Notes_with_backend_JS/tree/main" target='_blank'> Click this Github link to see the coding work I did behind the scene</a>
                  </div>
                  
            </div>
            <div className="col-md-4 margi_bottom">
                  <div className="className_box text_align_center">
                     <i><img src="images/NoSQL.2024-07-13 at 12.03.33 AM.png" alt="#"/></i> 
                     <h3>noSQL Social Media (Backend)</h3>
                     <p>  </p>
                    <a href="https://drive.google.com/file/d/1nyhZKwz4zx1-UxyIykv17RqcZgwQLBmu/view" target='_blank'> Click this link to see a demonstration of how it works!</a>
                    <p></p>
                    <a href="https://github.com/calvinyueWillTry/techblog_accounts_for_commenting" target='_blank'> Click this Github link to see the coding work I did behind the scene</a>
                  </div>
                  
            </div>
            <div className="col-md-4 margi_bottom">
               <div className="className_box text_align_center">
                  <i><img src="images/Screen Shot 2024-07-13 at 12.01.12 AM.png"/></i> 
                  <h3> Group Project 3 (to be published) </h3>
                  <p> Group project by Austin Marlatt, Kyler Gibbs and Alex Austin (to be posted, eCommerce backend in the meantime) </p>
                  <p>  </p>
                  <a href="https://drive.google.com/file/d/1lU4nkYEBARqHX6Bqagcg8baz6u-iQ8t4/view" target='_blank'> Click this link to try it out yourself! (dummy links posted until further notice) </a>
                  <p>  </p>
                  <a href="https://github.com/calvinyueWillTry/Commerce_Online_Selection_Program" target='_blank'> Click this Github link to see the coding work we did behind the scene </a>
               </div>
            </div>
            </div>
         </div>
      </div>)
};
export default PortfolioCard;