import React from 'react'
import '../styles/contact.css'
const Contact = () => {
  return (
    <div class='main'>
      <section class='texts'>
      <h1>
      Get in touch
      </h1>
      <p>
        Welcome to  OneArt! The one stop shop for all your art supplies! <br />
        <br />
        Please fill in the details below to enable our team to contact you between Monday-Saturday 10:30 AM to 6:30 PM <br />
      </p>
      </section>

      <section class="form">
        
        <input type="text" placeholder='Your Name' /> 
        
        <input type="text" placeholder='your@mail.com'/> 
        
        <input type="number" placeholder='Your Mobile Number' />
      </section>
      <section class='formTwo'>
        
        <input type="number" placeholder='order number'/>
        
        <input class='comments' type="text" placeholder='comments (if any)'/>

        <button class='btnsend'>send</button>
      </section>
      
    </div>
  )
}

export default Contact