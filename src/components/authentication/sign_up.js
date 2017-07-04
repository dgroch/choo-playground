const html = require('choo/html');
const css = require('sheetify');
const PropTypes = require('../../lib/choo_proptypes');

module.exports = function(state, emit) {
  return html`
    <div>
      <h3>Sign Up</h3>
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