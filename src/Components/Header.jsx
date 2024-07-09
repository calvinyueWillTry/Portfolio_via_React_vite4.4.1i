import React from 'react';
import Nav from './Nav';
function Header({setCurrentPage}) {

    return  (//decouple Header and Nav
      <div className="header">
      <div className="container-fluid">
         <Nav setCurrentPage={setCurrentPage}>
         </Nav>
      </div>
   </div>
    )
  };
  
  export default Header;
  