const Service = require('egg').Service;
const Parse = require('parse/node');
const TypeObj = Parse.Object.extend("Type");
const baseTypes = require('../public/baseTypes');
const _ = require('lodash');

class ImportService extends Service {
    async importBaseTypes() {
        // 先判断是否导入过baseTypes
        const query = new Parse.Query(TypeObj);
        query.equalTo("isBased", true);
        const baseType = await query.first();
        if(!baseType) {
            _.forEach(baseTypes, async(list, key) => {
                const parseTypes = list.map(async(item, idx) => {
                    const [icon_front, icon_after] = item.icon.split('@');
                    item.activeIcon = icon_front + "_s@" + icon_after;
                    item.listIcon = icon_front + "_l@" + icon_after;
                    item.classify = key;
                    item.isBased = true;
                    item.number = idx;
                    const parseType = new TypeObj();
                    return parseType.save(item);
                });
                return await Promise.all(parseTypes);
            });
        }
        return baseTypes;
    }
}

module.exports = ImportService;