const html = require('choo/html');
const enhancer = require('../lib/choo_enhancer');
const HomeLayout = require('../layouts/home');;
const LogIn = require('../components/authentication/log_in');

module.exports = enhancer.withProps({ children: LogIn })(HomeLayout);