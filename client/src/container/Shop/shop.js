import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import data from "../../data.json";
export const Shop = () => {
  return (
    <Box m={4}>
      <Grid
        container
        spacing={5}
        justifyContent="space-around"
        alignItems="center"
      >
        {data.map((item, index) => (
          <Grid item key={index} xs={4}>
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
    </Box>
  );
};
