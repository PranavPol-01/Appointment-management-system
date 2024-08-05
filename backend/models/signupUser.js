const mongoose = require('mongoose');
const outlet = require('./outlets');

const signupUserSchema = new mongoose.Schema({
    staff_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },

    staff_name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    outlet_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'outlet',
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const SignupUser = mongoose.model('SignupUser', signupUserSchema);

module.exports = SignupUser;