const html = require('choo/html');
const enhancer = require('../lib/choo_enhancer');
const TopNavBar = require('../components/top_navbar');

module.exports = (state, emit) => {
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

  console.info(this.props);
  console.warn('hello to HOME')

  return html`
    <body>
      <header>${navigation}</header>
      <div>
      </div>
      <footer></footer>
    </body>
  `
}