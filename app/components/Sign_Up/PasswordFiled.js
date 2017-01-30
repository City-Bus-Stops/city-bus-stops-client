import React, { Component } from 'react';
import { Input, Label, Button } from 'semantic-ui-react';

class PasswordFiled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const { input, label, meta: { touched, error } } = this.props;
    return (
      <div>
        <Input
          fluid
          size="large"
          placeholder={label}
          type={this.state.checked ? 'text' : 'password'}
          {...input}
        >
          <input />
          <Button
            basic
            color={this.state.checked ? 'green' : 'red'}
            icon={this.state.checked ? 'unlock' : 'lock'}
            onClick={this.handleClick}
          />
        </Input>
        {touched && error &&
        <Label basic color="red" pointing>{error}</Label>
        }
      </div>
    );
  }
}

export default PasswordFiled;
