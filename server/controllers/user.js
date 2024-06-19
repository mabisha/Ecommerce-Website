const db = require("../sequelize/models");
const User = db.User;
const jwt = require("jsonwebtoken");

module.exports = {
  async createUser(req, res) {
    const { username, password, email } = req.body;
    let check = await User.findOne({ email: email });
    if (check) {
      return res.status(400).json({
        success: false,
        errors: "Existing user found with same email address",
      });
    }
    let cart = {};
    for (let i = 0; i < 30; i++) {
      cart[i] = 0;
    }
    try {
      // Create the new user
      const newUser = await User.create({
        name: username,
        password: password,
        email: email,
        cartData: cart,
      });
      const data = {
        user: {
          id: newUser.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      return res.status(200).json({ success: true, token: token });
    } catch (error) {
      // Handle possible errors (e.g., validation errors, unique constraint errors)
      return res.status(500).json({
        error: "An error occurred while creating the user.",
        details: error.message,
      });
    }
  },
  async loginUser(req, res) {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
      const passCompare = password === user.password;
      if (passCompare) {
        const data = {
          user: {
            id: user.id,
          },
        };
        const token = jwt.sign(data, "secret_ecom");
        return res.status(200).json({ success: true, token: token });
      } else {
        return res
          .status(400)
          .json({ success: false, errors: "wrong password" });
      }
    } else {
      return res.status(400).json({ success: false, errors: "wrong email id" });
    }
  },
};
