import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, Container, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

// Corrected Image Paths
import banner1 from "./../images/banner.jpeg";
import banner2 from "./../images/banner2.jpg";
import banner3 from "./../images/banner3.jpg";
import banner4 from "./../images/banner4.jpg";
import banner5 from "./../images/banner5.jpg";
import banner7 from "./../images/banner7.jpg";
import burger from "./../images/burgger.jpg";
import pizza from "./../images/pizza.jpg";
import pasta from "./../images/pasta.jpg";
import dessert from "./../images/dessert.jpg";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const backgroundImages = [banner1, banner2, banner3, banner4, banner5, banner7];

const trendingItems = [
  { id: 1, name: "Cheese Burger", image: burger, price: "₹199" },
  { id: 2, name: "Pepperoni Pizza", image: pizza, price: "₹399" },
  { id: 3, name: "Creamy Pasta", image: pasta, price: "₹299" },
  { id: 4, name: "Chocolate Dessert", image: dessert, price: "₹249" },
];


const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <MainNavbar/>
        <br></br>
        <br></br>
        <br></br>

      {/* Banner Section */}
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Overlay for better text visibility */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)", // ✅ Light black overlay
            zIndex: 1,
          }}
        />
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            position: "relative",
            zIndex: 2,
            fontSize: { xs: "28px", md: "48px" }, // ✅ Responsive font size
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          <h3 className="home-title">Delicious Food, Delivered Fast 🍔🍕</h3>
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            mb: 5,
            position: "relative",
            zIndex: 2,
            fontSize: { xs: "16px", md: "24px" },
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          Order your favorite meals with just one click!
        </Typography>
        <Button
          component={Link}
          to="/Restaurant"
          variant="contained"
          sx={{
            backgroundColor: "red",
            padding: "12px 24px",
            fontSize: "18px",
            mt: 3,
            zIndex: 2,
            "&:hover": { backgroundColor: "darkred" },
          }}
        >
          View Restaurants
        </Button>
      </div>

      {/* Trending Food Items */}
      <Container sx={{ mt: 6 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold">
          🍽 Trending Food Items
        </Typography>
        <Grid container spacing={3} sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
          {trendingItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id} sx={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  width: 250,
                  height: 350,
                  boxShadow: 3,
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)", boxShadow: "5px 5px 15px rgba(0,0,0,0.3)" },
                }}
              >
                <CardMedia component="img" height="180" image={item.image} alt={item.name} />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {item.price}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: "black",
                      "&:hover": { backgroundColor: "gray" },
                    }}
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
     
      </Container>
      <Footer/>
</div>

  );
};

export default Home;