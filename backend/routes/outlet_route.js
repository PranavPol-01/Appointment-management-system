const Outlets = require("../models/outlets");
const express = require("express");
const Router = express.Router();


Router.post("/outlet", async (req, res) => {  

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
  });
  await outlet.save();
  res.json(outlet);
});

module.exports = {
  outletRoute: Router,
};
