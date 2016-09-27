switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod')();
    break;
  case 'aot':
    module.exports = require('./config/webpack.aot');
    break;
  case 'dev':
  case 'development':
  /* falls through */
  default:
    module.exports = require('./config/webpack.dev')();
}
