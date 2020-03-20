import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import render from '../../helpers/render';
import './styles.scss';

export const Main = () : JSX.Element => {
  return <main className='site-main'>
    <Switch>
      <Route exact path='/' render={render(Home)}/>
    </Switch>
  </main>
}
