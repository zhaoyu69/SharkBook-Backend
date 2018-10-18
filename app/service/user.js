const Service = require('egg').Service;
const Parse = require('parse/node');
const UserObj = Parse.User;

class UserService extends Service {
    async register({username, password}) {
        const parseUser = new UserObj();
        const obj = {username, password};
        obj.uid = new Date().getTime();
        obj.nickname = username;
        return parseUser.save(obj);
    }

    async updateUserInfo({userId, type, value}) {
        const parseUser = UserObj.createWithoutData(userId);
        parseUser.set(type, value);
        return parseUser.save(null, {useMasterKey: true});
    }
}

module.exports = UserService;