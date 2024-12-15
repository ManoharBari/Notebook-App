require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db");
const cors = require("cors");
const auth = require("./routes/auth");
const notes = require("./routes/notes");

connectDB();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.options("*", cors());
app.use(express.json());
app.use("/", auth, notes);

//listen function
app.listen(process.env.PORT, () => {});
