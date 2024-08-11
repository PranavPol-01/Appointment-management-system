const Outlets = require("../models/outlets");
const express = require("express");
const Router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const request = require("request");
require("dotenv").config();
const verifyToken = require("../middlewares/verify_jwt_token");

Router.post("/outlet", async (req, res) => {
  try {
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
    res.status(200).json(outlet);
  } catch (error) {
    console.log("Some error occured while creating outlet", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

Router.post("/staff-outlet-login", async (req, res) => {
  if (!req.body || !req.body.mobile_number || !req.body.outlet_password) {
    return res.status(400).json({ error: "id is required" });
  }
  const mobile_number = req.body.mobile_number;
  const outlet_password = req.body.outlet_password;
  try {
    const outlet = await Outlets.findOne({ staff_mobile_number: mobile_number });
    if (
      outlet &&
      (await bcrypt.compare(outlet_password, outlet.outlet_password))
    ) {
      // const jwt_token = jwt.sign(
      //   { id: outlet._id, outlet_password: outlet.outlet_password },
      //   process.env.JWT_SECRET,
      //   {
      //     expiresIn: "1d",
      //   }
      // );
      res.json({
        message: "You are logged in",
        // token: jwt_token,
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log("Some error occured while making you login", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

Router.get("/logout", verifyToken, (req, res) => {
  res.status(200).json({
    message: "You are logged out",
  });
});


Router.post("/verify-login",async(req,res)=>{
  const {to}=req.body;
  var options = {
    'method': 'GET',
    'url': `https://2factor.in/API/V1/${process.env.TWO_FACTOR_API_KEY}/SMS/+91${to}/AUTOGEN2/PalcoaTemplate`,
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) {
      console.error(error);
      return res.status(500).send('Failed to send SMS');
    }
    console.log(response.body);
    res.send(response.body);
  });
});



module.exports = {
  outletRoute: Router,
};
