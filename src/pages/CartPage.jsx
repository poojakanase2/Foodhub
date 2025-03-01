
import React, { useState } from "react";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const CartPage = () => {
  // Sample menu items
  const menuItems = [
    {
      id: 1,
      name: "Chicken Tikka Tomato Masala",
      description: "Chicken Tikka Masala is a classic curried dish with soft tender chunks of char-grilled chicken, simmered briefly in a delicious & super aromatic gravyss.",
      price: 12.99,
      imageUrl: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/39/46/39/WM8rgRclQsGroxlo7eHA_0S9A3950.jpg", // Placeholder image
    },
    {
      id: 2,
      name: "Vegan Bacon",
      description: "Vegetarian bacon, also referred to as veggie bacon, vegan bacon, vegan rashers, vacon, or facon, is a plant-based imitation of bacon.",
      price: 8.99,
      imageUrl: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/14/88/99/LlkHd9qlTpqOlaaYdJjy_0S9A6887.jpg",
    },
    {
      id: 3,
      name: "Mcdonald's Big Mac Sauce Copycat Recipe",
      description: "The McDonald's Big Mac is a 100% beef burger with a taste like no other..",
      price: 14.99,
      imageUrl: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/42/94/38/fS29ttQnitOZ9fPVIvxA_0S9A5582.jpg",
    },
    {
      id: 4,
      name: "Crock-Pot Beef Roast",
      description: "Crock-pot beef roast is a hearty meal of beef chuck roast, vegetables, and gravy, cooked in a slow cooker.",
      price: 6.99,
      imageUrl: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/38/49/05/E2DPzYkQgGkM7QXntE1Q_Instant-pot-pot-roast-2895.jpg",
    },
    {
      id: 5,
      name: "Whipped Cream Frosting",
      description: "- Whipped Cream, as the name suggests is made from whipping the heavy cream with powdered sugar till it is holding its peaks",
      price: 12.99,
      imageUrl: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/39/01/3/aeAtoOWHSeWQh9UD7W3K_0S9A6192.jpg", // Placeholder image
    },
    {
      id: 6,
      name: "Mozzarella Sticks",
      description: "Mozzarella sticks are prepared by coating cheese strings in breadcrumbs or batter. ",
      price: 8.99,
      imageUrl: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/30/97/7/7GmgWw4TTUCCw7xGKQAP_0S9A6434.jpg",
    },
    {
      id: 7,
      name: "Moist & Delicious Banana Nut Bread",
      description: "Bread was very moist, matched with perfect texture & had the right balance of banana flavor.",
      price: 14.99,
      imageUrl: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/48/66/41/aB9Ar2MzTy2CIyxoINma_b.jpg",
    },
    {
      id: 8,
      name: "Chocolate Mousse",
      description: "Mousses are almost always cold dishes, and sweet mousses are sometimes served frozen.",
      price: 6.99,
      imageUrl: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/89/95/omZbv836RCmfVJbCHwx8-Chocolate-Mousse---8995--1.JPG",
    },
  ];

  // Cart state
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
   <div>
     <MainNavbar></MainNavbar>

<br></br>
<br></br>
<br></br>


   
    <div className="menu-container">

    <h1 className="tt">Menu</h1>
    <div className="menu-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {menuItems.map((item) => (
        <div key={item.id} className="menu-item" style={{ flex: '1 1 calc(33.333% - 20px)', maxWidth: '300px', border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
          <img src={item.imageUrl} alt={item.name} className="menu-item-image" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          <div className="menu-item-details">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <div className="price">
              <span>${item.price}</span>
              <button onClick={() => addToCart(item)} className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
    </div>
  </div>
  <Footer></Footer>
  </div>
  );
};

export default CartPage;
