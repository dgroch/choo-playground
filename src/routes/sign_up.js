const html = require('choo/html');
const enhancer = require('../lib/choo_enhancer');
const HomeLayout = require('../layouts/home');;
const SignUp = require('../components/authentication/sign_up');

module.exports = enhancer.withProps({ children: SignUp })(HomeLayout);