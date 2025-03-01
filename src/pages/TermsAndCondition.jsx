
import React from 'react'
import MainNavbar from '../components/MainNavbar'
import Footer from '../components/Footer';
const TermsAndCondition = () => {
  return (
    <div><MainNavbar></MainNavbar>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <div className="terms-container">
      <h1>Terms and Conditions</h1>
      
      <section className="section">
        <h2>Introduction</h2>
        <p>
          Welcome to our Food Delivery App. By using this application, you agree to comply with and be bound by these Terms and Conditions.
        </p>
      </section>
      
      <section className="section">
        <h2>1. User Agreement</h2>
        <p>
          By using our food delivery services, you confirm that you are at least 18 years old, or that you have consent from a parent or guardian to use the service.
        </p>
      </section>
      
      <section className="section">
        <h2>2. Account Registration</h2>
        <p>
          To place an order, you may need to register an account. You agree to provide accurate information during the registration process and to keep your account details secure.
        </p>
      </section>

      <section className="section">
        <h2>3. Order Placement and Cancellation</h2>
        <p>
          Once an order is placed, you are responsible for its accuracy. Orders can be canceled within a specific time frame, but after this period, cancellations may not be accepted.
        </p>
      </section>

      <section className="section">
        <h2>4. Delivery and Shipping</h2>
        <p>
          We provide delivery services to specific locations. We are not responsible for any delays or issues caused by third-party delivery services.
        </p>
      </section>

      <section className="section">
        <h2>5. Payment</h2>
        <p>
          All payments are processed securely through our payment gateway. By placing an order, you agree to pay the total cost, including any applicable taxes and delivery fees.
        </p>
      </section>

      <section className="section">
        <h2>6. Refunds</h2>
        <p>
          Refunds will be processed based on our refund policy. Any disputes should be raised within 48 hours of receiving your order.
        </p>
      </section>

      <section className="section">
        <h2>7. Privacy Policy</h2>
        <p>
          Your privacy is important to us. We handle your personal information in accordance with our Privacy Policy. For more information, please review our Privacy Policy.
        </p>
      </section>

      <section className="section">
        <h2>8. Limitation of Liability</h2>
        <p>
          We are not responsible for any damages, losses, or injuries that occur while using the app or during the food delivery process.
        </p>
      </section>

      <section className="section">
        <h2>9. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted here, and it’s your responsibility to review them periodically.
        </p>
      </section>

      <section className="section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about our Terms and Conditions, please contact us at support@fooddeliveryapp.com.
        </p>
      </section>
      
    </div>
    <Footer></Footer>
    </div>
  )
}

export default TermsAndCondition
