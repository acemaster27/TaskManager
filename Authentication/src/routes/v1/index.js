const express = require('express');
const UserController = require('../../controller/user-controller');

const router = express.Router();

router.post('/signUp', UserController.create);
router.post('/signIn', UserController.signIn);

router.get('/isAuthenticated', UserController.isAuthenticated);

module.exports = router;