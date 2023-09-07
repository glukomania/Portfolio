const path = require(`path`)
const webpack = require(`webpack`)

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `docs`),
    publicPath: '/',
  },
  devServer: {
    compress: false,
    open: true,
    port: 1337,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, './'),
    },
  },
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  devtool: `source-map`,

  resolve: {
    modules: [`node_modules`, path.resolve(path.join(__dirname, `docs`))],
    extensions: [`.js`, `.jsx`, `.ts`, `.tsx`, `.webm`],
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: `react`,
      ReactDOM: `react-dom`,
      cx: `classnames`,
    }),
  ],

  performance: {
    hints: false,
    maxEntrypointSize: 700000,
    maxAssetSize: 700000,
  },
}
