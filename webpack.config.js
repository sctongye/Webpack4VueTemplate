const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const isWsl = require('is-wsl');
const webpack = require('webpack');
const configVar = require('./config');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

// function resolve(dir) {
//     return path.join(__dirname, '..', dir)
// }


const config = {
    target: 'web',
    stats: {
        children: false
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/',
        publicPath: isProd ? configVar.build.assetsPublicPath : configVar.dev.assetsPublicPath,
        filename: '[name].[hash:8].js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
        },
        extensions: ['.js', '.vue', '.json'],
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                sourceMap: false, // Must be set to true if using source-maps in production
                terserOptions: {
                    parse: {
                        // we want uglify-js to parse ecma 8 code. However, we don't want it
                        // to apply any minfication steps that turns valid ecma 5 code
                        // into invalid ecma 5 code. This is why the 'compress' and 'output'
                        // sections only apply transformations that are ecma 5 safe
                        // https://github.com/facebook/create-react-app/pull/4234
                        ecma: 8,
                    },
                    compress: {
                        drop_console: true,
                        ecma: 5,
                        warnings: false,

                        // Disabled because of an issue with Uglify breaking seemingly valid code:
                        // https://github.com/facebook/create-react-app/issues/2376
                        // Pending further investigation:
                        // https://github.com/mishoo/UglifyJS2/issues/2011
                        comparisons: false,

                        // Pending futher investigation:
                        // https://github.com/terser-js/terser/issues/120
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,

                        // Turned on because emoji and regex is not minified properly using default
                        // https://github.com/facebook/create-react-app/issues/2488
                        ascii_only: true,
                    },
                    // Use multi-process parallel running to improve the build speed
                    // Default number of concurrent runs: os.cpus().length - 1
                    // https://github.com/webpack-contrib/terser-webpack-plugin/issues/21
                    parallel: !isWsl,
                    // Enable file caching
                    cache: true,
                    exclude: /\.min\.js$/,
                },
            }),

        ],
        splitChunks: {
            // chunks(chunk) {
            //     // exclude `my-excluded-chunk`
            //     return chunk.name !== 'my-excluded-chunk';
            // },
            // name: true,
            // minSize: 10000,
            // automaticNameDelimiter: '_'
            chunks: 'all', // initial、async和all
            minSize: 30000, // 形成一个新代码块最小的体积
            maxAsyncRequests: 5, // 按需加载时候最大的并行请求数
            maxInitialRequests: 3, // 最大初始化请求数
            automaticNameDelimiter: '~', // 打包分割符
            name: true,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "initial",
                }
                // vendors: { // 项目基本框架等
                //     chunks: 'all',
                //     test: /(vue|leaflet|d3)/,
                //     priority: 100,
                //     name: 'vendors',
                // },
                // 'async-commons': {  // 异步加载公共包、组件等
                //     chunks: 'async',
                //     minChunks: 2,
                //     name: 'async-commons',
                //     priority: 90,
                // },
                // commons: { // 其他同步加载公共包
                //     chunks: 'all',
                //     minChunks: 2,
                //     name: 'commons',
                //     priority: 80,
                // },
            }
        }
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    // options: {
                    //     presets: ['@babel/preset-env'] //这里配置了babel就不需要.babelrc文件配置了
                    // }
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                // options: {
                //     presets: ['@babel/preset-env'] //这里配置了babel就不需要.babelrc文件配置了
                // }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: { minimize: true }
                }]

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'static/img/[name].[hash:7].[ext]'
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader',
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isProd ? '"production"' : '"development"'
            }
        }),
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([
            { from: "src/assets/data", to: "static/data" },
            { from: "src/assets/img", to: "static/img" },
        ]),
        new MiniCssExtractPlugin({
            filename: "styles.[chunkhash].[name].css",
            chunkFilename: "[id].css",
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new OpenBrowserPlugin({ url: 'http://127.0.0.1:9000' }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        historyApiFallback: true,
        inline: true,
        hot: true,
        open: true,
        // noInfo: true,
        // overlay: true
    },

    //配置自带插件--watch的刷新频率
    watchOptions: {
        poll: 1000, //监测修改的时间(ms)
        aggregateTimeout: 500, //防止重复按键，500毫秒内算按一次
        ignored: /node_modules/, //不监测
    },
    performance: {
        hints: false
    },
    devtool: '#cheap-module-eval-source-map',
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }

};

if (isProd) {

    config.output.filename = 'static/js/[name].[chunkhash:8].js';

    config.plugins = (config.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
    ]);

} else {
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    )
}


module.exports = config;