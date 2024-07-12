import { Typography } from "@mui/material";
import { Box, Grid, Button, Divider } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Loadmore } from "./loadmore";
import { Star } from "./star";
import { Shopcontext } from "../context/context";
import { RotatingLines } from "react-loader-spinner";
function Deal() {
  const { data, isLoading } = useContext(Shopcontext);
  const [loadingMore, setLoadingMore] = useState(false);
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
        >
          <Grid item style={{ margin: "20px" }}>
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
                  padding: "1px",
                }}
              />
              <Typography
                variant="h3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "500",
                  flexShrink: "0",
                }}
              >
                Daily Deals
              </Typography>
              <Divider
                style={{
                  width: "100px",
                  backgroundColor: "black",
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
                  margin: "0 20px 0 20px",
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
                  margin: "0 20px 0 20px",
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
                  margin: "0 20px 0 20px",
                  backgroundColor: active === "sale" ? "black" : "",
                }}
                onClick={() => handleCategoryChange("sale")}
              >
                Sale Items
              </Button>
            </div>
          </Grid>
          <Grid item style={{ margin: "20px" }}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              {isLoading ? (
                <div>
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="59"
                    visible={true}
                  ></RotatingLines>
                </div>
              ) : null}
              {filterData.slice(0, visibleData).map((item, index) => (
                <Grid item key={index} lg={3} xs={12} sm={6}>
                  <Link to={`/product/${item.product_id}`}>
                    <img
                      src={item.path}
                      alt={`${item.product_id}`}
                      width="100%"
                      height="auto"
                      // onClick={window.scrollTo(0, 0)}
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
                    {item["oldPrice"] ? (
                      <div style={{ display: "inline-block" }}>
                        <span
                          style={{
                            textDecoration: "line-through",
                            margin: "0 15px 0 15px ",
                          }}
                        >{`$${item["oldPrice"]}`}</span>
                        <Typography
                          variant="p"
                          style={{
                            fontWeight: "500",
                          }}
                        >{`$${item["newPrice"]}`}</Typography>
                      </div>
                    ) : (
                      <Typography
                        variant="p"
                        style={{
                          fontWeight: "500",
                        }}
                      >{`$${item["newPrice"]}`}</Typography>
                    )}
                  </div>
                </Grid>
              ))}
              {loadingMore && (
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="59"
                  visible={true}
                ></RotatingLines>
              )}
            </Grid>
          </Grid>
          <Loadmore
            setVisibleData={setVisibleData}
            setLoadingMore={setLoadingMore}
          />
        </Grid>
      </Box>
    </div>
  );
}
export default Deal;
