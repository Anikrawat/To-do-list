const express = require('express')
const router = express.Router()
const Controller = require('../Controllers/Task-Controller')
const fetchUser = require('../MiddleWare/fetchUser');
const validate = require('../MiddleWare/validateMiddleware');
const taskSchema = require('../Validators/taskValidators');

router.route('/addtasks').post(validate(taskSchema),fetchUser,Controller.addTasks);
router.route('/fetchtasks').get(fetchUser,Controller.fetchTasks);
router.route('/updatetasks/:id').patch(fetchUser,Controller.updateTasks);
router.route('/deletetasks/:id').delete(fetchUser,Controller.deleteTasks);

module.exports = router