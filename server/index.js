const PORT = process.env.PORT || 4000;
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const path = require("path");
const app = express();

const userRouter = require("./routes/user");
app.use(express.json()); // All requests will be parsed to JSON
app.use(cors()); // Enable CORS

app.get("/", (req, res) => {
  res.send("Express App is running");
});

app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
