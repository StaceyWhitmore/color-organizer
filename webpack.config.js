var webpack = require("webpack")
//var HtmlWebpackPlugin = require('html-webpack-plugin')
//var CleanWebpackPlugin = require('clean-webpack-plugin')
var path = require("path")

process.noDeprecation = true

module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.join(__dirname, 'dist', 'assets'),
        //path: path.resolve(__dirname, 'dist', 'assets'),
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    //devtool: 'inline-source-map',
    devtool: '#source-map',
    /*
    devServer: {
      contentBase: './dist',
      hot:true
    },
    */
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [require('autoprefixer')]
                    }}]
            },
            {
                test: /\.scss/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [require('autoprefixer')]
                    }}, 'sass-loader']
            }

        ]
    },

    plugins: [
      /*
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement'
      }),
      new webpack.HotModuleReplacementPlugin(),
      */

        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: false
        })

    ]
}
