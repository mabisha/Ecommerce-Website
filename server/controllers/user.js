const db = require("../sequelize/models");
const User = db.User;
const jwt = require("jsonwebtoken");

module.exports = {
  async createUser(req, res) {
    const { username, password, email } = req.body;
    try {
      let check = await User.findOne({
        where: {
          email: email,
        },
      });
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
      return res.status(500).json({
        error: "An error occurred while creating the user.",
        details: error.message,
      });
    }
  },
  async loginUser(req, res) {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, errors: "Invalid email" });
      }

      // Compare passwords (assuming plain text storage, not recommended for production)
      if (password === user.password) {
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
          .json({ success: false, errors: "Wrong password" });
      }
    } catch (error) {
      return res.status(500).json({
        error: "An error occurred while logging in.",
        details: error.message,
      });
    }
  },
};
