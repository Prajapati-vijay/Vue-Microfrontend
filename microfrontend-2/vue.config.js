const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8082/",
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
  
    plugins: [
      new ModuleFederationPlugin({
        name: 'mf2',  
        filename: 'remoteEntry.js',  
        exposes: {
          './FooterApp': './src/components/FooterApp.vue', 
        },
        
      }),
    ],
  },
  devServer: {
    port: 8082,
  },
})