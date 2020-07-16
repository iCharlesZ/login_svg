module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets'
      }
    }
  },
  devServer: {
    port: 8888,
    open: true,
    disableHostCheck: true
  }
}