const TaskRepository = require('../repository/task-repository');

class TaskService {
    
    constructor() {
        this.taskRepository = new TaskRepository();
    }

    async create(data) {
        try {
            const user = await this.taskRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async allTasks(identity) {
        try {
            const response = await this.taskRepository.getById(identity);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

}

module.exports = TaskService;