const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8081/",
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
  
    plugins: [
      new ModuleFederationPlugin({
        name: 'mf',  
        filename: 'remoteEntry.js',  
        exposes: {
          './HeaderApp': './src/components/HeaderApp.vue',
  
        },    
        
      }),
    ],
  },
  devServer: {
    port: 8081,
  },
})
