import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as errorActions from '../../actions/ErrorDialog';
import ErrorDialogComponent from '../../components/ErrorDialog/ErrorDialogComponent';

class ErrorDialog extends Component {
  render() {
    const { DialogFlag, ErrorMessages } = this.props.ErrorDialogState;
    const { closeDialog } = this.props.ErrorDialogActions;
    return (
      <div>
        <ErrorDialogComponent
          DialogFlag={DialogFlag}
          ErrorMessages={ErrorMessages}
          closeDialog={closeDialog}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ErrorDialogState: state.getError
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
