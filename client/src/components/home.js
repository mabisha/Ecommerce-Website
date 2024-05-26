import { Grid, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import "../styles/home.css";
const images = [
  { text: "Winter Offer", src: "../images/home-image.png" },
  { text: "Summer Offer", src: "../images/home-image2.png" },
];
function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <Box>
      <Grid>
        <div className="carousel-container">
          <div
            className="carousel-slide"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((item, index) => (
              <div
                className="carousel-item"
                style={{ backgroundColor: "#F0E0FF" }}
                key={index}
              >
                <Grid
                  container
                  justifyContent="space-around"
                  alignItems="center"
                  paddingTop="50px"
                >
                  <Grid item>
                    <Typography variant="h6">Small Products</Typography>
                    <Typography variant="h2">{item.text}</Typography>
                    <Typography variant="h2">2024 Collection </Typography>
                    <Button
                      style={{ border: "1px solid black", color: "black" }}
                    >
                      Shop Now
                    </Button>
                  </Grid>
                  <Grid item>
                    <img
                      src={item.src}
                      alt="Home"
                      width="500px"
                      height="500px"
                    />
                  </Grid>
                </Grid>
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <ChevronLeftIcon
              className="carousel-button"
              onClick={prevSlide}
            ></ChevronLeftIcon>
            <ChevronRightIcon
              className="carousel-button"
              onClick={nextSlide}
            ></ChevronRightIcon>
          </div>
        </div>
      </Grid>
    </Box>
  );
}
export default Home;
