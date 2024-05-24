import { Grid, Box, Typography } from "@mui/material";
function Home() {
  return (
    <Box>
      <Grid container>
        <Grid item>
          <div style={{ backgroundColor: "#F0E0FF" }}>
            <Typography variant="h4">Winter Collection</Typography>
          </div>
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
}
export default Home;
