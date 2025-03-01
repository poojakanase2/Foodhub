import React from 'react'
import Facebook from './../images/Facebook.png'
import Twitter from './../images/Twitter.png'
import Instagram from './../images/Instagram.png'
import Linkedin from './../images/Linkedin.png'

const Footer = () => {
  return (

    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: example@email.com</p>
          <p>Phone: +123 456 789</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
          <a href="AboutUsPage">About Us</a>
          <br></br>
            <a href="/services">Services</a>
            <br></br>
            <a href="PrivacyPolicy">Privacy Policy</a>
            <br></br>
            <a href="TermsAndCondition">Terms & Conditions</a>
          </ul>
        </div>

        <div className="social-links">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
      )
}

export default Footer
