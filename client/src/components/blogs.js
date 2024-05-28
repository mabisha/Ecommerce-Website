import { Box, Grid, Typography, Divider } from "@mui/material";
function Blogs() {
  return (
    <div className="blogs">
      <Box>
        <Grid
          container
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap="6"
        >
          <Grid item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Divider
                style={{
                  width: "100px",
                  backgroundColor: "black",
                  marginRight: "10px",
                  padding: "1px",
                }}
              />
              <Typography
                variant="h3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "500",
                }}
              >
                Our Blog
              </Typography>
              <Divider
                style={{
                  width: "100px",
                  backgroundColor: "black",
                  marginLeft: "10px",
                  padding: "1px",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Blogs;
