import { Box, Grid, Typography, Divider } from "@mui/material";
function BlogsList() {
  return (
    <div className="blogs">
      <Box>
        <Grid
          container
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap="5"
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
          <Grid item style={{ margin: "40px" }}>
            <Grid
              container
              spacing={6}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <a>
                  <img
                    src="../images/blog-1.jpg"
                    width="100%"
                    height="auto"
                  ></img>
                </a>
              </Grid>
              <Grid item>
                <a>
                  <img
                    src="../images/blog-2.jpg"
                    width="100%"
                    height="auto"
                  ></img>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default BlogsList;
