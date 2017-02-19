import React from 'react';
import { Menu } from 'semantic-ui-react';

import Auth from '../../src/utils/Auth';

import UserSettings from './UserSettings';

const MenuComponent = ({ username, handleItemClick }) => (
  <Menu size="huge" stackable style={{ margin: "0" }}>
    <Menu.Item
      header
      content="React App"
      onClick={() => {
        handleItemClick('/');
      }}
    />
    {
      Auth.isUserAuthenticated() ?
        <Menu.Menu position="right" className="ui stackable" style={{ border: "none" }}>
          <Menu.Item>
            <UserSettings
              username={username}
              handleItemClick={handleItemClick}
            />
          </Menu.Item>
        </Menu.Menu> :
        <Menu.Menu position="right" className="ui stackable" style={{ border: "none" }}>
          <Menu.Item
            content="Log in"
            onClick={() => {
              handleItemClick('/login');
            }}
          />
          <Menu.Item
            content="Sign Up"
            onClick={() => {
              handleItemClick('/signup');
            }}
          />
        </Menu.Menu>
    }
  </Menu>
);

export default MenuComponent;
