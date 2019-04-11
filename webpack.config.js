const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        library: 'useWindowWidth',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ]
    },
    plugins: [
        // new HTMLWebpackPlugin({
        //     template: path.resolve(__dirname, 'index.html')
        // }),
        // new webpack.HotModuleReplacementPlugin(),
    ],
    externals: {
        'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    }
};