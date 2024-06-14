import React, { useContext } from "react";
import { Shopcontext } from "../../context/context";
import { useParams } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Star } from "../../components/star";
import { ProductDesc } from "../../components/productdesc";

export const Product = () => {
  const { data } = useContext(Shopcontext);
  const { productId } = useParams();
  const product = data.find((item, index) => item.id === Number(productId));
  const star = product.star;
  return (
    <Box m={4}>
      <Grid container spacing={2} style={{ margin: "15px" }}>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <img
                src={product.path}
                alt={`${product.id}`}
                width="140px"
                height="auto"
              />
            </Grid>

            <Grid item>
              <img
                src={product.path}
                alt={`${product.id}`}
                width="140px"
                height="auto"
              />
            </Grid>
            <Grid item>
              <img
                src={product.path}
                alt={`${product.id}`}
                width="140px"
                height="auto"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img
            src={product.path}
            alt={`${product.id}`}
            width="450px"
            height="auto"
          />
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={2}
            flexWrap="wrap"
          >
            <Grid item>
              <Typography
                variant="h5"
                style={{
                  margin: "5px 15px 5px 15px",
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
                      margin: "5px 15px 5px 15px",
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
                    margin: "5px 15px 5px 15px",
                    color: "#FE5252",
                    fontSize: "30px",
                  }}
                >{`$${product["new-price"]}`}</Typography>
              )}
            </Grid>
            <Grid item>
              <Star item={product}></Star>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{
                  margin: "5px 15px 5px 15px",
                  width: "500px",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                }}
              >
                {product.desc}
              </Typography>
            </Grid>
            <Grid item style={{ margin: "5px 15px 0px 15px" }}>
              <Typography
                variant="body1"
                style={{
                  margin: "0px 5px 0px 5px",
                  fontWeight: "500",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "18px",
                }}
              >
                Size
              </Typography>
              <Grid container>
                <Grid
                  item
                  style={{
                    backgroundColor: "#eaeaea",
                    margin: "5px 0px 10px 5px",
                    borderRadius: "2px",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      padding: "15px",

                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    XS
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    backgroundColor: "#eaeaea",
                    margin: "5px 0px 10px 5px",
                    borderRadius: "2px",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      padding: "15px",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    S
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    backgroundColor: "#eaeaea",
                    margin: "5px 0px 10px 5px",
                    borderRadius: "2px",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      padding: "15px",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    M
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    backgroundColor: "#eaeaea",
                    margin: "5px 0px 10px 5px",
                    borderRadius: "2px",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      padding: "15px",

                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    L
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    backgroundColor: "#eaeaea",
                    margin: "5px 0px 10px 5px",
                    borderRadius: "2px",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      padding: "15px",

                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    XL
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ margin: "5px 15px 10px 15px" }}>
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "15px",
                }}
              >
                ADD TO CART
              </Button>
            </Grid>
            <Grid item style={{ margin: "5px 15px 10px 15px" }}>
              <Typography
                variant="body1"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "15px",
                }}
              >
                Categories:<span> fashion jacket</span>
              </Typography>
            </Grid>
            <Grid item style={{ margin: "0px 15px 0px 15px" }}>
              <Typography
                variant="body1"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "15px",
                }}
              >
                Tags:<span> latest mordern</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ProductDesc></ProductDesc>
    </Box>
  );
};
