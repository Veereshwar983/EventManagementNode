module.exports = {
    mode: "production",
    entry: "./app.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
  };