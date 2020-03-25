import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import render from '../../helpers/render';

export const Main = (): JSX.Element => {

  return <main className='site-main'>
    <Switch>
      <Route exact path='/' render={render(Home)} />
      <Route exact path='/signin' render={render(Login)} />
      <Route exact path='/signup' render={render(Register)} />
    </Switch>
  </main>
}
