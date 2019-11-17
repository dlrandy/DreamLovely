const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const dotenvParseVariables = require('dotenv-parse-variables');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { getEntryJsHtmlPrj } = require('./tools/helpers');
const [entryJsPath, htmlTemplatePath] = getEntryJsHtmlPrj();
const currentDirName = path.dirname(htmlTemplatePath);
 console.log("currentDirName ", currentDirName, path.resolve(currentDirName, '.env'));
const envConfig = dotenv.config({
  path: path.resolve(currentDirName, '.env')
}).parsed;
console.log("envConfig ", envConfig);

const env = dotenvParseVariables(envConfig);
 console.log("env ", env);

const tsconfigFilePath = path.resolve(currentDirName, 'tsconfig.json');
const alias = env.ALIAS.reduce((obj, key) => {
  obj[key] = path.join(currentDirName, key.substring(1).toLowerCase());
  return obj;
}, {});

module.exports = {
  mode: 'development',
  target: 'web',
  entry: [entryJsPath],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './'),
    publicPath: '/',
    pathinfo: true,
    filename: '[name].js',
    chunkFilename: '[id].[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json','.png', '.jpg', 'jpeg'],
    alias: alias,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(currentDirName, 'tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009',
                    grid: 'autoplace',
                  },
                  stage: 0,
                }),
              ],
            },
          }
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: 'url-loader',
        options: {
          name: '[name].[hash].[ext]',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: './',
    historyApiFallback: {
      disableDotRule: true,
    },
    hot: true,
    inline: true,
    open: 'chrome',
    port: 9000,
    proxy: {
      '/gochen/micro-service': {
        target: 'http://jj.nsroot.net:50301',
        pathRewrite: { '^/gochen/micro-service': '' },
        headers: {
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.PRJ_NAME': JSON.stringify(env.PRj_NAME),
      'process.env.ENTRY_MAIN_FUNC': JSON.stringify(env.ENTRY_MAIN_FUNC),
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: tsconfigFilePath,
      tslint: './tslint.json',
      useTypescriptIncrementalApi: true,
      async: false,
      checkSyntacticErrors: true,
      reportFiles: [
        'src/'+currentDirName+'**/*.{ts,tsx}',
        '!**/*.json',
        '!**/__tests__/**',
        '!**/?(*.)(spec|test).*',
        '!**/src/setupProxy.*',
        '!**/src/setupTests.*',
      ],
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|zh/),
    new HtmlWebpackPlugin({
      template: htmlTemplatePath,
      title: 'developing',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
