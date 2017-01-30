import React, { PropTypes } from 'react';
import { Input, Icon, Button, Label } from 'semantic-ui-react';

const InputFiled = ({ input, label, meta: { touched, error }, personLocation }) => (
  <div>
    <h3>{label}</h3>
    <Input
      fluid
      size="large"
      placeholder={label}
      {...input}
    >
      <input />
      <Button
        size="small"
        icon
        basic
        circular
        onClick={() => { personLocation(input); }}
      >
        <Icon name="marker" color="green" />
      </Button>
    </Input>
    {touched && error &&
    <Label basic color="red" pointing>{error}</Label>
    }
  </div>
);

InputFiled.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

export default InputFiled;
