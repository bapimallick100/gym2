import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h1>Contact</h1>
        <form action="">
        <input type="text" placeholder='Full Name' required/>
        <input type="email" placeholder="Email Address" required/>
        <textarea  id="" cols="30" rows="10" placeholder='Write Here.....' name="message"></textarea>
        <input type="submit" value="Send" />
        </form>
      
    </div>
  )
}

export default Contact