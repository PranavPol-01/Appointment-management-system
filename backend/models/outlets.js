const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const outletSchema = new Schema({
    outlet_id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
    },
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

const outlet = mongoose.model('outlet', outletSchema);

module.exports = outlet;
