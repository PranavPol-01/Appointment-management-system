const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    payment_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    mode: {
        type: String,
        required: true
    },
    amount: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    payment_date: {
        type: Date,
        required: true
    },
    payment_status: {
        type: String,
        required: true
    },
    payment_interface: {
        type: String,
        required: true
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer',
        required: true,
        unique: true
    },
    appointment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'appointment',
        required: true,
        unique: true
    }

});

const payment = mongoose.model('payment', paymentSchema);

module.exports = payment;