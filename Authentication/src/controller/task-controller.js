const TaskService = require('../service/task-service');
const taskService = new TaskService();

const create = async (req,res) => {
    try {
        const response = await taskService.create(data);
        return res.status(201).json({
            success: true,
            err: {},
            message: "Successfully created a new task",
            data: response
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            err: {error},
            message: "Unable to create a new task",
            data: {}
        });
    }
}

const showAll = async (req,res) => {
    try {
        const response = await taskService.allTasks(data);
        return res.status(201).json({
            success: true,
            err: {},
            message: "Successfully fetched all tasks",
            data: response
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            err: {error},
            message: "Unable to fetch all tasks",
            data: {}
        });
    }
}

module.exports = {
    create,
    showAll
};