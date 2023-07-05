import React from 'react';
import './Contact.css';

function Contact() {

   

const HandleMess =(e)=>{
    e.preventDefault();
    alert("Thanks for Submission");
    
}

  return (
    <div>
      <form>
        <label htmlFor='Name'>Type Your Name :-</label>
        <input type="text" id="username" placeholder="Type Name" /><br></br>
        <label htmlFor='contact'>Type Your Contact info:- </label>
        <input type="text" id="contactInput" placeholder="Type Contact" /><br></br>
        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="india">India</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <button type="submit" onClick={HandleMess}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
