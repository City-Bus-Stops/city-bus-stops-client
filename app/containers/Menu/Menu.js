import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import MenuComponent from '../../components/Menu/Menu';

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(path) {
    browserHistory.push(path);
  }

  render() {
    const { username } = this.props.MenuState;

    return (
      <MenuComponent
        username={username}
        handleItemClick={(path) => {
          this.handleItemClick(path);
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    MenuState: state.logIn
  };
};

AppMenu = connect(
  mapStateToProps
)(AppMenu);

export default AppMenu;
