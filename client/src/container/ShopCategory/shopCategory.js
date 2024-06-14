import React, { useContext, useEffect, useState } from "react";
import "../ShopCategory/shopCategory.css";
import { Shopcontext } from "../../context/context";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Loadmore } from "../../components/loadmore";
import { Link } from "react-router-dom";
import { Star } from "../../components/star";

export const ShopCategory = ({ category, banner }) => {
  const { data } = useContext(Shopcontext);
  const filterData = data.filter((item, index) => item.category === category);
  const [visibleData, setVisibleData] = useState(4);
  useEffect(() => {
    setVisibleData(4);
  }, [category]);
  return (
    <Box>
      <Grid className="shop-category">
        <img src={banner} alt={category} />
        <Typography
          variant="h2"
          className="shop-category-text"
          style={{
            left: category === "women" ? "40%" : "60%",
            fontFamily: "Montserrat, sans-serif",
            transform:
              category === "women"
                ? "translate(-90%, -50%)"
                : "translate(-10%, -50%)",
          }}
        >
          {category} <br></br> Fashion 2024
        </Typography>
      </Grid>
      <Grid style={{ margin: "20px 40px 10px 40px" }}>
        <Grid container justifyContent="space-between">
          <Grid item>Showing 1-4 of {filterData.length}</Grid>
          <Grid item>
            <Button
              style={{
                padding: "5px 35px 5px 35px",
                color: "black",
                border: "1px solid black",
              }}
            >
              Sort
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item style={{ margin: "10px 40px 20px 40px" }}>
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
          >
            {filterData.slice(0, visibleData).map((item, index) => (
              <Grid item key={index} xs={3}>
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.path}
                    alt={`${item.id}`}
                    width="100%"
                    height="auto"
                  ></img>
                </Link>
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
                    {item.title}
                  </Typography>
                  <Star item={item}></Star>
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
        <Loadmore visibleData={visibleData} setVisibleData={setVisibleData} />
      </Grid>
    </Box>
  );
};
