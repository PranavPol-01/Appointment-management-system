const verifyToken = require("../middlewares/verify_jwt_token");
const Outlets = require("../models/outlets");
const User = require("../models/signupUser");
const bcrypt = require("bcryptjs");
const express = require("express");
const Router = express.Router();

Router.post("/signup", async (req, res) => {
  const outlet = await Outlets.findById(req.body.outlet_id);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    staff_name: req.body.staff_name,
    category: req.body.category,
    staff_mobile_number: req.body.staff_mobile_number,
    gender: req.body.gender,
    role: req.body.role,
    outlet_id: outlet,
    email: req.body.email,
    password: hashedPassword,
  });
  await user.save();
  res.status(200).json(user);
  console.log(user);
});

Router.get("/signup",verifyToken, async (req, res) => {
  const user = await User.find();
  res.json(user);
  console.log(user);
});

module.exports = {
  makeSignupUser: Router,
};
