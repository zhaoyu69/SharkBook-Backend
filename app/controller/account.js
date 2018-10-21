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

    // 删除记账
    async removeAccount() {
        const {ctx} = this;
        ctx.body = await ctx.service.account.removeAccount(ctx.request.body);
    }

    // 更新用户类别
    async updateUserType() {
        const {ctx} = this;
        ctx.body = await ctx.service.account.updateUserType(ctx.request.body);
    }

    // 更新账单属性
    async updateAccount() {
        const {ctx} = this;
        ctx.body = await ctx.service.account.updateAccount(ctx.request.body);
    }
}

module.exports = AccountController;