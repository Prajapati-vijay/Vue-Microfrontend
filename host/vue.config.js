const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8080/",
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
          mf: 'mf@http://localhost:8081/remoteEntry.js', 
          mf2: 'mf2@http://localhost:8082/remoteEntry.js',
                         
        },
       
      }),
    ],
  },
  devServer: {
    port: 8080,
  },
})
