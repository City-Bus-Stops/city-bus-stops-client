import React, { PropTypes } from 'react';
import { Input, Label } from 'semantic-ui-react';

const InputFiled = ({ input, label, meta: { touched, error } }) => (
  <div>
    <Input
      fluid
      size="large"
      placeholder={label}
      {...input}
    />
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
