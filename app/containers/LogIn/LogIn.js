import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/LogIn';
import * as errorActions from '../../actions/ErrorDialog';

import LogInFrom from '../../components/LogIn/LogIn';

class LogIn extends Component {
  checkLogInValues(email, password) {
    const { badInput, logIn } = this.props.LogIn;
    if (!email || !password) {
      badInput();
      return;
    }
    logIn(email, password);
  }

  render() {
    return (
      <LogInFrom
        logIn={this.checkLogInValues.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    LogInState: state.logIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogIn: bindActionCreators({ ...actions, ...errorActions }, dispatch)
  };
};

LogIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);

export default LogIn;
