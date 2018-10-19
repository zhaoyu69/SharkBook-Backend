'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    // 注册
    async register() {
        const {ctx} = this;
        ctx.body = await ctx.service.user.register(ctx.request.body);
    }

    // 更新用户信息
    async updateUserInfo() {
        const {ctx} = this;
        ctx.body = await ctx.service.user.updateUserInfo(ctx.request.body);
    }
}

module.exports = UserController;