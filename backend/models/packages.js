const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({

  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  package_name: {
    type: String,
    required: true
  },
  estimated_time: {
    type: String,
    required: true
  }
});

const package = mongoose.model('package', packageSchema);

module.exports = package;
