import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Segment, Grid, Button } from 'semantic-ui-react';

import InputFiled from '../SignUp/InputFiled';
import PasswordFiled from '../SignUp/PasswordFiled';
import validate from '../../src/utils/LogInFormComponentValidation';

const selector = formValueSelector('LogInForm');

let SignUpForm = ({ Email, Password, logIn, reset, invalid }) => (
  <Grid centered padded>
    <Grid.Row>
      <Grid.Column largeScreen="4" mobile="16" widescreen="4">
        <Segment raised piled>
          <h3>Log in</h3>
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
                  name="Password"
                  component={PasswordFiled}
                  label="Password"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="12">
              <Grid.Column width="6" textAlign="center">
                <Button
                  disabled={invalid}
                  fluid
                  positive
                  size="large"
                  onClick={() => {
                    logIn(Email, Password);
                  }}
                >Login
                </Button>
              </Grid.Column>
              <Grid.Column width="6" textAlign="center">
                <Button
                  fluid
                  basic
                  size="large"
                  color="red"
                  onClick={reset}
                >Clear
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

SignUpForm.propTypes = {
  logIn: PropTypes.func.isRequired
};

SignUpForm = reduxForm({
  form: 'LogInForm',
  validate
})(SignUpForm);

SignUpForm = connect(
  (state) => {
    const { Email, Password } = selector(state, 'Email', 'Password');
    return {
      Email,
      Password
    };
  }
)(SignUpForm);

export default SignUpForm;
