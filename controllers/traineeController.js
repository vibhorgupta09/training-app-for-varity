const Trainee = require('../models/Trainee');

exports.createTrainee = async (req, res) => {
    try {
        const trainee = new Trainee(req.body);
        await trainee.save();
        res.status(201).send(trainee);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getTrainees = async (req, res) => {
    try {
        const trainees = await Trainee.find({});
        res.status(200).send(trainees);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getTrainee = async (req, res) => {
    try {
        const trainee = await Trainee.findById(req.params.id);
        if (!trainee) {
            return res.status(404).send();
        }
        res.status(200).send(trainee);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateTrainee = async (req, res) => {
    try {
        const trainee = await Trainee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!trainee) {
            return res.status(404).send();
        }
        res.status(200).send(trainee);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteTrainee = async (req, res) => {
    try {
        const trainee = await Trainee.findByIdAndDelete(req.params.id);
        if (!trainee) {
            return res.status(404).send();
        }
        res.status(200).send(trainee);
    } catch (error) {
        res.status(500).send(error);
    }
};
