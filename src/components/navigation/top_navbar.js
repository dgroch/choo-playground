const html = require('choo/html');
const PropTypes = require('../../lib/choo_proptypes');
const css = require('sheetify');
const styles = css('./top_navbar.css');

module.exports = function(state, emit) {
  PropTypes.validate([
    { prop: 'leftLinks', type: 'array', isRequired: true },
    { prop: 'rightLinks', type: 'array', isRequired: true }
  ])(this.props);

  return html`
    <div class=${styles}>
      <div class="left-links">
        ${this.props.leftLinks.map(link => html`<a href=${link.url}>${link.text}</a>`)}
      </div>
      <div class="logo">
        <a href="/">- LOGO -</a></div>
      <div class="right-links">
        ${this.props.rightLinks.map(link => html`<a href=${link.url}>${link.text}</a>`)}
      </div>
    </div>
  `
}