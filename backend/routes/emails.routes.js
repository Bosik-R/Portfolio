const express = require('express');
const router = express.Router();

const EmailController = require('../controllers/emails.controller');

router.post('/email', EmailController.post);

module.exports = router;
