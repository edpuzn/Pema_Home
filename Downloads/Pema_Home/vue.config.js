module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  css: {
    loaderOptions: {
      css: {
        // CSS modülleri için opsiyonlar
      }
    }
  }
} 