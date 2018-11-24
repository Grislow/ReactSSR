const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // build bundle for nodeJS, not browser
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        //__dirname = reference to cwd that the projec tis being run from
        // build = ouput folder in which the bundle will be placed
        path: path.resolve(__dirname, 'build')
    },
    //do not bundle libs from node_modules
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);