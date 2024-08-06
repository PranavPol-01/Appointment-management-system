const Outlets = require("../models/outlets");
const express = require("express");
const Router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const verifyToken = require("../middlewares/verify_jwt_token");


Router.post("/outlet", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.outlet_password, 10);

  const outlet = new Outlets({
    name: req.body.name,
    email: req.body.email,
    city: req.body.city,
    state: req.body.state,
    address: req.body.address,
    pincode: req.body.pincode,
    outlet_name: req.body.outlet_name,
    google_map_link: req.body.google_map_link,
    telephone_number: req.body.telephone_number,
    outlet_password: hashedPassword,
  });
  await outlet.save();
  res.json(outlet);
});

Router.post("/staff-outlet-login", async (req, res) => {
  if (!req.body || !req.body.id) {
    return res.status(400).json({ error: "id is required" });
  }
  const id = req.body.id;
  const outlet_password = req.body.outlet_password;
  try {
    const outlet = await Outlets.findById(id);
    if (
      outlet &&
      (await bcrypt.compare(outlet_password, outlet.outlet_password))
    ) {
      const jwt_token = jwt.sign(
        { id: outlet._id, outlet_password: outlet.outlet_password },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      res.json({
        message: "You are logged in",
        token: jwt_token,
      });
    }
    else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log("Some error occured while making you login", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

Router.get("/logout", verifyToken, (req, res) => {
  res.json({
    message: "You are logged out",
  });
});

module.exports = {
  outletRoute: Router,
};
