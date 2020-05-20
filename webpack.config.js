var path = require('path');

module.exports = {
    mode: 'development',//'production',
    entry: {
        main:'./src/main.jsx',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src',
    },
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'static')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|css)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [
                            "@babel/plugin-proposal-class-properties", 
                            ["@babel/plugin-transform-runtime",
                                { "regenerator": true }],
                            'emotion'
                        ]
                    } 
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ]        
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }   
}
