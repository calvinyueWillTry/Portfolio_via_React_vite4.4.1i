import React from 'react';
function Carousel() {
    return (<div className="full_bg">
         <div className="slider_main">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-12">
                     
                     <div id="carouselExampleIndicators" className="carousel slide">
                        <ol className="carousel-indicators">
                           <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                          
                           <div className="carousel-item active">
                              <div className="carousel-caption relative">
                                 <div className="row d_flex">
                                    <div  className="col-md-5">
                                       <div className="board">
                                          <i><img src="images/top_icon.png" alt="#"/></i>
                                          <h3>
                                             Skating<br/> Board<br/> School
                                          </h3>
                                          <div className="link_btn">
                                             <a className="read_more" href="Javascript:void(0)">Read More   <span></span></a>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-7">
                                       <div className="banner_img">
                                          <figure><img className="img_responsive" src="images/banner_img.png"/></figure>
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
                                          <i><img src="images/top_icon.png" alt="#"/></i>
                                          <h3>
                                             Skating<br/> Board<br/> School
                                          </h3>
                                          <div className="link_btn">
                                             <a className="read_more" href="Javascript:void(0)">Read More   <span></span></a>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-7">
                                       <div className="banner_img">
                                          <figure><img className="img_responsive" src="images/banner_img.png"/></figure>
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
                                          <i><img src="images/top_icon.png" alt="#"/></i>
                                          <h3>
                                             Skating<br/> Board<br/> School
                                          </h3>
                                          <div className="link_btn">
                                             <a className="read_more" href="Javascript:void(0)">Read More   <span></span></a>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-7">
                                       <div className="banner_img">
                                          <figure><img className="img_responsive" src="images/banner_img.png"/></figure>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                       
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
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