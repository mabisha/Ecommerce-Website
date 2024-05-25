import { Grid, Box, Typography, Button } from "@mui/material";
function Home() {
  return (
    <Box>
      <Grid>
        <div style={{ backgroundColor: "#F0E0FF" }}>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            paddingTop="50px"
          >
            <Grid item>
              <Typography variant="h6">Small Products</Typography>
              <Typography variant="h2">Winter Offer</Typography>
              <Typography variant="h2">2024 Collection </Typography>
              <Button style={{ border: "1px solid black", color: "black" }}>
                Shop Now
              </Button>
            </Grid>
            <Grid item>
              <img
                src="../images/home-image.png"
                alt="Home"
                width="500px"
                height="500px"
              />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Box>
  );
}
export default Home;
