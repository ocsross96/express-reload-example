const express = require('express');
const router = express.Router();

const standardController = require('../controllers/standard.controller');

// GET /
router.get('/', (req, res) => {
  standardController({
    req,
    res,
    view: 'pages/local',
  })

});

module.exports = router;
