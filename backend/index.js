const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./db");
const auth = require("./routes/auth");
const notes = require("./routes/notes");

connectDB();
app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/notes", notes);

const port = 8080;
app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
