'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539586577659_4021';

  // add your config here
  config.middleware = [];

  // security
  config.security = {
      csrf: {
          enable: false,
      },
  };

  // error
  config.onerror = {
      all(err, ctx) {
          // 在此处定义针对所有响应类型的错误处理方法
          // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
          ctx.body = err;
          ctx.status = 500;
      },
  };


  return config;
};
