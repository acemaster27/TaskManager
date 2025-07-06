const UserService = require('../service/user-service');
const userService = new UserService();

const create = async (req,res) => {
    try {
        const response = await userService.create({
            emailId: req.body.emailId,
            password: req.body.password
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a user',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Unable to create a user',
            data: {},
            err: error
        });
    } 
}

const signIn = async (req,res) => {
    try {
        const response = await userService.signIn({
            emailId: req.body.emailId,
            password: req.body.password
        });
        return res.status(200).json({
            success: true,
            message: 'Successfully signedIn',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Unable to signIn',
            data: {},
            err: error
        });
    }
}

const isAuthenticated = async (req,res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            success: true,
            message: 'Successfully authenticated',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Unable to authenticate',
            data: {},
            err: error
        });
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated
};