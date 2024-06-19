import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login", formData);

    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            style={{
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#a443ff",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Login
            </Link>{" "}
            |{" "}
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "#a443ff",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Register
            </Link>
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
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  style={{
                    padding: "5px 35px 5px 35px",
                    color: "black",
                    backgroundColor: "#cccccc",
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};
