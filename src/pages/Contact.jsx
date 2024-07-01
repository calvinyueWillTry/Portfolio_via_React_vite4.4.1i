import React from 'react';
function Contact () {
    return (
        <div class="contact">
        <div class="container">
           <div class="row ">
              <div class="col-md-12">
                 <div class="titlepage text_align_center">
                    <h2>Contact Us</h2>
                 </div>
              </div>
              <div class="col-md-6">
                 <form id="request" class="main_form">
                    <div class="row">
                       <div class="col-md-6 ">
                          <input class="contactus" placeholder="Name*" type="type" name=" Name"/> 
                       </div>
                       <div class="col-md-6">
                          <input class="contactus" placeholder="Phone Number*" type="type" name="Phone Number"/>                          
                       </div>
                       <div class="col-md-12">
                          <input class="contactus" placeholder="Email*" type="type" name="Email"/>                          
                       </div>
                       <div class="col-md-12 select-outline">
                          <select class="custom-select ">
                             <option selected>Select Subject*</option>
                             <option value="1">a</option>
                             <option value="2">b</option>
                             <option value="3">c</option>
                          </select>
                       </div>
                       <div class="col-md-12">
                          <textarea class="textarea" placeholder="Message" type="type" Message="Name"></textarea>
                       </div>
                       <div class="col-md-12">
                          <button class="send_btn">Send</button>
                       </div>
                    </div>
                 </form>
              </div>
              <div class="col-md-6">
                 <div class="map_main">
                    <div class="map-responsive">
                       <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="450" frameborder="0" style={{border:"0", width: "100%"}} allowfullscreen=""></iframe>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
    )
};
export default Contact;