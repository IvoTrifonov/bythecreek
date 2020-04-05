import React, { useEffect, useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import render from '../../helpers/render';
import './styles.scss';

export const Main = (): JSX.Element => {
  const [isLinkShowed, setIsLinkShowed] = useState(false);

  useEffect(() => {
    const scrollhandler = () => {
      window.pageYOffset > 20 ?
        setIsLinkShowed(true) :
        setIsLinkShowed(false);
    };

    window.addEventListener('scroll', scrollhandler);
    return () => window.removeEventListener('scroll', scrollhandler);
  }, [window.pageYOffset]);


  return <main className='site-main'>
    <Switch>
      <Route exact path='/' render={render(Home)} />
      <Route exact path='/signin' render={render(Login)} />
      <Route exact path='/signup' render={render(Register)} />
    </Switch>

    {isLinkShowed &&
      <AnchorLink href='#header'>
      </AnchorLink>}
  </main>
}
