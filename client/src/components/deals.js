import { Typography } from "@mui/material";
import { Box, Grid, Button, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import { Loadmore } from "./loadmore";
import StarIcon from "@mui/icons-material/Star";
import { Star } from "./star";

function Deal() {
  const [category, setCategory] = useState("best");
  const [active, setActive] = useState("best");
  const [visibleData, setVisibleData] = useState(4);
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setActive(newCategory);
  };
  useEffect(() => {
    setVisibleData(4);
  }, [category]);
  const filterData = data.filter((item, index) => item.type === category);
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
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "500",
                }}
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
                  color: active === "best" ? "white" : "black",
                  margin: "20px",
                  backgroundColor: active === "best" ? "black" : "",
                }}
                onClick={() => handleCategoryChange("best")}
              >
                Best Sellers
              </Button>
              <Button
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: active === "new" ? "white" : "black",
                  margin: "20px",
                  backgroundColor: active === "new" ? "black" : "",
                }}
                onClick={() => handleCategoryChange("new")}
              >
                New Arrivals
              </Button>
              <Button
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: active === "sale" ? "white" : "black",
                  margin: "20px",
                  backgroundColor: active === "sale" ? "black" : "",
                }}
                onClick={() => handleCategoryChange("sale")}
              >
                Sale Items
              </Button>
            </div>
          </Grid>
          <Grid item style={{ margin: "40px" }}>
            <Grid
              container
              spacing={6}
              alignItems="center"
              justifyContent="center"
            >
              {filterData.slice(0, visibleData).map((item, index) => (
                <Grid item key={index} xs={3}>
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.path}
                      alt={`${item.id}`}
                      width="100%"
                      height="auto"
                    ></img>
                  </Link>

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
                      {item.title}
                    </Typography>
                    <Star item={item}></Star>
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
          </Grid>
          <Loadmore visibleData={visibleData} setVisibleData={setVisibleData} />
        </Grid>
      </Box>
    </div>
  );
}
export default Deal;
