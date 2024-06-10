import { Grid, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import Deal from "../../components/deals";
import BlogsList from "../../components/blogslist";
import "../Home/home.css";
import Footer from "../../components/footer";

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
                    <Typography
                      variant="h6"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Small Products
                    </Typography>
                    <Typography
                      variant="h2"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {item.text}
                    </Typography>
                    <Typography
                      variant="h2"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      2024 Collection{" "}
                    </Typography>
                    <Button
                      style={{
                        border: "1px solid black",
                        color: "black",
                        fontFamily: "Montserrat, sans-serif",
                      }}
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
        <div className="cards">
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item>
              <Grid container alignItems="center" gap="15px">
                <Grid item>
                  <LocalShippingOutlinedIcon
                    className="icons"
                    style={{ width: "50px", height: "50px" }}
                  ></LocalShippingOutlinedIcon>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Free Shipping
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "12px",
                      color: "#666666",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Money return no question asked
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" gap="15px">
                <Grid item>
                  <SupportAgentOutlinedIcon
                    className="icons"
                    style={{ width: "50px", height: "50px" }}
                  ></SupportAgentOutlinedIcon>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Support 24/7
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "12px",
                      color: "#666666",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Money return no question asked
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" gap="15px">
                <Grid item>
                  <CurrencyExchangeOutlinedIcon
                    className="icons"
                    style={{ width: "50px", height: "50px" }}
                  ></CurrencyExchangeOutlinedIcon>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Money Return
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "12px",
                      color: "#666666",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Money return no question asked
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" gap="15px">
                <Grid item>
                  <SavingsOutlinedIcon
                    className="icons"
                    style={{ width: "50px", height: "50px" }}
                  ></SavingsOutlinedIcon>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Discounts
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "12px",
                      color: "#666666",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Money return no question asked
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Deal />
        <BlogsList />
        <Footer></Footer>
      </Grid>
    </Box>
  );
}
export default Home;
