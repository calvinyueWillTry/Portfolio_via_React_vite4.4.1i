import React from 'react';

function Nav({setCurrentPage}) {

    return  (//is this a header? It's technically both a header and Nav
         <div class="row d_flex">
            <div class=" col-md-2 col-sm-3 col logo_section">
               <div class="full">
                  <div class="center-desk">
                     <div class="logo">
                        <a href="#" onClick={()=>setCurrentPage("Home")}><img src="images/logo.png" alt="#" /></a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-8 col-sm-12">
               <nav class="navigation navbar navbar-expand-md navbar-dark ">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarsExample04">
                     <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                           <a class="nav-link" href="#" onClick={()=>setCurrentPage("Home")}>Home</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#" onClick={()=>setCurrentPage("AboutMe")}>About</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#" onClick={()=>setCurrentPage("Portfolio")}>Portfolio</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#" onClick={()=>setCurrentPage("Resume")}>Resume</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#" onClick={()=>setCurrentPage("Contact")}>Contact Us</a>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
            <div class="col-md-2">
               <ul class="email text_align_right">
                  <li class="d_none"><a href="Javascript:void(0)"><i class="fa fa-user" aria-hidden="true"></i></a></li>
                  <li class="d_none"> <a href="Javascript:void(0)"><i class="fa fa-search" style={{cursor: "pointer"}} aria-hidden="true"></i></a> </li>
               </ul>
            </div>
         </div>
    )
  };
  
  export default Nav;
  