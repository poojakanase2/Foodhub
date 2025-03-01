// OffersPage.js
import React from 'react';
import MainNavbar from '../components/MainNavbar'
import Footer from '../components/Footer';
import offer1 from './../images/offer1.webp'

// Sample offers data
const offers = [
  {
    id: 1,
    title: '50% Off on First Order',
    description: 'Get 50% off your first order when you sign up.',
    expiry: 'Expires: 28th Feb 2025',
    imageUrl:'https://www.zoopindia.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2Fbenefit_banner%2F50OffL.webp&w=580&q=75'
  },
  {
    id: 2,
    title: 'Buy 1 Get 1 Free Pizza',
    description: 'Buy 1 large pizza and get another one free. Don’t miss out!',
    expiry: 'Expires: 15th Mar 2025',
    imageUrl: 'https://couponswala.com/blog/wp-content/uploads/2020/03/dominos_buy1get1-min-min.png'
  },
  {
    id: 3,
    title: 'Free Delivery on your First Order',
    description: 'Enjoy free delivery . Limited time only!',
    expiry: 'Expires: 28th Feb 2025',
    imageUrl: 'https://t3.ftcdn.net/jpg/03/51/02/46/360_F_351024684_qRJBZa0XlvKs5bKDHVqlcbVF2ux4tDga.jpg'
  },
  {
    id: 4,
    title: '20% Off on Special Order',
    description: 'Get 20% off your Special order when you sign up.',
    expiry: 'Expires: 28th Feb 2025',
    imageUrl: 'https://png.pngtree.com/png-clipart/20220704/original/pngtree-pizza-food-fast-food-advertising-banner-png-image_8293880.png'
  },
  {
    id: 5,
    title: 'Buy 1 Get 1 Free Burger',
    description: 'Buy 1 Burger and get another one free. Don’t miss out!',
    expiry: 'Expires: 15th Mar 2025',
    imageUrl: 'https://images-cdn.ispot.tv/ad/qT6P/default-large.jpg'
  },
  {
    id: 6,
    title: '100% Off On 1 Order up to AED 20',
    description: 'Enjoy free delivery on orders above. Limited time only!',
    expiry: 'Expires: 28th Feb 2025',
    imageUrl: 'https://preview.redd.it/careem-food-has-reached-a-new-low-v0-du6rncts0tyc1.jpeg?width=1080&crop=smart&auto=webp&s=46d52995b14ac4547600bdb00259e00bb8f1cbab'
  }
];

const OffersPage = () => {
  return (
    <div><MainNavbar></MainNavbar>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="offers-page">
      <h1>Exclusive Offers</h1>
      <div className="offers-list">
        {offers.map(offer => (
          <div className="offer-card" key={offer.id}>
            <img src={offer.imageUrl} alt={offer.title} className="offer-image" />
            <div className="offer-details">
              <h2>{offer.title}</h2>
              <p>{offer.description}</p>
              <p className="expiry">{offer.expiry}</p>
            </div>
          </div>
        ))}
        
      </div><Footer></Footer>
    </div></div>
  );
};

export default OffersPage;