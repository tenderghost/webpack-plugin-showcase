const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const ConcatPlugin = require("webpack-concat-plugin");

const config = {
    context: path.resolve("./src"),
    entry: './nothing.js',
    output: {
        path: path.resolve("./build"),
        filename: './nothing.js'
    },
    plugins: [
        new ConcatPlugin({
            name: 'user',
            fileName: '[name].bundle.js',
            filesToConcat: ['./users/index.js', './users/rolemgr.js', './users/usermgr.js']
        })
    ]
}

module.exports = config;