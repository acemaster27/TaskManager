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

    async getById(data) {
        try {
            const tasks = await Tasks.findAll(description,{
                where: {
                    id : data.userId
                }
            })
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

}

module.exports = TaskRepository;