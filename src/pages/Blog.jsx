import React from 'react'
import Blog1 from "./../images/Blog1.jpg";
import Blog2 from "./../images/Blog2.jpg";
import Blog3 from "./../images/Blog3.jpg";
import Blog4 from "./../images/Blog4.jpg";
import Blog5 from "./../images/Blog5.jpg";
import Blog6 from "./../images/Blog6.jpg";


import Card from "react-bootstrap/Card";
import MainNavbar from '../components/MainNavbar';

import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';


const Blog = () => {
  return (
    <div>
      <MainNavbar />

      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h1 class="title">Recent Posts</h1>

        <div className="card-container " >       

          <div className="card">
            <img className="card-img-top" src={Blog1} height={200} alt="Card image cap" />
            <div className="card-body">
              <div>
                <h3>What is the Most Popular Indian Foods in UK</h3>
              </div>
              <div>
                <p className="card-text">Indian foods have become an integral part of the UK’s food scene, winning the hearts of millions. From the rich, creamy textures of a comforting Korma to the spicy Indian Biryani, Indian food in the UK is more than just a meal—it’s a delicious adventure. Whether you’re grabbing a quick  </p>
              </div>
              <Button variant="primary" className="btn-ReadMore">Read More</Button>
              <a href="" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={Blog2} height={200} alt="Card image cap" />
            <div className="card-body">
              <div>
                <h3>Top 5 Best Fish and Chips in Carlisle: Must-Try Chippies Loved by Locals</h3>
              </div>

              <div>
                <p className="card-text">Carlisle is known for its rich history and great food scene, with fish and chips being a staple loved by locals and visitors alike. Whether you're on the lookout for a quick takeaway or a traditional meal, finding the best chippy in Carlisle is easy with these top-rated options. Here </p>
              </div>
              <Button variant="primary" className="btn-ReadMore">Read More</Button>
              <a href="" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
            </div>
          </div>


          <div className="card">
            <img className="card-img-top" src={Blog3} height={200} alt="Card image cap" />
            <div className="card-body">
              <div>
                <h3>Why garlic bread should be your go-to comfort food</h3>
              </div>

              <div>
                <p className="card-text">There is nothing quite like the smell of freshly baked garlic bread wafting through the air. It's the smell of comfort, home, and love. Garlic bread is the perfect comfort food, and it's easy to see why.&nbsp;&nbsp;&nbsp; &nbsp;Packed with flavours&nbsp; The combination of garlic, butter, and cheese is simply irresistible.  </p>
              </div>
              <Button variant="primary" className="btn-ReadMore">Read More</Button>
              <a href="" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
            </div>
          </div>
        </div>

        <br></br>
        <div className="card-container " >


          <div className="card">
            <img className="card-img-top" src={Blog4} height={200} alt="Card image cap" />
            <div className="card-body">
              <div>
                <h3>Exploring sides and drinks that pair well with Fish and Chips and why they work so well together!</h3>
              </div>
              <div>
                <p className="card-text">Fish and chips is a classic British dish that combines crispy, battered fish with salty yet fluffy chips. It's a meal many love for a good reason—the combination of flavours and textures is unbeatable. But what are the best foods and drinks to pair with this iconic dish? Here are</p>
              </div>
              <Button variant="primary" className="btn-ReadMore">Read More</Button>
              <a href="" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
            </div>
          </div>


          <div className="card">
            <img className="card-img-top" src={Blog5} height={200}  alt="Card image cap" />
            <div className="card-body">
              <div>
                <h3>Top 4 Burger Takeaways That You Have to Try in Congleton</h3>
              </div>
              <div>
                <p className="card-text">Juicy, affordable, and above all, they make me happy. We can give a million more reasons for why we love burgers so much, but let’s keep that for another day. If you are in or around Congleton, you must definitely try these burger takeaways in Foodhub that will make you </p>
              </div>
              <Button variant="primary" className="btn-ReadMore">Read More</Button>
              <a href="" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={Blog6} height={200} alt="Card image cap" />
            <div className="card-body">
              <div>
                <h3>Top 4 Chinese Takeaways in Redcar</h3>
              </div>
              <div>
                <p className="card-text">If you are looking for ethnic cuisines, chances are you usually end up with very few options, and Chinese will be among them - one that has taken over the world by storm. Today, Chinese food has almost become a way of life with dishes such as Fried rice, Chow</p>
              </div>
              <Button variant="primary" className="btn-ReadMore">Read More</Button>
              <a href="" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
            </div>
          </div>

        </div>

      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default Blog

