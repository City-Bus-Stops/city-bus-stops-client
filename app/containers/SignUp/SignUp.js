import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/SignUp';
import * as errorActions from '../../actions/ErrorDialog';

import SignUpForm from '../../components/Sign_Up/Sign_Up';

class SignUp extends Component {
  checkSignUpValues(email, name, password) {
    const { badInput, signUp } = this.props.SignUp;
    if (!email || !name || !password) {
      badInput();
      return;
    }
    signUp(email, name, password);
  }

  render() {
    return (
      <div>
        <SignUpForm
          sign_up={this.checkSignUpValues.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    SignUpState: state.signUp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SignUp: bindActionCreators({ ...actions, ...errorActions }, dispatch),
  };
};

SignUp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

export default SignUp;
