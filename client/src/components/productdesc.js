import { Typography, Grid, Tabs, Tab, Box } from "@mui/material";
import React, { useState } from "react";

export const ProductDesc = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{
            style: {
              backgroundColor: "black",
            },
          }}
        >
          <Tab
            label="Description"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "black",
              marginRight: "15px",
            }}
          />
          <Tab
            label="Review"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "black",
              marginLeft: "15px",
            }}
          />
        </Tabs>
        {/* <Grid container spacing={2}>
          <Grid item>
            <Typography
              variant="h5"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Description
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Review
            </Typography>
          </Grid>
        </Grid> */}
      </Grid>
      <Grid item xs={12} style={{ margin: "40px" }}>
        <TabPanel value={value} index={0}>
          <Typography
            variant="body1"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "black",
            }}
          >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography
            variant="body1"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "black",
            }}
          >
            Here is where the reviews would go.
          </Typography>
        </TabPanel>
      </Grid>
    </Grid>
  );
};
function TabPanel(props) {
  const { children, value, index } = props;

  return <div> {value === index && <Box>{children}</Box>}</div>;
}
