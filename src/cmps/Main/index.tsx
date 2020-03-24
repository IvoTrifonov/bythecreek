import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import render from '../../helpers/render';
import '../../commonStyles/content-wrapper.scss';

export const Main = () : JSX.Element => {
  
  return <main className='site-main'>
    <Switch>
      <Route exact path='/' render={render(Home)}/>
      <Route exact path='/login' render={render(Login)}/>
    </Switch>
  </main>
}
