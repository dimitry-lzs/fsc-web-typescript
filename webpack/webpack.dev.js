// const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
        historyApiFallback: true,
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:9898',
                changeOrigin: true,
            },
        ],
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        // Specify development API URL
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         NODE_ENV: JSON.stringify("development"),
        //     },
        // }),
        new ReactRefreshWebpackPlugin(),
    ],
};
