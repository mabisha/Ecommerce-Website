import { Grid, Typography } from "@mui/material";
import React from "react";
import product from "../assets/product.json";
import { Link } from "react-router-dom";

export const RelatedProduct = () => {
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Typography
          variant="h5"
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "black",
            fontWeight: "500",
          }}
        >
          Related Products
        </Typography>
        <hr style={{ backgroundColor: "black", height: "2px" }} />
      </Grid>
      <Grid item style={{ margin: "40px" }}>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          {product.map((item, index) => (
            <Grid item key={index} xs={3}>
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.path}
                  alt={`${item.id}`}
                  width="100%"
                  height="auto"
                  onClick={window.scrollTo(0, 0)}
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
    </Grid>
  );
};
