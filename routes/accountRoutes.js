const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.post('/', accountController.createAccount);
router.get('/', accountController.getAccounts);
router.patch('/:id', accountController.updateAccount);
router.delete('/:id', accountController.deleteAccount);

module.exports = router;