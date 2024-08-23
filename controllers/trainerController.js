const Trainer = require('../models/Trainer');

exports.createTrainer = async (req, res) => {
    try {
        const trainer = new Trainer(req.body);
        await trainer.save();
        res.status(201).send(trainer);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getTrainers = async (req, res) => {
    try {
        const trainers = await Trainer.find({});
        res.status(200).send(trainers);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getTrainer = async (req, res) => {
    try {
        const trainer = await Trainer.findById(req.params.id);
        if (!trainer) {
            return res.status(404).send();
        }
        res.status(200).send(trainer);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateTrainer = async (req, res) => {
    try {
        const trainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!trainer) {
            return res.status(404).send();
        }
        res.status(200).send(trainer);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteTrainer = async (req, res) => {
    try {
        const trainer = await Trainer.findByIdAndDelete(req.params.id);
        if (!trainer) {
            return res.status(404).send();
        }
        res.status(200).send(trainer);
    } catch (error) {
        res.status(500).send(error);
    }
};
