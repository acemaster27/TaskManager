const { User } = require('../models/index')

class UserRepository {

    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async getByEmail(userId) {
        try {
            const response = await User.findOne({
                where: {
                    emailId : userId
                }
            })
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    // async getById(userId) {
    //     try {
    //         const user = await User.findByPk(userId, {
    //             attributes: ['emailId', 'id']
    //             });
    //         return user;
    //     } catch (error) {
    //         console.log("Something went wrong in repository layer");
    //         throw error;
    //     }
    // }
}

module.exports = UserRepository;