var path = require("path");

module.exports = {
  entry : {
    app: "./src/js/app.js"
  },

  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      }
    ]
  }
}
