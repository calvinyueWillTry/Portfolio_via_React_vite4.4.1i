import React from 'react';
import PortfolioCard from '../Components/PortfolioCard';
function CodingPortfolio () {
    return (
        <div className="about">
         <div className="container-fluid">
         
            <div className="row d_flex">
               
                 
                  <div className="text_align_center">
                     <h2>Coding Projects Representing<br/>some of My Work </h2>
                     <p>This is my portfolio of samples of some of my work in the coding bootcamp
                     </p> 
                  </div>
               < PortfolioCard />
            </div>
         </div>
      </div>
      
    )
};
export default CodingPortfolio;