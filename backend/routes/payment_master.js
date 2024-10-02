const Payment= require('../models/payment.js');
const express = require('express');
const Router = express.Router();

Router.post('/payment', async (req, res) => {
    try {
        const payment = new Payment({
            mode: req.body.mode,
            amount: req.body.amount,
            payment_date: req.body.payment_date,
            payment_status: req.body.payment_status,
            payment_interface: req.body.payment_interface,
            customer_id: req.body.customer_id,
            appointment_id: req.body.appointment_id
        });
        await payment.save();
        res.status(200).json(payment);
    } catch (error) {
        console.log("Some error occured while creating payment", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

Router.put('/payment/:id', async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: "Payment not found" });
        }
        await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Payment updated successfully" });
    } catch (error) {
        console.log("Some error occured while updating payment", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

Router.delete('/payment/:id', async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: "Payment not found" });
        }
        await Payment.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Payment deleted successfully" });
    } catch (error) {
        console.log("Some error occured while deleting payment", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

Router.get('/payment', async (req, res) => {
    try {
        const payment = await Payment.find();
        res.status(200).json(payment);
    } catch (error) {
        console.log("Some error occured while fetching payment", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = {
    PaymentRouter: Router,
}