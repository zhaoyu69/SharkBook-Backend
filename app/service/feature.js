const Service = require('egg').Service;
const features = require('../public/features');

class FeatureService extends Service {
    async getFeatures() {
        return features;
    }
}

module.exports = FeatureService;