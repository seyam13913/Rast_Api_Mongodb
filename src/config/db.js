const mongoose = require("mongoose");

const config = require("./config");

const dbURL = config.db.url;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("mongoose is connected");
  })
  .catch(() => {
    console.log("mongoose is error");
    process.exit();
  });
