import React from 'react';
import Nav from './Nav';
function Header({setCurrentPage}) {

    return  (//decouple Header and Nav
      <div class="header">
      <div class="container-fluid">
         <Nav setCurrentPage={setCurrentPage}>
         </Nav>
      </div>
   </div>
    )
  };
  
  export default Header;
  