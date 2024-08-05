const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceAppointmentSchema = new Schema({
    service_appointment_id: {
    type: Schema.Types.ObjectId,
    ref: 'appointment',
    required: true
    },
  status: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  staff_id: {
    type: Schema.Types.ObjectId,
    ref: 'SignupUser',
    required: true
  },
  service_id: {
    type: Schema.Types.ObjectId,
    ref: 'service',
    required: true
  },
  package_id: {
    type: Schema.Types.ObjectId,
    ref: 'sackage',
    required: true
  },
  appointment_id: {
    type: Schema.Types.ObjectId,
    ref: 'appointment',
    required: true
  }
});

const ServiceAppointment = mongoose.model('serviceappointment', serviceAppointmentSchema);

module.exports = ServiceAppointment;
