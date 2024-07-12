import React from 'react';
//import { Link } from 'react-router-dom'

function Footer() {
    return (
      
        <footer>
        {/**<Link to="https://www.google.com">Go to Google</Link> */} 
        
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-md-4 ">
                     <div className="infoma">
                        <h3>Contact Me</h3>
                        <ul className="conta">
                           <li><i className="fa fa-map-marker" aria-hidden="true"></i>Location
                           
                           </li>
                           
                           <li><i className="fa fa-phone" aria-hidden="true"></i>Call +01 541-343-8619</li>
                           <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="Javascript:void(0)"> yue.calvin@yahoo.com</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-8">
                     <div className="row border_left">
                        <div className="col-md-12">
                           <div className="infoma">
                              <form className="form_subscri">
                                 <div className="row">
                                    <div className="col-md-12">
                                    </div>
                                    <div className="map-responsive">
                                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eugene,+OR" width="600" height="450" frameborder="0" style={{border:"0", width: "100%"}} allowfullscreen=""></iframe>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                        <div className="col-md-9">
                        </div>
                        <div className="col-md-3">
                           <div className="infoma text_align_left">
                              <ul className="social_icon">
                                 {/** Can't insert live links, or enlarge images? */}
                                 <li ><a className="fa fa-facebook m-1" style={{borderRadius: "50%", width:"50px", height:"50px"}} href="https://www.facebook.com/calvin.yue.10" target="_blank" rel="noopener noreferrer"></a></li>
                                 
                                 <li><a className="fa fa-linkedin-square m-1" style={{borderRadius: "20%", width:"50px", height:"50px"}} href="https://www.linkedin.com/in/calvin-yue-a5425979/" target="_blank" rel="noopener noreferrer">
                                 </a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <p>© 2020 All Rights Reserved. Design by <a href="https://html.design/"> Free html Templates</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
    )
};
export default Footer;