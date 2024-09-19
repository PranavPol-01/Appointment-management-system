// const ServiceAppointment = require("../models/service_appointment");
// const SignupUser = require("../models/signupUser");
// const service = require("../models/services");
// const package = require("../models/packages");
// const appointment = require("../models/appointments");
// const express = require("express");
// const Router = express.Router();
// const verifyToken = require("../middlewares/verify_jwt_token");


// Router.post('/add-appointment-staff',verifyToken,async(req,res)=>{
//     try {
//         const {customer_name,customer_email,customer_mobile_phone,status,time,staff_id,service_id,package_id,appointment_id} = req.body;
//         const service_appointment = new ServiceAppointment({
//             customer_name:customer_name,
//             customer_email:customer_email,
//             customer_mobile_phone:customer_mobile_phone,
//             status:status,
//             time:time,
//             staff_id:SignupUser.findById(staff_id),
//             service_id:service.findById(service_id),
//             package_id:package.findById(package_id),
//             appointment_id: appointment.findById(appointment_id)            
//         })
//         await service_appointment.save();
//         res.status(200).json({message:"Appointment added successfully",service_appointment});
//     } catch (error) {
//         console.log("Some error occured while adding appointment",error);
//         res.status(500).json({message:"Internal server error"});        
//     }
// })

// Router.put('/update-appointment-staff/:id',verifyToken,async(req,res)=>{
//     try {
//         const {customer_name,customer_email,customer_mobile_phone,status,time,staff_id,service_id,package_id,appointment_id} = req.body;
//         const service_appointment = await ServiceAppointment.findById(req.params.id);
//         service_appointment.customer_name = customer_name;
//         service_appointment.customer_email = customer_email;
//         service_appointment.customer_mobile_phone = customer_mobile_phone;
//         service_appointment.status = status;
//         service_appointment.time = time;
//         service_appointment.staff_id = SignupUser.findById(staff_id);
//         service_appointment.service_id = service.findById(service_id);
//         service_appointment.package_id = package.findById(package_id);
//         service_appointment.appointment_id = appointment.findById(appointment_id);
//         await service_appointment.save();
//         res.status(200).json({message:"Appointment updated successfully",service_appointment});
//     } catch (error) {
//         console.log("Some error occured while updating appointment",error);
//         res.status(500).json({message:"Internal server error"});        
//     }
// })

// Router.delete('/delete-appointment-staff/:id',verifyToken,async(req,res)=>{
//     try {
//         const service_appointment = await ServiceAppointment.findById(req.params.id);
//         await service_appointment.remove();
//         res.status(200).json({message:"Appointment deleted successfully",service_appointment});
//     } catch (error) {
//         console.log("Some error occured while deleting appointment",error);
//         res.status(500).json({message:"Internal server error"});
//     }
// })

// Router.get('/get-all-appointments-staff',verifyToken,async(req,res)=>{
//     try {
//         const service_appointments = await ServiceAppointment.find();
//         res.status(200).json({service_appointments});
//     } catch (error) {
//         console.log("Some error occured while fetching appointments",error);
//         res.status(500).json({message:"Internal server error"});
//     }
// })

const ServiceAppointment = require("../models/service_appointment");
const SignupUser = require("../models/signupUser");
const Service = require('../models/services'); 
const Package = require("../models/packages");
const Appointment = require("../models/appointments");
const express = require("express");
const Router = express.Router();

// Add a new appointment
Router.post('/add-appointment-staff', async (req, res) => {
    try {
        const {
            customer_name, customer_email, customer_mobile_phone, status, time,
            staff_id, services, packages, appointment_id
        } = req.body;

        // Validate if staff, services, and packages exist
        const staff = await SignupUser.findById(staff_id);
        const serviceObjects = await Service.find({ '_id': { $in: services } });
        const packageObjects = await Package.find({ '_id': { $in: packages } });

        if (!staff || !serviceObjects.length || !packageObjects.length) {
            return res.status(404).json({ message: "Staff, services, or packages not found." });
        }

        const service_appointment = new ServiceAppointment({
            customer_name,
            customer_email,
            customer_mobile_phone,
            status,
            time,
            staff_id: staff._id,
            service_id: serviceObjects.map(s => s._id),
            package_id: packageObjects.map(p => p._id),
            appointment_id: appointment_id ? await Appointment.findById(appointment_id) : null
        });

        await service_appointment.save();
        res.status(200).json({ message: "Appointment added successfully", service_appointment });
    } catch (error) {
        console.log("Error while adding appointment", error);
        res.status(500).json({ message: "Internal server error" });
    }
});



// Update an existing appointment
Router.put('/update-appointment-staff/:id', async (req, res) => {
    try {
        const {
            customer_name, customer_email, customer_mobile_phone, status, time,
            staff_id, service_id, package_id, appointment_id
        } = req.body;

        const service_appointment = await ServiceAppointment.findById(req.params.id);

        if (!service_appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        service_appointment.customer_name = customer_name;
        service_appointment.customer_email = customer_email;
        service_appointment.customer_mobile_phone = customer_mobile_phone;
        service_appointment.status = status;
        service_appointment.time = time;
        service_appointment.staff_id = await SignupUser.findById(staff_id);
        service_appointment.service_id = await Service.findById(service_id);
        service_appointment.package_id = await Package.findById(package_id);
        service_appointment.appointment_id = await Appointment.findById(appointment_id);

        await service_appointment.save();
        res.status(200).json({ message: "Appointment updated successfully", service_appointment });
    } catch (error) {
        console.log("Error while updating appointment", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Delete an appointment
Router.delete('/delete-appointment-staff/:id', async (req, res) => {
    try {
        const service_appointment = await ServiceAppointment.findById(req.params.id);

        if (!service_appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        await service_appointment.remove();
        res.status(200).json({ message: "Appointment deleted successfully", service_appointment });
    } catch (error) {
        console.log("Error while deleting appointment", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
// Get all appointments without any filtering
Router.get('/get-all-appointments-staff', async (req, res) => {
    try {
        const service_appointments = await ServiceAppointment.find()
            .populate('staff_id', 'staff_name email')  // Populate staff details
            .populate('service_id', 'service_name')    // Populate service details
            .populate('package_id', 'package_name')    // Populate package details
            .populate('appointment_id', 'date');       // Populate appointment details

        res.status(200).json({ service_appointments });
        // console.log(service_appointments)
    } catch (error) {
        console.log("Error while fetching appointments", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = { AppointmentRoutes: Router };
