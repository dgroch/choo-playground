const home = require('./home');
const signUp = require('./sign_up');

module.exports = (app) => {
  app.route('/', home);
  // app.route('/projects', home);
  // app.route('/jobs', home);
  // app.route('/exchange', home);
  app.route('/sign-up', signUp);
}