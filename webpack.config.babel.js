import path from 'path';
import webpack from 'webpack';

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
  publicPath: 'http://localhost:8080/dist/'
};

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;

const isProduction = LAUNCH_COMMAND === 'production';

// This puts React into production mode
const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

const base = {
  entry: [
    PATHS.app
  ],
  output: {
    filename: 'bundle.js',
    path: PATHS.build,
    publicPath: PATHS.publicPath
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!less' }
    ]
  },
  resolve: {
    root: path.resolve('./src')
  }
};

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map'
};

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [productionPlugin]
};

export default Object.assign({}, base,
  isProduction === true ? productionConfig : developmentConfig
)