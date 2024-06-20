const PORT = process.env.PORT || 4000;
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
app.use(express.json()); // All requests will be parsed to JSON
app.use(cors()); // Enable CORS
app.use("/images", express.static("upload/images"));
app.get("/", (req, res) => {
  res.send("Express App is running");
});
//For uploading images
// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: "./upload/images",
//   filename: (req, file, cb) => {
//     return cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });
// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("product"), (req, res) => {
//   res.json({
//     success: 1,
//     image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
//   });
// });
app.use("/", userRouter);
app.use("/", productRouter);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
