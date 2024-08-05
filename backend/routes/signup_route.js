const mongoose = require("mongoose");
const User = require("../models/signupUser");
const bcrypt = require("bcrypt");
const express = require("express");
const Router = express.Router();

const connection = mongoose
  .connect("mongodb://localhost:27017/appointment-management-system", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

Router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    username,
    email,
    password: hashedPassword,
  });
  await user.save();
  res.json(user);
});

module.exports = {
  makeSignupUser: Router,
};
