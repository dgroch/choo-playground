const enhancer = {}

enhancer.withProps = props => BaseComponent => BaseComponent.bind({props});
enhancer.withState = state => BaseComponent => BaseComponent.bind({state});

module.exports = enhancer;
