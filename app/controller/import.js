'use strict';

const Controller = require('egg').Controller;

class ImportController extends Controller {
    // 导入基础类别
    async importBaseTypes() {
        const {ctx} = this;
        ctx.body = await ctx.service.import.importBaseTypes();
    }
}

module.exports = ImportController;
