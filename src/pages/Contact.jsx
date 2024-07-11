import React from 'react';
import { useState } from 'react';

function Contact () {
   const [user, userName] = useState("");
   const [email, emailAddress] = useState("");
   const [phone, phoneNumber] = useState("");
   const [subject, subjectSelection] = useState("");
   const [text, textSubmit] = useState("");

const contactClick = (event) => {
   const { target } = event;
   const inputNameString = target.name; //"email" on line 30, or "text" on line 53
   const inputValue = target.value; //{email} on line 30, or {text} on line 53
   if (inputNameString === "email") {
      console.log(inputNameString, inputValue);
      emailAddress(inputValue);
   }  else if (inputNameString === "text") {
      console.log(inputNameString, inputValue);//text, can't input the value
      textSubmit(inputValue);
   } else if (inputNameString ==="Name"){
      console.log(inputNameString, inputValue);
      userName(inputValue);
   } else if (inputNameString === "Phone") {
      console.log(inputNameString, inputValue);
      phoneNumber(inputValue);
   } else if (inputNameString === "subject") {
      console.log(inputNameString, inputValue);
      subjectSelection(inputValue);
   };
   }
   const handleOptions = (e)=> {
      subjectSelection(e.target.value);
   };
   const contactSubmit = (eve) => {
      eve.preventDefault();
      console.log(eve);
      alert(`Thank you for your contact! I will get back to you as soon as I can!`);
      const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=Hello ${user},your number is ${phone}, and you sent us the following message:${text}`;
      //need to create a window for the info to come through
      console.log(emailLink);
      userName("");
      emailAddress("");
      textSubmit("");
      subjectSelection("");
      phoneNumber("");
      window.open(emailLink);
      
      window.location.href = "/"
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
                 <form id="request" className="main_form" onSubmit={contactSubmit}>
                    <div className="row">
                       <div className="col-md-6 "> 
                          <input className="contactus" placeholder="Name*" 
                          type="text" name="Name" value={user} 
                          onChange={contactClick} required/> 
                       </div>
                       <div className="col-md-6"> 
                          <input className="contactus" placeholder="Phone Number" 
                          type="text" name="Phone" value={phone}
                          onChange={contactClick} />                          
                       </div>
                       <div className="col-md-12">
                       {/**this is just a subject */}
                           <input className="contactus" placeholder="Please enter your email address"
                           type="email" name="email" value={email} onChange={contactClick} required/>
                           <p></p>
                       <p>Subject </p>          
                       </div>{/** needs an email to send to? Did send a test email successfully */}
                       <div className="col-md-12 select-outline">
                          <select className="custom-select" name="subject" value={subject} 
                          onChange={contactClick} required>
                             <option selected>Select Subject*</option>
                             <option value="Audiovisual Recording">Audiovisual Recording</option>
                             <option value="Computer Coding">Computer Coding</option>
                             <option value="Church">Church</option>
                             <option value="Other">Other</option>
                          </select>
                       </div>
                       <div className="col-md-12">
                          <textarea className="textarea" placeholder="Message" 
                          type="type" name="text" Message="Name" 
                          onChange={contactClick} value = {text} required></textarea>
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