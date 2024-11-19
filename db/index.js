const mongoose = require("mongoose");
// const dotenv = require("dotenv");

console.log(process.env.DB_URL);

// dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
