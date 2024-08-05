const mongoose = require("mongoose");
const User = require("../models/signupUser");
const bcrypt = require("bcrypt");
const express = require("express");
const { config } = require("dotenv");
const Router = express.Router();


Router.post("/signup", async (req, res) => {
  
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  await user.save();
  res.json(user);
});

module.exports = {
  makeSignupUser: Router,
};
