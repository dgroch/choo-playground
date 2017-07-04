const home = require('./home');
const logIn = require('./log_in');
const signUp = require('./sign_up');
const error = require('./error');

module.exports = (app) => {
  app.route('/', home);
  // app.route('/projects', home);
  // app.route('/jobs', home);
  // app.route('/exchange', home);
  app.route('/log-in', logIn);
  app.route('/sign-up', signUp);
  app.route('*', error);
}