import React, { useState } from "react";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Rating,
    Button,
    Modal,
} from "@mui/material";
import backgroundImage from "./../images/restoback.jpg"; // Background Image

// Restaurant Images
import maharashtrianRest from "./../images/Rest5.jpg";
import spiceHub from "./../images/Rest2.jpeg";
import tandooriTreats from "./../images/Rest3.jpg";
import veggieParadise from "./../images/Rest4.jpg";

// Menu Item Images
import maharashtrianThali from "./../images/Maharashtra.jpg";
import tambdaPandhraRassa from "./../images/Kolhapuri tambda pandhara.jpg";
import misalPav from "./../images/Misal.jpg";
import puranPoli from "./../images/puranPoli.jpg";
import poha from "./../images/Poha.jpg";
import batataVada from "./../images/batata-vada.jpg";
import zunkaBhakar from "./../images/zunka-bhakar.jpg";
import solkadhi from "./../images/sol-kadhi.jpg";
import modak from "./../images/modak.jpeg";
import shrikhand from "./../images/Gulkand-Shrikhand.jpg";
import vadaPav from "./../images/VadaPav.jpg";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

// Full Menu List
const fullMenu = [
    { name: "Maharashtrian Thali", price: "₹500", image: maharashtrianThali },
    { name: "Kolhapuri Tambda Pandhra Rassa", price: "₹400", image: tambdaPandhraRassa },
    { name: "Misal Pav", price: "₹150", image: misalPav },
    { name: "Puran Poli", price: "₹200", image: puranPoli },
    { name: "Poha", price: "₹60", image: poha },
    { name: "Batata Vada", price: "₹80", image: batataVada },
    { name: "Zunka Bhakar", price: "₹180", image: zunkaBhakar },
    { name: "Solkadhi", price: "₹100", image: solkadhi },
    { name: "Modak", price: "₹250", image: modak },
    { name: "Shrikhand", price: "₹220", image: shrikhand },
    { name: "Vada Pav", price: "₹50", image: vadaPav },
];

// Restaurant List (All restaurants now have full menu)
const restaurantList = [
    { id: 1, name: "Maharashtrian Delights", image: maharashtrianRest, address: "100 Peshwa Road, Pune", rating: 4.9, menu: fullMenu },
    { id: 2, name: "Spice Hub", image: spiceHub, address: "123 Marine Drive, Mumbai", rating: 4.5, menu: fullMenu },
    { id: 3, name: "Tandoori Treats", image: tandooriTreats, address: "45 Residency Road, Nagpur", rating: 4.7, menu: fullMenu },
    { id: 4, name: "Veggie Paradise", image: veggieParadise, address: "78 Green Street, Nashik", rating: 4.6, menu: fullMenu },
];

const Restaurant = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [open, setOpen] = useState(false);
    const [openImageModal, setOpenImageModal] = useState(false); // Image modal state
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpen = (restaurant) => {
        setSelectedRestaurant(restaurant);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedRestaurant(null);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setOpenImageModal(true); // Open the image modal
    };

    const closeImageModal = () => {
        setOpenImageModal(false);
        setSelectedImage(null); // Close the image modal
    };

    return (
        <div>
            <MainNavbar/>
           <br></br>
            <br></br>
            <br></br>

            <Box
                sx={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                    paddingTop: "80px",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5%",
                }}
            >
                {/* Left Side - Title */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h2" sx={{ color: "black", fontWeight: "bold", marginBottom: 4 }}>
                        Our Top Restaurants
                    </Typography>
                </Box>

                {/* Right Side - Stacked Restaurant Cards */}
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", width: "500px" }}>
                    {restaurantList.map((restaurant) => (
                        <Card
                            key={restaurant.id}
                            sx={{
                                width: 300,
                                height: 300,
                                mb: 3,
                                backgroundColor: "black",
                                color: "white",
                                boxShadow: 4,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                borderRadius: 4,
                            }}
                        >
                            <CardActionArea onClick={() => handleOpen(restaurant)} sx={{ height: "100%" }}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={restaurant.image}
                                    alt={restaurant.name}
                                    sx={{ cursor: "pointer" }}
                                    onClick={() => handleImageClick(restaurant.image)} // Open restaurant image modal
                                />
                                <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <Typography variant="h5" sx={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
                                        {restaurant.name}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "white", textAlign: "center" }}>
                                        📍 {restaurant.address}
                                    </Typography>
                                    <Box sx={{ textAlign: "center" }}>
                                        <Rating value={restaurant.rating} precision={0.1} readOnly />
                                    </Box>
                                    <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: "white", color: "black", "&:hover": { backgroundColor: "gray" } }}>
                                        View Menu
                                    </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
            </Box>

            {/* Modal for Restaurant Menu */}
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        p: 3,
                        boxShadow: 24,
                        borderRadius: 2,
                        maxWidth: "600px",
                        maxHeight: "80vh",
                        overflowY: "auto",
                    }}
                >
                    {selectedRestaurant && (
                        <>
                            <Typography variant="h4" textAlign="center" sx={{ mb: 2, fontWeight: "bold" }}>
                                {selectedRestaurant.name} Menu
                            </Typography>

                            {/* Menu Items */}
                            {selectedRestaurant.menu.map((item, index) => (
                                <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent: "space-between", borderBottom: "1px solid #ccc", pb: 1 }}>
                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        alt={item.name}
                                        sx={{ width: 80, height: 80, borderRadius: 2, cursor: "pointer" }}
                                        onClick={() => handleImageClick(item.image)} // Open food item image modal
                                    />
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>{item.name}</Typography>
                                        <Typography variant="body2" sx={{ color: "gray" }}>{item.price}</Typography>
                                    </Box>
                                    <Button variant="contained" sx={{ backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "gray" } }}>
                                        Order Online
                                    </Button>
                                </Box>
                            ))}

                            {/* Close Button */}
                            <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "gray" } }} onClick={handleClose}>
                                Close
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>

            {/* Image Preview Modal */}
            <Modal open={openImageModal} onClose={closeImageModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        p: 3,
                        boxShadow: 24,
                        borderRadius: 2,
                    }}
                >
                    <CardMedia
                        component="img"
                        image={selectedImage}
                        alt="Selected"
                        sx={{ width: "100%", height: "auto" }}
                    />
                </Box>
            </Modal>
            <Footer/>
        </div>
        
    );
};

export default Restaurant;