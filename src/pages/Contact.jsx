import React from 'react';
import { useState } from 'react';

function Contact () {
   const [email, emailSubmit] = useState("");
const [text, textSubmit] = useState("");

function contactClick (event) {
   const { target } = event;
   const inputNameString = target.name; //"email" on line 30, or "text" on line 53
   const inputValue = target.value; //{email} on line 30, or {text} on line 53
   if (inputNameString=== "email") {
      emailSubmit(inputValue);
      console.log(inputNameString, inputValue);
   }  else if (inputNameString === "text") {
      textSubmit(inputValue);
      console.log(inputNameString, inputValue);//text, can't input the value
   }
   emailSubmit("");
   textSubmit("");
   }
    return (
        <div className="contact">
        <div className="container">
           <div className="row ">
              <div className="col-md-12">
                 <div className="titlepage text_align_center">
                    <h2>Contact Us</h2>
                 </div>
              </div>
              <div className="col-md-6">
                 <form id="request" className="main_form">
                    <div className="row">
                       <div className="col-md-6 ">
                          <input className="contactus" placeholder="Name*" type="type" name=" Name"/> 
                       </div>
                       <div className="col-md-6">
                          <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number"/>                          
                       </div>
                       <div className="col-md-12">
                       {/**this is just a subject */}
                       <li><a href="mailto:metoyou@example.com" placeholder="Email*" value = {email} type="email" name="email" size="30" onClick={contactClick} required>Subject</a></li>                      
                       </div>{/** needs an email to send to? Did send a test email successfully */}
                       <div className="col-md-12 select-outline">
                          <select className="custom-select ">
                             <option selected>Select Subject*</option>
                             <option value="1">Audiovisual Recording</option>
                             <option value="2">Computer Coding</option>
                             <option value="3">Church</option>
                             <option value="4">Other</option>
                          </select>
                       </div>
                       <div className="col-md-12">
                          <textarea className="textarea" placeholder="Message" type="type" name="text" Message="Name" onClick={contactClick} value = {text}></textarea>
                       </div>
                       <div className="col-md-12">
                          <button className="send_btn">Send</button>
                       </div>
                    </div>
                 </form>
              </div>
              <div className="col-md-6">
                 <div className="map_main">
                    <div className="map-responsive">
                       <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eugene,+OR" width="600" height="450" frameborder="0" style={{border:"0", width: "100%"}} allowfullscreen=""></iframe>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
    )
};
export default Contact;