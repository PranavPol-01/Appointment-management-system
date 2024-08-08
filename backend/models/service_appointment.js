const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceAppointmentSchema = new Schema({

  status: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  staff_id: {
    type: Object,
    ref: 'SignupUser',
    required: true
  },
  service_id: {
    type: Object,
    ref: 'service',
    required: true
  },
  package_id: {
    type: Object,
    ref: 'sackage',
    required: true
  },
  appointment_id: {
    type: Object,
    ref: 'appointment',
    required: true
  }
});

const ServiceAppointment = mongoose.model('serviceappointment', serviceAppointmentSchema);

module.exports = ServiceAppointment;
