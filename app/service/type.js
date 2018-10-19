const Service = require('egg').Service;
const Parse = require('parse/node');
const UserObj = Parse.User;
const TypeObj = Parse.Object.extend("Type");
const UserTypeObj = Parse.Object.extend("UserType");

class TypeService extends Service {
    async getUserTypes({userId}) {
        const parseUser = UserObj.createWithoutData(userId);
        const query = new Parse.Query(UserTypeObj);
        query.equalTo("user", parseUser);
        query.include(["user", "type"]);
        let parseUserTypes = await query.find();
        // 没有该用户的类别表，则新建并插入基础类别
        if(!parseUserTypes.length) {
            // 获取基础类别组
            const parseBaseTypes = await this.getBaseTypes();
            const jobs = parseBaseTypes.map(async(parseBaseType) => {
                const parseUserType = new UserTypeObj();
                parseUserType.set("number", parseBaseType.get("number"));
                parseUserType.set("user", parseUser);
                parseUserType.set("type", parseBaseType);
                return parseUserType.save();
            });
            parseUserTypes = await Promise.all(jobs);
        }
        return parseUserTypes.map(parseUserType => parseUserType.get("type")) || [];
    }

    async getBaseTypes() {
        const query = new Parse.Query(TypeObj);
        return query.find();
    }

    async getUserTypeByTypeId(typeId) {
        const query = new Parse.Query(UserTypeObj);
        const parseType = TypeObj.createWithoutData(typeId);
        query.equalTo("type", parseType);
        return query.first();
    }
}

module.exports = TypeService;