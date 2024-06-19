const port = 4000;
const express = require("express");
const cors = require("cors");
const pg = require("pg");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const app = express();

app.use(express.json()); // all the request will be parsed to json
app.use(cors()); // will coonect out app to the port

app.get("/", (req, res) => {
  res.send("Express App is running");
});
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
