import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingComponent from '../../components/Loading/Loading';

class Loading extends Component {
  render() {
    const { isLoading } = this.props.LoadingState;
    return (
      <LoadingComponent
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    LoadingState: state.loading
  };
};

Loading = connect(
  mapStateToProps,
)(Loading);

export default Loading;
