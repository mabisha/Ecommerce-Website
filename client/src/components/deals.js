import { Typography } from "@mui/material";
import { Box, Grid, ButtonGroup, Button, Divider } from "@mui/material";
import { useState } from "react";
function Deal() {
  const [category, setCategory] = useState("best");
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <div className="deals">
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
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Daily Deals
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
          <Grid item>
            <div>
              <Button
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "black",
                  margin: "50px 20px 50px 20px",
                }}
                onClick={() => handleCategoryChange("best")}
              >
                Best Sellers
              </Button>
              <Button
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "black",
                  margin: "50px 20px 50px 20px",
                }}
                onClick={() => handleCategoryChange("new")}
              >
                New Arrivals
              </Button>
              <Button
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "black",
                  margin: "50px 20px 50px 20px",
                }}
                onClick={() => handleCategoryChange("sale")}
              >
                Sale Items
              </Button>
            </div>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default Deal;
