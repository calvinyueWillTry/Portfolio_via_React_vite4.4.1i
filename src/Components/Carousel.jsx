import React from 'react';
function Carousel() {
    return (<div className="full_bg">
         <div className="slider_main">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-12">
                     {/**no longer working. Why (no error messages) ? */}
                     <div id="carouselExampleIndicators" className="carousel slide">
                        <ol className="carousel-indicators">
                           <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="3" className="active"></li>
                        </ol>
                        <div className="carousel-inner">
                           
                           <div className="carousel-item active">
                           <div class="container-fluid">
                              <div className="carousel-caption relative">
                                 <div className="row d_flex">
                                    <div  className="col-md-5">
                                       <div className="board">
                                          <h3>
                                             Calvin<br/> Yue<br/> Technical <br/>Profess-<br/>-ional in the Making
                                          </h3>
                                          
                                          <div className="link_btn">
                                             <a className="read_more" href="Javascript:void(0)">Read More   <span></span></a>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-7">
                                       <div className="banner_img">
                                          <figure><img className="img_responsive" src="images/Web.Seattle.JPG"/></figure>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              </div>
                           </div>
                          
                           <div className="carousel-item">
                              <div className="carousel-caption relative">
                                 <div className="row d_flex">
                                    <div  className="col-md-5">
                                       <div className="board"> 
                                          <h3>
                                             Calvin<br/> Yue<br/> Computer Full-Stack Coding Technician 
                                          </h3>
                                          
                                          <div className="link_btn">
                                             <a className="read_more" href="Javascript:void(0)">Read More   <span></span></a>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-7">
                                       <div className="banner_img">
                                          <figure><img className="img_responsive" src="images/Web.ECCChristmas.jpg"/></figure>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="carousel-item">
                              <div className="carousel-caption relative">
                                 <div className="row d_flex">
                                    <div  className="col-md-5">
                                       <div className="board">
                                          <h3>
                                             Calvin<br/> Yue<br/> Audio-<br/>-visual Production
                                          </h3>
                                          
                                          <div className="link_btn">
                                             <a className="read_more" href="Javascript:void(0)">Read More   <span></span></a>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-7">
                                       <div className="banner_img">
                                          <figure><img className="img_responsive" src="images/computer.jpg"/></figure>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="carousel-item">
                           <div class="container-fluid">
                              <div className="carousel-caption relative">
                                 <div className="row d_flex">
                                    <div  className="col-md-5">
                                       <div className="board">
                                          <h3>
                                             Calvin<br/> Yue<br/> Church and <br/>Community Member
                                          </h3>
                                          
                                          <div className="link_btn">
                                             <a className="read_more" href="Javascript:void(0)">Read More   <span></span></a>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-7">
                                       <div className="banner_img">
                                          <figure><img className="img_responsive" src="images/ECCChoir.jpg"/></figure>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           </div>
                        {/**Why is this one is not showing up? */}
                        </div>
                       
                        <a className="carousel-control-prev bg-dark" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <i className="fa fa-arrow-left bg-danger" aria-hidden="true"></i>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next bg-dark" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <i className="fa fa-arrow-right bg-danger" aria-hidden="true"></i>
                        <span className="sr-only">Next</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
};
export default Carousel;