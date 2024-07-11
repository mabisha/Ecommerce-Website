import { Button, Grid } from "@mui/material";
import React from "react";

export const Loadmore = ({ setVisibleData, setLoadingMore }) => {
  const handleLoadMoreItems = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleData((prevVisibleData) => prevVisibleData + 4);
      setLoadingMore(false);
    }, 1000);
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
