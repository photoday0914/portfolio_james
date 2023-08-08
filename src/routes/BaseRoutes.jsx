import { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
//modals
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import('../scenes/About/About'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));
const Contact = lazy(() => import('../scenes/Contact/Contact'));

export const routes = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  PROJECT: '/project/:id',
  CONTACT: '/contact',
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Switch location={background || location}>
        <Route path={routes.HOME} exact component={Home} />
        <Route path={routes.ABOUT} component={About} />
        <Route path={routes.PROJECTS} component={Projects} />
        <Route path={routes.PROJECT} component={ModalProjectCard} />
        <Route path={routes.CONTACT} component={Contact} />
      </Switch>

      {background && (
        <Route path={routes.PROJECT} component={ModalProjectCard} />
      )}
    </>
  );
};

export default BaseRoutes;
