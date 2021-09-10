const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build/')
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i, // me vas a buscar todos los archivos que terminen con la extension .sass o .scss de manera global
                use: [
                    'style-loader', 
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'build'),
        }
    }
}