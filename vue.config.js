const path = require("path");

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "vue-style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: false,
                includePaths: [path.resolve(__dirname, "node_modules")],
              },
            },
          ],
        },
      ],
    },
    plugins: [],
  },
};
