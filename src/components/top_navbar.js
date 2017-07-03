const html = require('choo/html');

module.exports = (state, emit) => html`
  <div>
    <div>
      ${state.topNavBar.leftLinks.map(item => html`<div>${item}</div>`)}
    </div>
    <div></div>
    <div></div>
  </div>
`