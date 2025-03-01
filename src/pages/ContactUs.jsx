import React from 'react'
import MainNavbar from '../components/MainNavbar'
import Footer from '../components/Footer'


const ContactUs = () => {
  return (
    <div>
      <MainNavbar/>
      <br></br><br></br> <br></br>    
      <br></br>
      <br></br>

      <div>
        <div className="container-Contactus">
          <div className="contact-box">
            <div className="left">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60952.8866648791!2d74.15605520015593!3d17.288730796705472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc182450c753bad%3A0xb3493b19ae7886ca!2sKarad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1740156502554!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="right">
              <h2>Contact Us</h2>
              <input type="text" className='field' placeholder='Enter Your Name'></input>
              <input type="text" className='field' placeholder='Enter Your Email'></input>
              <input type="text" className='field' placeholder='Enter Your phone'></input>
              <textarea placeholder="Message" className="field"></textarea>
              <button className="btn-submit">Submit</button>
            </div>
          </div>
        </div> 
        <Footer/>      
      </div>
      </div>
  )
}

export default ContactUs
