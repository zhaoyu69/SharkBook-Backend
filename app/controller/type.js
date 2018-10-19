'use strict';

const Controller = require('egg').Controller;

class TypeController extends Controller {
    // 获取用户类别
    async getUserTypes() {
        const {ctx} = this;
        ctx.body = await ctx.service.type.getUserTypes(ctx.request.body);
    }

    // 获取基础类别
    async getBaseTypes() {
        const {ctx} = this;
        ctx.body = await ctx.service.type.getBaseTypes();
    }
}

module.exports = TypeController;