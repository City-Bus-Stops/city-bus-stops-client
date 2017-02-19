import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Segment, Grid, Button } from 'semantic-ui-react';

import InputFiled from './InputFiled';
import validate from '../../src/utils/InputComponentValidation';

const selector = formValueSelector('InputForm');

let InputForm = (props) => {
  const { From, To, searchRoute, reset, personLocation } = props;
  return (
    <Grid centered padded>
      <Grid.Row>
        <Grid.Column largeScreen="6" mobile="16" widescreen="6">
          <Segment raised color="teal">
            <Grid centered>
              <Grid.Row>
                <Grid.Column>
                  <Field
                    name="From"
                    component={InputFiled}
                    label="From"
                    personLocation={personLocation}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Field
                    name="To"
                    component={InputFiled}
                    label="To"
                    personLocation={personLocation}
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
                      searchRoute(From, To);
                    }}
                  >Search
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
};

InputForm.propTypes = {
  From: PropTypes.string,
  To: PropTypes.string,
  searchRoute: PropTypes.func.isRequired,
  personLocation: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

InputForm.defaultProps = {
  From: '',
  To: ''
};

InputForm = reduxForm({
  form: 'InputForm',
  validate
})(InputForm);

InputForm = connect(
  (state) => {
    const { From, To } = selector(state, 'From', 'To');
    return {
      From,
      To
    };
  }
)(InputForm);

export default InputForm;
