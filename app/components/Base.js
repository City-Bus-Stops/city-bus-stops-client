import React from 'react';

import ErrorDialog from '../containers/ErrorDialog/ErrorDialog';
import AppMenu from './Menu/Menu';
import Loading from '../containers/Loading/Loading';

const Base = ({ ...props }) => (
  <div>
    <AppMenu />
    <div>
      <div className="uk-container">
        {props.children}
      </div>
      <ErrorDialog />
      <Loading />
    </div>
  </div>
);

export default Base;
