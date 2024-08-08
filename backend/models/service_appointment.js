const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceAppointmentSchema = new Schema({
  customer_name:{
    type: String,
    required: true,  
  },
  customer_email:{
    type: String,
    required: true,  
  },
  customer_mobile_phone:{
    type: Number,
    required: true,  
  },
  status: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  staff_id: {
    type: Object,
    ref: "SignupUser",
    required: true,
  },
  service_id: {
    type: Object,
    ref: "service",
    required: false,
  },
  package_id: {
    type: Object,
    ref: "package",
    required: false,
  },
  appointment_id: {
    type: Object,
    ref: "appointment",
    required: false,
  },
});

const ServiceAppointment = mongoose.model(
  "serviceappointment",
  serviceAppointmentSchema
);

module.exports = ServiceAppointment;
