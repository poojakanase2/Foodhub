import React from 'react'

const MainNavbar = () => {
  return (
  
    <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="Home">Home</a></li>
                <li><a href="CartPage">Menu</a></li>
                <li><a href="Offers">Offers</a></li>
                <li><a href="FoodItem">FoodItem</a></li>
                <li><a href="Order">Order</a></li>
                <li><a href="ContactUs">ContactUs</a></li>
                <li><a href="FeedbackPage">Feedback</a></li>
                <li><a href="Blog">Blog</a></li>

            </ul>
            <h1 class="logo">FoodHub</h1>
        </div>
    </nav>

  )
}

export default MainNavbar
