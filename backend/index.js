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
    origin: "https://notebook-app-gules.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/auth", auth);
app.use("/notes", notes);

//listen function
app.listen(process.env.PORT, () => {});
