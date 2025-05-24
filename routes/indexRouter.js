'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

// create tables and import data
router.get('/database', async (req, res) => {
    const dbController = require("../controllers/dbController");
    await dbController.createDatabase();
    res.redirect("/");
});

router.get('/',  controller.showHomepage);

router.get('/:page', controller.showPage);

module.exports = router;