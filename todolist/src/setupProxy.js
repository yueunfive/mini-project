// http-proxy-middleware : 클라이언트 CORS 에러 해결용
// 개발 환경에서만 사용 가능(배포 X)

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/users", {
      target: "http://toodoolist.shop",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/api/plans", {
      target: "http://toodoolist.shop",
      changeOrigin: true,
    })
  );
};
