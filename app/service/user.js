const Service = require('egg').Service;
const Parse = require('parse/node');
const UserObj = Parse.User;

class UserService extends Service {
    async findAll() {
        const query = new Parse.Query(UserObj);
        const users = await query.find();
        console.log("users:", users);
        return users;
    }
}

module.exports = UserService;