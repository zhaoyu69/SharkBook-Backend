module.exports = app => {
    app.beforeStart(async () => {
        // parse init
        const Parse = require('parse/node');
        Parse.initialize('APPLICATION_ID','','MASTER_KEY');
        Parse.serverURL = 'http://localhost:1338/parse';
    });
};