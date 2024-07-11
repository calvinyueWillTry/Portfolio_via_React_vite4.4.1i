import React from 'react';

function Footer() {
    return (
        <footer>
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-md-4 ">
                     <div className="infoma">
                        <h3>Contact Us</h3>
                        <ul className="conta">
                           <li><i className="fa fa-map-marker" aria-hidden="true"></i>Locations 
                           
                           </li>
                           <div className="map-responsive">
                              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eugene,+OR" width="600" height="450" frameborder="0" style={{border:"0", width: "100%"}} allowfullscreen=""></iframe>
                           </div>
                           <li><i className="fa fa-phone" aria-hidden="true"></i>Call +01 541-343-8619</li>
                           <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="Javascript:void(0)"> yue.calvin@yahoo.com</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-8">
                     <div className="row border_left">
                        <div className="col-md-12">
                           <div className="infoma">
                              <h3>Newsletter</h3>
                              <form className="form_subscri">
                                 <div className="row">
                                    <div className="col-md-12">
                                    </div>
                                    {/**how to enter for subscriptions? Or is this even necessary? */}
                                    <div className="col-md-4">
                                       <input className="newsl" placeholder="Enter your email" type="text" name="Enter your email"/>
                                    </div>
                                    <div className="col-md-4">
                                       <input className="newsl" placeholder="Enter your email" type="text" name="Enter your email"/>
                                    </div>
                                    <div className="col-md-4">
                                       <button className="subsci_btn">subscribe</button>
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
                                 {/**need to insert live links to some of these. How about enlarging images? */}
                                 <li><a href="Javascript:void(0)"><i className="fa fa-facebook" aria-hidden="true" ></i></a></li>
                                 <li><a href="Javascript:void(0)"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
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