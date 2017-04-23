const nunjucks = require('nunjucks');
const path = require('path');
const config = require('./config');

function setup (app) {
  const nunjucksEnv = nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app,
    nocache: true,
    watch: true
  });

  nunjucksEnv.addGlobal('isProduction', config.isProduction);
}

exports.setup = setup;
