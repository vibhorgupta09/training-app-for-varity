const express = require('express');
const router = express.Router();
const batchController = require('../controllers/batchController');

router.post('/', batchController.createBatch);
router.get('/', batchController.getBatches);
router.get('/:id', batchController.getBatch);
router.patch('/:id', batchController.updateBatch);
router.delete('/:id', batchController.deleteBatch);

module.exports = router;
