const PropTypes = {
  validate: function(rules) {
    return function(props) {
      rules.forEach(prop => {
        const propExists = PropTypes.validateExistence(prop)(props);
        const propIsRequired = PropTypes.validateRequired(prop);
        const typeIsVaild = PropTypes.validateType(prop.type)(props[prop.prop]);

        if (propIsRequired && !propExists) throw new Error(`Prop '${prop.prop}' is required.`);
        if (propExists && !typeIsVaild) throw new Error(`Prop '${prop.prop}' should be type '${prop.type}'.`);
      });
    }
  },

  validateType: function(type) {
    return function(prop) {
      let valid;
      switch (type) {
        case 'array':
          valid = Array.isArray(prop);
          break;
        case 'function':
          valid = typeof prop === 'function';
          break;
        case 'string':
          valid = typeof prop === 'string';
          break;
        case 'boolean':
          valid = typeof prop === 'boolean';
          break;
        case 'number':
          valid = typeof prop === 'number';
          break;
        case 'object':
          valid = typeof prop === 'object';
          break;
      }
      return valid;
    }
  },

  validateExistence: function(prop) {
    return function(props) {
      return props && prop.prop && props[prop.prop];
    }
  },

  validateRequired: function(prop) {
    return prop.isRequired;
  }
}

module.exports = PropTypes;