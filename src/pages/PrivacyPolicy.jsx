import React from 'react';
import Footer from '../components/Footer';
import MainNavbar from '../components/MainNavbar'

const PrivacyPolicy = () => {
  return (
    <div><MainNavbar></MainNavbar>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to our Food Delivery App. Your privacy is very important to us.
          This Privacy Policy outlines the types of personal information we collect,
          how we use it, and the steps we take to protect it.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>
          We collect personal information to provide you with a better user experience. The types of information we collect include:
        </p>
        <ul>
          <li><strong>Personal Details:</strong> Name, address, phone number, and email address.</li><br></br>
          <li><strong>Payment Information:</strong> Credit card information for payment processing.</li><br></br>
          <li><strong>Usage Data:</strong> Information on how you use our app, such as delivery preferences and order history.</li><br></br>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>
          The information we collect is used to:
        </p>
        <ul>
          <li>Process your orders and deliveries.</li>
          <li>Communicate with you about your orders and services.</li>
          <li>Improve the app's functionality and user experience.</li>
          <li>Process payments securely.</li>
        </ul>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>
          We take your privacy seriously and implement industry-standard measures to protect your data. Your information is stored securely, and we use encryption methods to protect sensitive data such as payment information.
        </p>
      </section>

      <section>
        <h2>Sharing Your Information</h2>
        <p>
          We will never sell or rent your personal information. However, we may share your information with trusted third parties for the purpose of fulfilling orders, such as payment processors and delivery partners.
        </p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information at any time. If you wish to make any changes to your information, please contact us through the app or our support page.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Our app uses cookies to enhance your user experience. Cookies help us remember your preferences and provide better services. You can disable cookies in your browser settings, but it may affect the functionality of the app.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be reflected on this page, and the date of the most recent update will be noted at the bottom of this page.
        </p>
      </section>

      <Footer></Footer></div>
    </div>
  );
};

export default PrivacyPolicy;
