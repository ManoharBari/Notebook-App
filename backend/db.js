require("dotenv").config();

const mongoose = require("mongoose");

main()
  .then()
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

module.exports = main;
