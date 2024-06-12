import React, { useContext } from "react";
import "../ShopCategory/shopCategory.css";
import { Shopcontext } from "../../context/context";
import { Box, Grid, Typography } from "@mui/material";

export const ShopCategory = ({ category, banner }) => {
  const { data } = useContext(Shopcontext);
  return (
    <Box>
      <Grid className="shop-category">
        <img src={banner} alt={category} />
        <Typography
          variant="h2"
          className="shop-category-text"
          style={{
            left: category == "women" ? "40%" : "60%",
            fontFamily: "Montserrat, sans-serif",
            transform:
              category == "women"
                ? "translate(-90%, -50%)"
                : "translate(-10%, -50%)",
          }}
        >
          {category} <br></br> Fashion 2024
        </Typography>
      </Grid>
    </Box>
  );
};
