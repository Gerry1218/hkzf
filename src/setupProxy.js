const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://capi.douyucdn.cn",
      changeOrigin: true,
    })
  );

  // app.use(
  //   "/rmsportal",
  //   createProxyMiddleware({
  //     target: "https://zos.alipayobjects.com",
  //     changeOrigin: true,
  //   })
  // );
};
