import React from 'react'
import Order2 from './../images/Order2.jpg';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

const Order = () => {
  return (
    <div>
      <MainNavbar/>

      <br></br>  <br></br>
      <br></br>

      <div class="container">
        <div class="left-side">
            <img src={Order2} alt="Order Image"/>
        </div>
        <div class="right-side">
            <h2>Order Now</h2>
            <form action="#" method="POST"/>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>

                <label for="mobile">Mobile Number:</label>
                <input type="tel" id="mobile" name="mobile" required/>

                <label for="order">Your Order:</label>
                <textarea id="order" name="order" required></textarea>

                <label for="address">Address:</label>
                <textarea id="address" name="address" rows="2" required></textarea>

                <button type="submit" >Order Now</button>
          
        </div>
       
    </div>
    <Footer/>
</div>
  )
}

export default Order