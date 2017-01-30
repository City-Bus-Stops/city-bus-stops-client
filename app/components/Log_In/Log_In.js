import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Segment, Grid, Button } from 'semantic-ui-react';

import InputFiled from '../Sign_Up/InputFiled';
import PasswordFiled from '../Sign_Up/PasswordFiled';
import validate from '../../src/utils/LogInFormComponentValidation';

const selector = formValueSelector('LogInForm');

let SignUpForm = ({ Email, Password, log_in, reset }) => (
  <Grid centered>
    <Grid.Row>
      <Grid.Column largeScreen="6" mobile="16" widescreen="6">
        <Segment raised color="teal">
          <h3>Log in</h3>
          <Grid centered>
            <Grid.Row>
              <Grid.Column>
                <Field
                  name="Email"
                  component={InputFiled}
                  label="Email"
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
                  fluid={true}
                  positive
                  size="large"
                  onClick={() => {
                    log_in(Email, Password);
                  }}
                >Login
                </Button>
              </Grid.Column>
              <Grid.Column width="6" textAlign="center">
                <Button
                  basic
                  fluid={true}
                  size="large"
                  color="yellow"
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
  log_in: PropTypes.func.isRequired,
};

SignUpForm = reduxForm({
  form: 'LogInForm',
  validate,
})(SignUpForm);

SignUpForm = connect(
  (state) => {
    const { Email, Password } = selector(state, 'Email', 'Password');
    return {
      Email,
      Password,
    };
  }
)(SignUpForm);

export default SignUpForm;
