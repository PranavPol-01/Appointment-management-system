const mongoose = require("mongoose");
const outlet = require("./outlets");
const Schema = mongoose.Schema;

const serviceAppointmentSchema = new Schema({
  customer_name: { type: String, required: true },
  customer_email: { type: String, required: true },
  customer_mobile_phone: { type: String, required: true },
  status: { type: String, required: true },
  time: { type: Date, required: true },
  staff_id: { type: mongoose.Schema.Types.ObjectId, ref: 'SignupUser', required: true },
  outlet_id: { type: mongoose.Schema.Types.ObjectId, ref: 'outlet', required: true },
  service_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'service', required: true }], // Array of service IDs
  package_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true }], // Array of package IDs
  appointment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'appointment' }
});

const ServiceAppointment = mongoose.model(
  "serviceappointment",
  serviceAppointmentSchema
);

module.exports = ServiceAppointment;
