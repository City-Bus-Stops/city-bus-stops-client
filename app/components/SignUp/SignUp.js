import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Segment, Grid, Button, Message, Icon } from 'semantic-ui-react';

import InputFiled from './InputFiled';
import PasswordFiled from './PasswordFiled';
import validate from '../../src/utils/SignUpComponentValidation';

const selector = formValueSelector('SignUpForm');

let SignUpForm = (props) => {
  const { Email, Name, Password, signUp, reset } = props;
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column largeScreen="4" mobile="16" widescreen="4">
          <Segment raised color="teal">
            <h3>Sign Up</h3>
            <Grid centered>
              <Grid.Row>
                <Grid.Column>
                  <Field
                    name="Email"
                    component={InputFiled}
                    label="Email"
                    iconType="mail"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Field
                    name="Name"
                    component={InputFiled}
                    label="Name"
                    iconType="user"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Field
                    name="Password"
                    component={PasswordFiled}
                    label="Password"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Field
                    name="Cpassword"
                    component={PasswordFiled}
                    label="Confirm password"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns="12">
                <Grid.Column width="6" textAlign="center">
                  <Button
                    fluid={true}
                    positive
                    size="large"
                    onClick={() => {
                      signUp(Name, Email, Password);
                    }}
                  >Sign Up
                  </Button>
                </Grid.Column>
                <Grid.Column width="6" textAlign="center">
                  <Button
                    fluid={true}
                    size="large"
                    color="grey"
                    onClick={reset}
                  >Clear
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Message attached="bottom" warning>
          <Icon name="help" />
          Already signed up?&nbsp;<a href="/login">Login here</a>&nbsp;instead.
        </Message>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

SignUpForm.propTypes = {
  signUp: PropTypes.func.isRequired
};

SignUpForm = reduxForm({
  form: 'SignUpForm',
  validate
})(SignUpForm);

SignUpForm = connect(
  (state) => {
    const { Email, Name, Password } = selector(state, 'Email', 'Name', 'Password');
    return {
      Email,
      Name,
      Password
    };
  }
)(SignUpForm);

export default SignUpForm;
