const html = require('choo/html');
const enhancer = require('../lib/choo_enhancer');
const css = require('sheetify');
const TopNavBar = require('../components/navigation/top_navbar');

const styles = css('./home.css');

module.exports = function(state, emit) {
  const leftLinks = [
    { url: '/projects', text: 'Pitch a Project' },
    { url: '/jobs', text: 'Work on a Project' },
    { url: '/exchange', text: 'Trade BootCoin' }
  ];

  const rightLinks = [
    { url: '/log-in', text: 'Log In' },
    { url: '/sign-up', text: 'Sign Up', }
  ];

  const navigation = enhancer.withProps({
    leftLinks,
    rightLinks,
  })(TopNavBar)(state, emit);

  return html`
    <body class=${styles}>
      <header>${navigation}</header>
      <main>
        ${this.props.children(state, emit)}
      </main>
      <footer>
        <div>
          <h3>About us</h3>
          <ul>
            <li>What is BootCoin?</ul>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
      </footer>
    </body>
  `
}