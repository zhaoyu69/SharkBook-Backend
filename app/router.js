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

    // type
    router.post('/api/type/getUserTypes', controller.type.getUserTypes);
    router.post('/api/type/getBaseTypes', controller.type.getBaseTypes);

    // acount
    router.post('/api/account/makeAccount', controller.account.makeAccount);
    router.post('/api/account/getAccounts', controller.account.getAccounts);
    router.post('/api/account/removeAccount', controller.account.removeAccount);
    router.post('/api/account/updateUserType', controller.account.updateUserType);
    router.post('/api/account/updateAccount', controller.account.updateAccount);
};
