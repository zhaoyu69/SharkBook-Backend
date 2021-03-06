const Service = require('egg').Service;
const Parse = require('parse/node');
const AccountObj = Parse.Object.extend("Account");
const UserTypeObj = Parse.Object.extend("UserType");
const UserObj = Parse.User;

class AccountService extends Service {
    async makeAccount({typeId, remarks, price, time}) {
        const parseAccount = new AccountObj();
        const parseUserType = await this.ctx.service.type.getUserTypeByTypeId(typeId);
        parseAccount.set("userType", parseUserType);
        parseAccount.set("remarks", remarks);
        parseAccount.set("price", price);
        parseAccount.set("time", new Date(time));
        return parseAccount.save();
    };

    async getAccounts({userId}) {
        const parseUser = UserObj.createWithoutData(userId);
        const innerQuery = new Parse.Query(UserTypeObj);
        innerQuery.equalTo("user", parseUser);
        const query = new Parse.Query(AccountObj);
        query.include(["userType", "userType.type", "userType.user"]);
        query.matchesQuery("userType", innerQuery);
        return query.find();
    };

    async removeAccount({accountId}) {
        const parseAccount = AccountObj.createWithoutData(accountId);
        return parseAccount.destroy();
    }

    async updateUserType({accountId, typeId}) {
        const parseUserType = await this.ctx.service.type.getUserTypeByTypeId(typeId);
        const parseAccount = AccountObj.createWithoutData(accountId);
        parseAccount.set("userType", parseUserType);
        return parseAccount.save();
    }

    async updateAccount({accountId, type, value}) {
        const parseAccount = AccountObj.createWithoutData(accountId);
        parseAccount.set(type, value);
        return parseAccount.save();
    }
}

module.exports = AccountService;