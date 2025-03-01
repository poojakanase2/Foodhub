import React from "react";
import { MenuList } from "../components/Data";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const FoodItem = () => {
  return (
    <div>
    <MainNavbar/>
    <br></br>
    <br></br>
    <br></br>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card key={menu.name} sx={{ maxWidth: 390, display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: 400 }}
                component="img"
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Footer/>
      </div>
    
  );
};

export default FoodItem;