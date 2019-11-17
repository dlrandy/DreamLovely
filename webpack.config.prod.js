const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const dotenv = require('dotenv');
const dotenvParseVariables = require('dotenv-parse-variables');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { getEntryJsHtmlPrj } = require('./tools/helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');
//lossless
const imageminJpegtran = require('imagemin-jpegtran');
const imageminOptipng = require('imagemin-optipng');
//lossy
// const imageminMozjpeg = require('imagemin-mozjpeg');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const [entryJsPath, htmlTemplatePath] = getEntryJsHtmlPrj();
const currentDirName = path.dirname(htmlTemplatePath);
const envConfig = dotenv.config({
  path: path.resolve(currentDirName, '.env')
}).parsed;
console.log("envConfig ", envConfig);

const env = dotenvParseVariables(envConfig);
const tsconfigFilePath = path.resolve(currentDirName, 'tsconfig.json');

const alias = env.ALIAS.reduce((obj, key) => {
  obj[key] = path.resolve(
    path.join(
      key.includes('Common') ? 'common' : '.',
      currentDirName,
      key.substring(1).toLowerCase()
    )
  );
  return obj;
}, {});

const targetDist = path.resolve(__dirname, 'dist', env.PRJ_NAME);
console.log(targetDist);
module.exports = {
  context: path.resolve(__dirname, currentDirName),
  mode: 'production',
  target: 'web',
  entry: [entryJsPath],
  output: {
    path: targetDist,
    publicPath: '/',
    pathinfo: true,
    filename: 'js/[name].[contentHash].js',
    chunkFilename: 'js/[id].[name].[contentHash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.png', '.jpg', 'jpeg'],
    alias: alias,
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
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
          MiniCssExtractPlugin.loader,
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
          },
        ],
      },
      {
        test: [/\.(bmp|gif|jpeg|jpg|png|svg)$/],
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash:6].[ext]',
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

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.PRJ_NAME': JSON.stringify(envConfig.PRJ_NAME),
      'process.env.ENTRY_MAIN_FUNC': JSON.stringify(envConfig.ENTRY_MAIN_FUNC),
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: tsconfigFilePath,
      tslint: path.resolve(__dirname, './tslint.json'),
      useTypescriptIncrementalApi: true,
      async: false,
      checkSyntacticErrors: true,
      reportFiles: [
        'src/**/*.{ts,tsx}',
        '!**/*.json',
        '!**/__tests__/**',
        '!**/?(*.)(spec|test).*',
        '!**/src/setupProxy.*',
        '!**/src/setupTests.*',
      ],
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|zh/),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contentHash:6].css',
      chunkFilename: 'styles/[id].[contentHash:6].css',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'developing',
      inject: true,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    }),
  ],
  optimization: {
    usedExports: true,
    sideEffects: true,
    minimizer: [
      new ImageminPlugin({
        bail: false,
        cache: true,
        imageminOptions: {
          plugins: [
            imageminJpegtran({
              progressive: true,
            }),
            imageminOptipng({
              optimizationLevel: 7,
            }),
          ],
        },
        loader: false,
        name: '[path][name].[ext]',
      }),
      // new ImageminPlugin({
      //   pngquant: ({quality: [0.5, 0.5]}),
      //   plugins: [imageminMozjpeg({quality: 50})]
      // })
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: false,
};
