import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import React from "react";

export const Login = () => {
  const handleSubmit = () => {};

  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <Typography
            variant="h4"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500" }}
          >
            Login
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            border: "1px solid black",
            margin: "40px",
            padding: "40px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // added box shadow here
            borderRadius: "8px", // optional: adds rounded corners
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid
              container
              direction="column"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <TextField label="Username" variant="outlined" />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  style={{
                    padding: "5px 35px 5px 35px",
                    color: "black",
                    backgroundColor: "#ce9aff",
                  }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};
