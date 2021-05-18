const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/common/_variables.scss";
          @import "@/scss/common/_base.scss";
        `
      }
    }
  },
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/': {
        target: 'https://expense-tracker-trial.herokuapp.com/'
      }
    }
  }
}
