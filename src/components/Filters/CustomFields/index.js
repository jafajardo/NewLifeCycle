import React, { Component } from 'react';
import BooleanField from './BooleanField';
import StringField from './StringField';
import NumberField from './NumberField';

class CustomField extends Component {

  renderCustomField() {
    const { type, label, id, value, onChange } = this.props;
    switch (type) {
      case 'number':
        return (
          <NumberField
            id={id}
            label={label}
            value={value}
            onChange={onChange}
          />
        );

      case 'string':
        return (
          <StringField
            id={id}
            label={label}
            value={value}
            onChange={onChange}
          />
        );

      case 'boolean':
        return (
          <BooleanField
            id={id}
            label={label}
            value={value}
            onChange={onChange}
          />
        )

      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        {this.renderCustomField()}
      </div>
    );
  };
}

export default CustomField;
