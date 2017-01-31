import Base from './components/Base';
import SearchRoute from './containers/SearchRoute/SearchRoute';
import Login from './containers/LogIn/LogIn';
import SignUp from './containers/SignUp/SignUp';
import NotFoundPage from './components/NotFoundPage';
import PersonalPage from './containers/PersonalPage/PersonalPage';

import { logOut } from './actions/LogIn';

const getRoutes = (store) => {
  const routes = {
    component: Base,
    childRoutes: [
      {
        path: '/',
        component: SearchRoute
      },
      {
        path: 'settings',
        component: PersonalPage
      },
      {
        path: 'login',
        component: Login
      },
      {
        path: 'signup',
        component: SignUp
      },
      {
        path: '/logout',
        onEnter: (nextState, replace) => {
          store.dispatch(logOut());
          replace('/');
        }
      },
      {
        path: '*',
        component: NotFoundPage
      }
    ]
  };
  return routes;
};
export default getRoutes;
