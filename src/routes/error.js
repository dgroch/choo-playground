const html = require('choo/html');
const enhancer = require('../lib/choo_enhancer');
const HomeLayout = require('../layouts/home');;

function content(state, emit) {
  return html`
    <div>
      <p>Unknown route. Click <a href="/">here</a> to return home.</p>
    </div>
  `
}

module.exports = enhancer.withProps({ children: content })(HomeLayout);