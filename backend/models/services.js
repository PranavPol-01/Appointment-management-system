const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  service_id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  price: {
    type: mongoose.Types.Decimal128,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  service_name: {
    type: String,
    required: true
  },
  estimated_time: {
    type: String,
    required: true
  }
});

const service = mongoose.model('service', serviceSchema);

module.exports = service;
