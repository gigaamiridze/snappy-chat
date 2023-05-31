import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Root, Chat, Login, Register, SetAvatar } from '../pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' Component={Root}>
      <Route index Component={Chat} />
      <Route path='/login' Component={Login} />
      <Route path='/register' Component={Register} />
      <Route path='/set-avatar' Component={SetAvatar} />
    </Route>
  )
);