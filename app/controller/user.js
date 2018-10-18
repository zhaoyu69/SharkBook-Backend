'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async register() {
        const {ctx} = this;
        ctx.body = await ctx.service.user.register(ctx.request.body);
    }

    async updateUserInfo() {
        const {ctx} = this;
        ctx.body = await ctx.service.user.updateUserInfo(ctx.request.body);
    }
}

module.exports = UserController;