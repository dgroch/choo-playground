const extend = require('xtend')
const choo = require('choo');
const expose = require('choo-expose');
const log = require('choo-log');
const html = require('choo/html')
const PropTypes = require('./src/lib/choo_proptypes');
const enhancer = require('./src/lib/choo_enhancer');

const app = choo();
const routes = require('./src/routes')(app);
const reducers = require('./src/reducers')(app)


// function wat (state, emit) {
//   PropTypes.validate([
//     { prop: 'name', type: 'string', isRequired: true },
//     { prop: 'friends', type: 'array', isRequired: true },
//   ])(this.props);
  
//   const Friend = name => enhancer.withProps({ name })(friend)(state, emit);

//   return html`
//     <body>
//       <div>Hello, ${'World'}!</div>
//       <div>Props: ${this.props.name}</div>
//       ${this.props.friends.map(person => Friend(person))}
//     </body>
//   `
// }

// function friend (state, emit) {
//   return html`
//     <div>${this.props.name}</div>
//   `
// }

// const homeLayout = enhancer.withProps({ name: 'Kellie', friends: [ 'Tom', 'Lewis' ] })(wat);

app.use(expose());
app.use(log());

app.mount('body');