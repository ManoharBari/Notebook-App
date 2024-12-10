const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./db");
const cors = require("cors");
const auth = require("./routes/auth");
const notes = require("./routes/notes");

connectDB();

app.use(cors());
app.use(express.json());
app.use("/auth", auth);
app.use("/notes", notes);

const port = 8080;
app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
