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
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
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
        <Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={4}
          >
            <Grid item>
              <Typography
                variant="p"
                style={{
                  margin: "15px",
                }}
              >
                {product.desc}
              </Typography>
            </Grid>
            <Grid item>
              {product["old-price"] ? (
                <div style={{ display: "inline-block" }}>
                  <span
                    style={{
                      textDecoration: "line-through",
                      margin: "0 15px 0 15px",
                    }}
                  >{`$${product["old-price"]}`}</span>
                  <Typography
                    variant="p"
                    style={{
                      fontWeight: "500",
                      margin: "15px",
                    }}
                  >{`$${product["new-price"]}`}</Typography>
                </div>
              ) : (
                <Typography
                  variant="p"
                  style={{
                    fontWeight: "500",
                    margin: "15px",
                  }}
                >{`$${product["new-price"]}`}</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
