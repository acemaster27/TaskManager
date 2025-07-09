const express = require('express');
const UserController = require('../../controller/user-controller');
const TaskController = require('../../controller/task-controller');

const router = express.Router();

router.post('/signUp', UserController.create);
router.post('/signIn', UserController.signIn);

router.get('/isAuthenticated', UserController.isAuthenticated);

router.post('/uploadTask', TaskController.create);

router.get('/allTasks', TaskController.showAll)

module.exports = router;