import React, { useContext, useState } from "react";
import "../ShopCategory/shopCategory.css";
import { Shopcontext } from "../../context/context";
import { Box, Grid, Typography, Button } from "@mui/material";

export const ShopCategory = ({ category, banner }) => {
  const { data } = useContext(Shopcontext);
  const filterData = data.filter((item, index) => item.category === category);
  const [visibleData, setVisibleData] = useState(4);
  const handleLoadMoreItems = () => {};
  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center">
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
        <Grid item style={{ margin: "40px" }}>
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
          >
            {filterData.map((item, index) => (
              <Grid item key={index} xs={3}>
                <img
                  src={item.path}
                  alt={`${item.id}`}
                  width="100%"
                  height="auto"
                ></img>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="p"
                    style={{
                      margin: "15px",
                    }}
                  >
                    {item.desc}
                  </Typography>

                  {item["old-price"] ? (
                    <div style={{ display: "inline-block" }}>
                      <span
                        style={{
                          textDecoration: "line-through",
                          margin: "0 15px 0 15px ",
                        }}
                      >{`$${item["old-price"]}`}</span>
                      <Typography
                        variant="p"
                        style={{
                          fontWeight: "500",
                        }}
                      >{`$${item["new-price"]}`}</Typography>
                    </div>
                  ) : (
                    <Typography
                      variant="p"
                      style={{
                        fontWeight: "500",
                      }}
                    >{`$${item["new-price"]}`}</Typography>
                  )}
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Button onClick={handleLoadMoreItems}>Load More</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
