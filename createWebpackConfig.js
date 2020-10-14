module.exports.createWebpackConfig = (library) => ({
  mode: "development",
  devtool: "source-map",
  target: "node",

  entry: "./src/index.js",

  output: {
    filename: "lib.js",
    libraryTarget: "commonjs2",
    ...(library ? { library } : {}),
  },
});
