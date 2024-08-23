const Batch = require('../models/Batch');

exports.createBatch = async (req, res) => {
    try {
        const batch = new Batch(req.body);
        await batch.save();
        res.status(201).send(batch);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getBatches = async (req, res) => {
    try {
        const batches = await Batch.find({});
        res.status(200).send(batches);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getBatch = async (req, res) => {
    try {
        const batch = await Batch.findById(req.params.id);
        if (!batch) {
            return res.status(404).send();
        }
        res.status(200).send(batch);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateBatch = async (req, res) => {
    try {
        const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!batch) {
            return res.status(404).send();
        }
        res.status(200).send(batch);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteBatch = async (req, res) => {
    try {
        const batch = await Batch.findByIdAndDelete(req.params.id);
        if (!batch) {
            return res.status(404).send();
        }
        res.status(200).send(batch);
    } catch (error) {
        res.status(500).send(error);
    }
};
