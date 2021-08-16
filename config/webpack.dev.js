const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8083,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      filename: "remoteEntry.js",
      remotes: {
        kanban: "kanban@http://localhost:8081/remoteEntry.js",
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
