var path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'graph.jsx'),
    output: {
        filename: 'graph.js',
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
                                { "regenerator": true }]
                        ]
                    } 
                }
            },
            {
                test: /\.css$/i,
                use: [
                  { loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
                ]        
            }
        ]
    }
}
