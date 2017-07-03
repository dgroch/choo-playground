const home = require('./home');

module.exports = (app) => {
  app.route('/', home);
}