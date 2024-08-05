const Outlets = require("../models/outlets");
const User = require("../models/signupUser");
const bcrypt = require("bcrypt");
const express = require("express");
const Router = express.Router();

Router.post("/signup", async (req, res) => {
  const outlet = await Outlets.findById(req.body.outlet_id);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    staff_name: req.body.staff_name,
    gender: req.body.gender,
    role: req.body.role,
    outlet_id: outlet._id,
    email: req.body.email,
    password: hashedPassword,
  });
  await user.save();
  res.json(user);
  console.log(user);
});

Router.get("/signup", async (req, res) => {
  const user = await User.find();
  res.json(user);
  console.log(user);
});

module.exports = {
  makeSignupUser: Router,
};
