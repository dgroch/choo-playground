const extend = require('xtend')
const choo = require('choo');
const expose = require('choo-expose');
const log = require('choo-log');
const html = require('choo/html')

const app = choo();
// const routes = require('./src/routes')(app);
// const reducers = require('./src/reducers')(app);

function withProps(props) {
  return (BaseComponent) => {
    return BaseComponent.bind({props});
  }
}

function wat (state, emit) {
  return html`
    <body>
      <div>Hello, ${'World'}!</div>
      <div>Props: ${this.props.name}</div>
    </body>
  `
}

app.route('/', withProps({ name: "Kellie" })(wat));
app.use(expose());
app.use(log());

app.mount('body');

// const tree = app.start();
// document.body.appendChild(tree)