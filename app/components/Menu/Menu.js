import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Menu } from 'semantic-ui-react';

import Auth from '../../src/utils/Auth';

import UserSettings from './UserSettings';

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: Auth.getUserName(),
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(path) {
    browserHistory.push(path);
    this.setState({ activeItem: path });
  }

  render() {
    const { activeItem, username } = this.state;

    return (
      <Menu pointing size="massive">
        <Menu.Item
          active={activeItem === '/'}
          content="React App"
          onClick={() => {
            this.handleItemClick('/');
          }}
        />
        {
          Auth.isUserAuthenticated() ?
            <Menu.Menu position="right">
              <Menu.Item>
                <UserSettings
                  username={username}
                  handleClick={() => {
                    this.handleItemClick('/logout');
                  }}
                />
              </Menu.Item>
            </Menu.Menu> :
            <Menu.Menu position="right">
              <Menu.Item
                active={activeItem === '/login'}
                content="Log in"
                onClick={() => {
                  this.handleItemClick('/login');
                }}
              />
              <Menu.Item
                active={activeItem === '/signup'}
                content="Sign Up"
                onClick={() => {
                  this.handleItemClick('/signup');
                }}
              />
            </Menu.Menu>
        }
      </Menu>
    );
  }
}

export default AppMenu;
