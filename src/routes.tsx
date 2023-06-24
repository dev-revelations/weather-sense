
import HomePage from './pages/home';


import NotFoundPage from './pages/404';
import SplashScreen from './pages/splash';

var routes = [
  {
    path: '/',
    component: SplashScreen,
  },
  {
    path: '/weather',
    component: HomePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
