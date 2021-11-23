const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = (r) => path.resolve(__dirname, r)

module.exports = {
  entry: path.join(__dirname, '../src/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: [resolve('../src')],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        // 排除node_modules底下的
        exclude: /node_modules/,
      },
      {
        test: /\.less$/, // 正则匹配文件路径
        use: [
          // 注意loader生效是从下往上的
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
    alias: {
      '@': resolve('../src'),
      "@ant-design/icons/lib/dist$": resolve('../src/icons.ts'),
      '@components': resolve('../src/components'),
      '@img': resolve('../src/assets/img')
    }
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
}
