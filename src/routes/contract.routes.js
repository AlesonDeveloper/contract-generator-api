const express = require('express');
const contractController = require('../controllers/contract.controller');
const validateFields = require('../middlewares/validateFields.middleware');

const router = express.Router();

router.post(
  '/generate-contract/:templateName',
  validateFields(),
  contractController.generateContract
);

module.exports = router;