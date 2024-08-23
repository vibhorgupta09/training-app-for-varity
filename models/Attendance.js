const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    presentOrNot: { 
        type: Boolean,
        required: true
    },
    name: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    remarks: { 
        type: String,
        required: true
    },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
