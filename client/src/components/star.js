import React from "react";
import StarIcon from "@mui/icons-material/Star";
export const Star = ({ item }) => {
  return (
    <div style={{ display: "flex", margin: "2px" }}>
      {[...Array(item.star)].map((_, index) => (
        <StarIcon
          key={index}
          style={{ color: "#FFD700", margin: "0 5px 0 5px" }}
        />
      ))}
    </div>
  );
};
