const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const usersRoutes = require("./routes/v1/users.route.js");
const errorHandler = require("./middleware/errorHandler");

app.use(cors());
app.use(express.json());

app.use("/user", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello! Node Mongo ACC Assignment 1 Is Running!");
});

app.all("*", (req, res) => {
  res.send("No route found.");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
