import React, { useContext } from "react";
import { Shopcontext } from "../../context/context";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

export const Product = () => {
  const { data } = useContext(Shopcontext);
  const { productId } = useParams();
  const product = data.find((item, index) => item.id === Number(productId));
  return (
    <Box m={4}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <img
                src={product.path}
                alt={`${product.id}`}
                width="140px"
                height="auto"
              ></img>
            </Grid>

            <Grid item>
              <img
                src={product.path}
                alt={`${product.id}`}
                width="140px"
                height="auto"
              ></img>
            </Grid>
            <Grid item>
              <img
                src={product.path}
                alt={`${product.id}`}
                width="140px"
                height="auto"
              ></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img
            src={product.path}
            alt={`${product.id}`}
            width="450px"
            height="auto"
          ></img>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={4}
            flexWrap="wrap"
          >
            <Grid item>
              <Typography
                variant="h5"
                style={{
                  margin: "15px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {product.title}
              </Typography>
            </Grid>
            <Grid item>
              {product["old-price"] ? (
                <div style={{ display: "inline-block" }}>
                  <span
                    style={{
                      textDecoration: "line-through",
                      margin: "0 15px 0 15px",
                      fontSize: "30px",
                    }}
                  >{`$${product["old-price"]}`}</span>
                  <Typography
                    variant="p"
                    style={{
                      fontWeight: "500",
                      margin: "15px",
                      color: "#FE5252",
                      fontSize: "30px",
                    }}
                  >{`$${product["new-price"]}`}</Typography>
                </div>
              ) : (
                <Typography
                  variant="p"
                  style={{
                    fontWeight: "500",
                    margin: "15px",
                    color: "#FE5252",
                    fontSize: "30px",
                  }}
                >{`$${product["new-price"]}`}</Typography>
              )}
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{
                  margin: "15px",
                  width: "400px",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                }}
              >
                {product.desc}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
