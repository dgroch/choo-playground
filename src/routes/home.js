const html = require('choo/html');
const enhancer = require('../lib/choo_enhancer');
const HomeLayout = require('../layouts/home');;

function content(state, emit) {
  return html`
    <h1>Welcome to BootCoin</h1>
  `
}

module.exports = enhancer.withProps({ children: content })(HomeLayout);