'use strict';

const Controller = require('egg').Controller;

class FeatureController extends Controller {
    async getFeatures() {
        const {ctx} = this;
        ctx.body = await ctx.service.feature.getFeatures();
    }
}

module.exports = FeatureController;