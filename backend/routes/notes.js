const express = require("express");
const Notes = require("../models/notes");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("data send");
});

module.exports = router;
