import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Root, Chat, Login, Register, SetAvatar } from '../pages';
import { PagesRoutes } from '../constants';

const { ROOT, LOGIN, REGISTER, SET_AVATAR } = PagesRoutes;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROOT} Component={Root}>
      <Route index Component={Chat} />
      <Route path={LOGIN} Component={Login} />
      <Route path={REGISTER} Component={Register} />
      <Route path={SET_AVATAR} Component={SetAvatar} />
    </Route>
  )
);