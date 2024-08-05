const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
    package_id: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
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
