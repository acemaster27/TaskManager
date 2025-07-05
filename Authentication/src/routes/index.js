const express = require('express');
const v1apiRoutes = require('./v1/index');

const router = express.Router();

router.get('/v1', v1apiRoutes);

module.exports = router;