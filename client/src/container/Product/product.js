import React, { useContext } from "react";
import { Shopcontext } from "../../context/context";
import { useParams } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Star } from "../../components/star";
import { ProductDesc } from "../../components/productdesc";
import { RelatedProduct } from "../../components/relatedproduct";

export const Product = () => {
  const { data, addToCart } = useContext(Shopcontext);
  const { productId } = useParams();
  const product = data.find(
    (item, index) => item.product_id === Number(productId)
  );
  return (
    <Box>
      <Grid container spacing={2} style={{ margin: "40px" }}>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <img
                src={product.path}
                alt={`${product.product_id}`}
                width="140px"
                height="auto"
              />
            </Grid>

            <Grid item>
              <img
                src={product.path}
                alt={`${product.product_id}`}
                width="140px"
                height="auto"
              />
            </Grid>
            <Grid item>
              <img
                src={product.path}
                alt={`${product.product_id}`}
                width="140px"
                height="auto"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img
            src={product.path}
            alt={`${product.product_id}`}
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
                  fontWeight: "500",
                }}
              >
                {product.title}
              </Typography>
            </Grid>
            <Grid item>
              {product["oldPrice"] ? (
                <div style={{ display: "inline-block" }}>
                  <span
                    style={{
                      textDecoration: "line-through",
                      margin: "0 15px 0 15px",
                      fontSize: "30px",
                    }}
                  >{`$${product["oldPrice"]}`}</span>
                  <Typography
                    variant="p"
                    style={{
                      fontWeight: "500",
                      margin: "5px 15px 5px 15px",
                      color: "#FE5252",
                      fontSize: "30px",
                    }}
                  >{`$${product["newPrice"]}`}</Typography>
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
                >{`$${product["newPrice"]}`}</Typography>
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
                onClick={() => {
                  addToCart(product.product_id);
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
      <RelatedProduct></RelatedProduct>
    </Box>
  );
};
