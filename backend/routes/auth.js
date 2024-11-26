const express = require("express");
const User = require("../models/user");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "mysecretkey";

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
      res.status(500).send("Internal server error");
    }
  }
);

router.post(
  "/login",
  [
    body("email", "Login with correct credentials").isEmail(),
    body("password", "Enter valid password").exists(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    try {
      let { email, password } = req.body;
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errro: "Login with correct credentials" });
      }

      let passwordComp = await bcrypt.compare(password, user.password);
      if (!passwordComp) {
        return res.status(400).json({ errro: "Password does not match" });
      }

      const data = {
        user: {
          id: user.id,
          name: user.username,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      const decoded = jwt.verify(authtoken, JWT_SECRET);

      res.json(authtoken);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password"); //select()- password does not include
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
