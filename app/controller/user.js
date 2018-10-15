'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = await this.ctx.model.User.find({});
  }
}

module.exports = UserController;