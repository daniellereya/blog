var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var buildFolderPath = __dirname + "/src/build/";

// var node_modules = path.resolve(__dirname, 'node_modules');
var pathToBourbon = require('node-bourbon').includePaths;

module.exports = {
  entry: [__dirname + "/src/app/index.js",
    '!!style!css!react-mdl/extra/material.min.css',
    'react-mdl/extra/material.min.js'],
  output: {
    path: __dirname + "/src/build/",
    filename: "bundle.js",
    // publicPath: "/src/app/"
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
       test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        include: __dirname,
        query: {
          presets: ["es2015", "react", "react-hmre"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
      // ,
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   loader: ExtractTextPlugin.extract('css!sass')
      // }
    ]
  },
  sassLoader: {
    includePaths: [pathToBourbon]
  },
  plugins: [
    // this plugin moves the generated styles content to a separate file (allowing the browser to cache the css file)
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ]
}

var loadersArray = module.exports.module.loaders;
// if (env === productionEnvironment ) {
//     // generate separate physical stylesheet for production build using ExtractTextPlugin. This provides separate caching and avoids a flash of unstyled content on load.
//     loaders.push({
//       test: /(\.css|\.scss)$/,
//       include: path.join(__dirname, 'src'),
//       loader: ExtractTextPlugin.extract("css?sourceMap!sass?outputStyle=expanded&includePaths[]=" + bourbon)
//     });
//   } else {
//     loaders.push({
//       test: /(\.css|\.scss)$/,
//       include: path.join(__dirname, 'src'),
//       loaders: ['style', 'css?sourceMap', 'sass?outputStyle=expanded&includePaths[]=' + bourbon]
//     });
//   }


// Some info:
// - Loaders are executed from right to left (sass loader makes styles.scss -> styles.css, css loader takes the styles.css and load it to JS)
