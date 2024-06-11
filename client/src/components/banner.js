import React from "react";
import { Grid, Button, Typography, Box, Divider } from "@mui/material";
import "../container/Home/home.css";
import { Link } from "react-router-dom";
export const Banner = ({ menu, setMenu }) => {
  return (
    <Box mb={8} mt={4} ml={4} mr={4}>
      <Grid container justifyContent="center" alignItems="center" spacing={5}>
        <Grid item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Divider
              style={{
                width: "100px",
                backgroundColor: "black",
                marginRight: "10px",
                padding: "1px",
              }}
            />
            <Typography
              variant="h3"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
              }}
            >
              Discover More
            </Typography>
            <Divider
              style={{
                width: "100px",
                backgroundColor: "black",
                marginLeft: "10px",
                padding: "1px",
              }}
            />
          </div>
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={4}>
              <div
                className="male-banner"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <p style={{ padding: "10px 20px 10px 20px " }}> Male Fashion</p>
                <Link
                  to="/men"
                  onClick={() => setMenu("Men")}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "0px 20px 10px 20px ",
                    fontSize: "12px",
                  }}
                >
                  Click Here
                </Link>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                className="female-banner"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <p style={{ padding: "20px" }}> Women Fashion</p>
                <Link
                  to="/women"
                  onClick={() => setMenu("Women")}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "0px 20px 10px 20px ",
                    fontSize: "12px",
                  }}
                >
                  Click here
                </Link>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                className="kids-banner"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <p style={{ padding: "20px" }}> Kids Fashion</p>
                <Link
                  to="/kids"
                  onClick={() => setMenu("Kids")}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "0px 20px 10px 20px ",
                    fontSize: "12px",
                  }}
                >
                  Click Here
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Link to="/shop" onClick={() => setMenu("Shop")}>
            <Button
              style={{
                padding: "5px 35px 5px 35px",
                color: "black",
                border: "2px solid black",
              }}
            >
              Shop Now
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
