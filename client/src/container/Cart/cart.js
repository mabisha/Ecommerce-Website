import React, { useContext } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Shopcontext } from "../../context/context";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const Cart = () => {
  const { data, cartItem, removeFromCart } = useContext(Shopcontext);
  console.log(cartItem);

  return (
    <Box m={4}>
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
                    <Button>{cartItem[item.id]}</Button>
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
      </Grid>
    </Box>
  );
};
