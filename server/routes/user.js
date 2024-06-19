const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/api/signup", userController.createUser);
router.post("/api/login", userController.loginUser);

module.exports = router;
