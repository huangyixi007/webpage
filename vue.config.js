module.exports = {
    // publicPath: '/wbg/', // 如果加上后缀 则访问时 也需要加上后缀  http://localhost:8081/wbg/
    publicPath: '/',
    devServer: {
      open: true,
      host: '0.0.0.0',
      port: 8080,
      historyApiFallback: true,
      overlay: true,
      proxy: {
        '/api': {
          target: 'https://api.github.com',
          changeOrigin: true,
          secure: false,
          pathRewrite: {
            '^/api': '',
          },
        },
        '/mock': {
          target: '/mock',
          changeOrigin: true,
          secure: false
        },
      },
    },
    css: {
        loaderOptions: {
          sass: {
            data: `@import "@/styles/color.scss";`
          }
        }
      }
}