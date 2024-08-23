const express = require('express');
const router = express.Router();
const traineeController = require('../controllers/traineeController');

router.post('/', traineeController.createTrainee);
router.get('/', traineeController.getTrainees);
router.get('/:id', traineeController.getTrainee);
router.patch('/:id', traineeController.updateTrainee);
router.delete('/:id', traineeController.deleteTrainee);

module.exports = router;
