module.exports = {
  css: {
    loaderOptions: {
      // https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md#step-1-webpack-with-sass
      sass: {
        implementation: require("sass"), // prefer Dart Sass
        webpackImporter: false, // see https://github.com/webpack-contrib/sass-loader/issues/804
        sassOptions: {
          includePaths: ["./node_modules"],
        },
      },
    },
  },
  configureWebpack: {},
};
