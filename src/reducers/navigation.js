module.exports = (state, emitter) => {
  state.topNavBar = {
    leftLinks: [
      'Pitch a project',
      'Work on a project',
      'Trade BootCoin'
    ],
    rightLinks: [
      'Log In',
      'Sign Up',
    ],
  };

  emitter.on('navigation:update', function({ message }) {
    console.info(message);
    // console.info(state);
  });
}