const express = require("express");
const User = require("../models/user");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// create user using : POST = api/user - No login required
router.post(
  "/",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter valid email").isEmail(),
    body("password", "Enter valid password").isLength({ min: 5 }),
  ],
  // If there are errors, return bad request and errors
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ errro: "User already exits" });
      }

      const JWT_SECRET = "mysecretkey";

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // create new user
      user = await User.create({
        username: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      // generating JWT token for user
      const authtoken = jwt.sign(data, JWT_SECRET);

      // verify a token and decode - synchronous
      const decoded = jwt.verify(authtoken, JWT_SECRET);
      console.log(decoded.user);

      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).send("Something went wrong");
    }
  }
);

module.exports = router;
