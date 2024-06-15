import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Shopcontext } from "../../context/context";

export const Cart = () => {
  const { data, addToCart, removeFromCart } = useContext(Shopcontext);
  return (
    <Box m={4}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Typography
            variant="h5"
            style={{
              margin: "5px 15px 5px 15px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "500",
            }}
          >
            Your Cart Items
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
};
