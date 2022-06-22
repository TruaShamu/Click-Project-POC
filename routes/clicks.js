const path = require('path');

const express = require('express');

const router = express.Router();

const clickController = require('../controllers/clicks');


router.get('/', clickController.getAddClick);

router.get('/clicks', clickController.getClicks);

router.post('/add-click', clickController.postAddClick);

module.exports = router;