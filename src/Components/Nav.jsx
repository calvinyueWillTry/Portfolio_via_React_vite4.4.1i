import React from 'react';

function Nav({setCurrentPage}) {

    return  (//is this a header? It's technically both a header and Nav
         <div className="row d_flex">
            <div className=" col-md-2 col-sm-3 col logo_section">
               <div className="full">
                  <div className="center-desk">
                     
                  </div>
               </div>
            </div>
            <div className="col-md-8 col-sm-12">
               <nav className="navigation navbar navbar-expand-md navbar-dark ">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarsExample04">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                           <a className="nav-link" href="#" onClick={()=>setCurrentPage("Home")}>Home</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#" onClick={()=>setCurrentPage("AboutMe")}>About</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#" onClick={()=>setCurrentPage("Portfolio")}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#" onClick={()=>setCurrentPage("Resume")}>Resume</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#" onClick={()=>setCurrentPage("CodingProjects")}>Coding Portfolio</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#" onClick={()=>setCurrentPage("Contact")}>Contact Us</a>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
            <div className="col-md-2">
               <ul className="email text_align_right">
                  <li className="d_none"><a href="Javascript:void(0)"><i className="fa fa-user text-dark" aria-hidden="true"></i></a></li>
                  <li className="d_none"> <a href="Javascript:void(0)"><i className="fa fa-search text-dark" style={{cursor: "pointer"}} aria-hidden="true"></i></a> </li>
               </ul>
            </div>
         </div>
    )
  };
  
  export default Nav;
  