import { Grid, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Box bgcolor="#F6F6F8">
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          gap="5"
          padding="20px"
        >
          <Grid item>
            <Typography
              variant="h3"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
              }}
            >
              Fusion
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
                color: "#757575",
              }}
            >
              © 2024 Flone. All Rights Reserved
            </Typography>
          </Grid>
          {/* <Grid item>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                fontWeight: "500",
                margin: "10px",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                margin: "10px",
              }}
            >
              <Link style={{ textDecoration: "none", color: "#757575" }} to="/">
                Home
              </Link>
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                margin: "10px",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#757575" }}
                to="/contact"
              >
                Contact
              </Link>
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                margin: "10px",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#757575" }}
                to="/about"
              >
                About Us
              </Link>
            </Typography>
          </Grid> */}
          <Grid item>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                fontWeight: "500",
                margin: "10px",
              }}
            >
              Follow Us
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                margin: "10px",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#757575" }}
                to="//www.facebook.com"
              >
                Facebook
              </Link>
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                margin: "10px",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#757575" }}
                to="//www.instagram.com"
              >
                Instagram
              </Link>
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                margin: "10px",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#757575" }}
                to="//www.linkedin.com"
              >
                Linked In
              </Link>
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                margin: "10px",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#757575" }}
                to="//www.youtube.com"
              >
                Youtube
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                fontWeight: "500",
                margin: "10px",
              }}
            >
              Subscribe Us
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                color: "#757575",
                margin: "10px",
              }}
            >
              Get E-mail updates about our latest shop and special offers.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default Footer;
