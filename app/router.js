'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);

    // user
    router.post('/api/user/register', controller.user.register);
    router.post('/api/user/updateUserInfo', controller.user.updateUserInfo);

    // import
    router.get('/import/baseTypes', controller.import.importBaseTypes);
};
