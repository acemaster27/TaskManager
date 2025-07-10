const { Tasks } = require('../models/index');

class TaskRepository {
    
    async create(data) {
        try {
            const user = await Tasks.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async getById(identity) {
        try {
            console.log(identity);
            const tasks = await Tasks.findAll({
                where: {
                    userId : identity
                }
            });
            return tasks;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

}

module.exports = TaskRepository;