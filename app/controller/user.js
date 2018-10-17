'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async register() {
        const {ctx} = this;
        ctx.body = await ctx.service.user.register(ctx.request.body);
    }
}

module.exports = UserController;