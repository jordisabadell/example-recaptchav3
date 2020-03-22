const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'main.js'
  },
  entry: {
    main: './src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: 'src/index.html',
      templateParameters: {
        APYKEP_GOOGLERECAPTCHAV3: '1234'        
      },
      hash: true
    }),
    new MiniCSSExtractPlugin({
        filename: "style.css",
    }),
    new Dotenv()
    ],
    module: {
        rules: [
            { 
              test: /\.scss$/, 
              loader: [
                MiniCSSExtractPlugin.loader,
                "css-loader",
                'sass-loader'
              ]
            }
        ]
    }
}