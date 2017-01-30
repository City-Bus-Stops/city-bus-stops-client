import React from 'react';
import { Dropdown, Image } from 'semantic-ui-react';
import faker from 'faker';

const UserSettings = ({ username, handleClick }) => (
  <Dropdown
    trigger={
      <span>
        <Image avatar src={faker.internet.avatar()} />

      </span>
    }
  >
    <Dropdown.Menu>
      <Dropdown.Item disabled>
        Signed in as <strong>{username}</strong>
      </Dropdown.Item>
      <Dropdown.Item
        icon="user"
        content="Your Profile"
      />
      <Dropdown.Item
        icon="help"
        content="Help"
      />
      <Dropdown.Divider />
      <Dropdown.Item
        icon="settings"
        content="Settings"
      />
      <Dropdown.Item
        icon="sign out"
        content="Sign Out"
        onClick={handleClick}
      />
    </Dropdown.Menu>
  </Dropdown>
);

export default UserSettings;
