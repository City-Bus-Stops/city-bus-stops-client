import React from 'react';

import ErrorDialog from '../containers/ErrorDialog/ErrorDialog';
import AppMenu from '../containers/Menu/Menu';
import Loading from '../containers/Loading/Loading';

const Base = ({ ...props }) => (
<div>
    <AppMenu className="menu-container" />
    <div className="main-container">
      {props.children}
    </div>
    <ErrorDialog />
    <Loading />
  </div>
);

export default Base;
