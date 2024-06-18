import React, { useContext } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Shopcontext } from "../../context/context";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { data, cartItem, removeFromCart, getTotalCartAmount } =
    useContext(Shopcontext);
  const cartItems = data.find((item, index) => cartItem[item.id] > 0);
  console.log(cartItems);
  return (
    <Box mt={2} mr={4} ml={4}>
      {cartItems ? (
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
                margin: "15px 0 15px 0",
              }}
            >
              Your Cart Items
            </Typography>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ backgroundColor: "#f9f9f9", padding: "15px" }}
            >
              {["Image", "Title", "Price", "Quantity", "Total", "Remove"].map(
                (header) => (
                  <Grid item xs={2} key={header}>
                    <Typography
                      variant="body1"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {header}
                    </Typography>
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
          {data.map((item, index) => {
            if (cartItem[item.id] > 0) {
              return (
                <Grid item key={item.id}>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={2}>
                      <img
                        src={item.path}
                        alt="#product"
                        style={{ width: "100px", height: "auto" }}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Typography
                        variant="body2"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography
                        variant="body2"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                        }}
                      >
                        ${item.newPrice}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        style={{
                          padding: "5px 5px 5px 5px",
                          color: "black",
                          border: "1px solid black",
                        }}
                      >
                        {cartItem[item.id]}
                      </Button>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography
                        variant="body2"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                        }}
                      >
                        ${item.newPrice * cartItem[item.id]}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <DeleteForeverIcon
                        onClick={() => {
                          removeFromCart(item.id);
                        }}
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    </Grid>
                  </Grid>
                  <hr />
                </Grid>
              );
            } else {
              return null;
            }
          })}
          <Grid item>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Cart Totals
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  mt={2}
                  gap={20}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Sub Total
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    ${getTotalCartAmount()}
                  </Typography>
                </Box>
                <hr />
                <Box
                  display="flex"
                  alignItems="center"
                  mt={2}
                  gap={20}
                  justifyContent="space-between"
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Shipping Charge
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Free
                  </Typography>
                </Box>
                <hr />
                <Box
                  display="flex"
                  alignItems="center"
                  mt={2}
                  gap={20}
                  justifyContent="space-between"
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Total
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    ${getTotalCartAmount()}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={5}>
                  <Button
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "12px",
                    }}
                  >
                    CHECKOUT
                  </Button>
                  <Link to="/shop" style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "12px",
                      }}
                    >
                      CONTINUE TO SHOP
                    </Button>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  gap={4}
                >
                  <Typography
                    variant="body1"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    If you have a promo code add here
                  </Typography>
                  <Box display="flex" justifyContent="center">
                    <TextField type="text" variant="outlined" />
                    <Button
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "12px",
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={3}
          mb={4}
        >
          <Grid item>
            <LocalGroceryStoreOutlinedIcon
              style={{ width: "120px", height: "auto" }}
            ></LocalGroceryStoreOutlinedIcon>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              No items Found
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/shop" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "15px",
                }}
              >
                Shop Now
              </Button>
            </Link>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
