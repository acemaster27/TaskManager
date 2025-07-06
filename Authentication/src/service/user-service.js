const UserRepository = require('../repository/user-repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { JWT_KEY } = require('../config/serverConfig');

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async signIn(data) {
        try {
            const user = await this.userRepository.getByEmail(data);
            const passwordMatch = this.checkPassword(data.password, user.password);
            if(!passwordMatch) {
                console.log("Incorrect password");
                throw error;
            }
            const j_token = this.createToken({email:user.emailId, id:user.id});
            return j_token;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async isAuthenticated(token) {
        try {
            const response = this.verifyToken(token);
            if(!response) {
                console.log("Invalid Token");
                throw {error:'Something went wrong while verifying token'};
            }
            const user = this.userRepository.getByEmail(token.emailId);
            if(!user) {
                throw {error: 'No such user exists'};
            }
            return user.id;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }
    
    createToken(user) {
        try {
            const result = jwt.sign(user,JWT_KEY, {expiresIn: '1d'});
            return result;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in token verificartion");
            throw error;
        }
    }

    checkPassword(userInputplainPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputplainPassword,encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in password verification");
            throw error;
        }
    }

}

module.exports = UserService;