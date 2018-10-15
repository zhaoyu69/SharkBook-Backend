'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539586577659_4021';

  // add your config here
  config.middleware = [];

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/sharkbook',
      options: {
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
      },
    },
  };

  return config;
};
