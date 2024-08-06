const mongoose = require('mongoose');
const outlet = require('./outlets');

const signupUserSchema = new mongoose.Schema({
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
        type: Object,
        ref: 'outlet',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const SignupUser = mongoose.model('SignupUser', signupUserSchema);

module.exports = SignupUser;