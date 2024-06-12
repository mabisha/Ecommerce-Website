import { Button, Grid } from "@mui/material";
import React from "react";

export const Loadmore = ({ visibleData, setVisibleData }) => {
  const handleLoadMoreItems = () => {
    setVisibleData((prevVisibleItems) => prevVisibleItems + 4);
  };
  return (
    <Grid item style={{ margin: "40px" }}>
      <Button
        onClick={handleLoadMoreItems}
        style={{
          padding: "5px 35px 5px 35px",
          color: "black",
          border: "2px solid black",
        }}
      >
        Load More
      </Button>
    </Grid>
  );
};
