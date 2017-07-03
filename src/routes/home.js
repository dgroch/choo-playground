const html = require('choo/html');
const TopNavBar = require('../components/top_navbar');

module.exports = (state, emit) => {
  return html`
    <body>
      <header>${TopNavBar(state, emit)}</header>
      <div>
        <input onkeypress=${impressKellie} />
        <button onclick=${sayHello}>Say Hello</button>
      </div>
      <footer><a href="/test">test</a></footer>
    </body>
  `

  function impressKellie(e) {
    console.info(e.target.value);
  }

  function sayHello() {
    emit('navigation:update', { message: 'Hello Kellie' });
  }
}