const html = require('choo/html');
const enhancer = require('../lib/choo_enhancer');
const home = require('./home');
const SignUp = require('../components/sign_up');

function template (state, emit) {
  console.warn('wat from TEMPLATE')
  return html`
    <div>
      <field>
        <label>Email:</label>
        <input />
      </field>
      <field>
        <label>Password</label>
        <input />
      </field>
    </div>
  `
}

function signup(state, emit) {
  return enhancer.withProps({ cunt: 'yes' })(home)(state, emit);
}

module.exports = signup;