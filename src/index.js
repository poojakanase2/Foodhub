import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContactUs from './pages/ContactUs';
import { BrowserRouter , Routes  ,Route } from 'react-router-dom';
import Order from './pages/Order';
import Blog from './pages/Blog';
import AboutUsPage from './pages/AboutUsPage';
import CartPage from './pages/CartPage';
import FeedbackPage from './pages/FeedbackPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndCondition from './pages/TermsAndCondition';
import OffersPage from './pages/Offers';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import FoodItem from './pages/FoodItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Order" element={<Order />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="FeedbackPage" element={<FeedbackPage />} />
        <Route path="AboutUsPage" element={<AboutUsPage />} />
        <Route path="CartPage" element={<CartPage />} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="TermsAndCondition" element={<TermsAndCondition />} />
        <Route path="Offers" element={<OffersPage/>} />
        <Route path="Restaurant" element={<Restaurant/>} />
        <Route path="FoodItem" element={<FoodItem/>} />

      </Routes>
</BrowserRouter>  
    </React.StrictMode>
);

reportWebVitals();
