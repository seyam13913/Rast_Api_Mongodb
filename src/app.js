require("./config/db");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const router = require("./routes/user.router");
const imageRouter = require("./routes/image.router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/users", router);
// app.use("/api/image", imageRouter);

// route not found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "404 not valid rout!",
  });
});

// sarver error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broke",
  });
});

module.exports = app;
