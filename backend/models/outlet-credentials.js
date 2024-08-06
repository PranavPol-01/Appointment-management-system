const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const outletCredSchema = new Schema({
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  pincode: {
    type: Number,
    required: true
  },
  outlet_name: {
    type: String,
    required: true
  },
  google_map_link: {
    type: String,
    required: false
  },
  telephone_number: {
    type: Number,
    required: true
  }
});

const outlet = mongoose.model('outlet-credentials', outletCredSchema);

module.exports = outlet;