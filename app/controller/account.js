'use strict';

const Controller = require('egg').Controller;

class AccountController extends Controller {
    // 完成记账
    async makeAccount() {
        const {ctx} = this;
        ctx.body = await ctx.service.account.makeAccount(ctx.request.body);
    }

    // 获取所有账单
    async getAccounts() {
        const {ctx} = this;
        ctx.body = await ctx.service.account.getAccounts(ctx.request.body);
    }
}

module.exports = AccountController;