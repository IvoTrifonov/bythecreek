import React from 'react';
import { animated } from 'react-spring';
import animationStyles from '../animations/styles/header';
import { animation } from '../animations/hof/animation';
import { MainNavigation } from './MainNavigation';

import './styles.scss';

export const Header = (): JSX.Element => {

  return (
    <animated.header className='site-header' style={animation(animationStyles)}>
      <MainNavigation></MainNavigation>
    </animated.header>
  )
}

