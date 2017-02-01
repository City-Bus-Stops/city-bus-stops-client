import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as errorActions from '../../actions/ErrorDialog';
import ErrorDialogComponent from '../../components/ErrorDialog/ErrorDialogComponent';

class ErrorDialog extends Component {
  render() {
    const { DialogFlag, ErrorMessages, errorTitle } = this.props.ErrorDialogState;
    const { closeDialog } = this.props.ErrorDialogActions;
    return (
      <ErrorDialogComponent
        DialogFlag={DialogFlag}
        ErrorMessages={ErrorMessages}
        closeDialog={closeDialog}
        errorTitle={errorTitle}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ErrorDialogState: state.Errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ErrorDialogActions: bindActionCreators(errorActions, dispatch)
  };
};

ErrorDialog = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorDialog);

export default ErrorDialog;
