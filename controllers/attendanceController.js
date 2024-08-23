const Attendance = require('../models/Attendance');

exports.createAttendance = async (req, res) => {
    try {
        const attendance = new Attendance(req.body);
        await attendance.save();
        res.status(201).send(attendance);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAttendances = async (req, res) => {
    // console.log("req recieved");
    try {
        const attendances = await Attendance.find({});
        // console.log(attendances);
        res.status(200).send(attendances);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findById(req.params.id);
        if (!attendance) {
            return res.status(404).send();
        }
        res.status(200).send(attendance);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!attendance) {
            return res.status(404).send();
        }
        res.status(200).send(attendance);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findByIdAndDelete(req.params.id);
        if (!attendance) {
            return res.status(404).send();
        }
        res.status(200).send(attendance);
    } catch (error) {
        res.status(500).send(error);
    }
};
