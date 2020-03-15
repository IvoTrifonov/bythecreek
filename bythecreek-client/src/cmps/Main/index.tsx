import React from 'react';
import { animated } from 'react-spring';
import animationStyles from '../animations/styles/main';
import { animation } from '../animations/hof/animation';
import './styles.scss';

export const Main = () => {
  return <animated.main style={animation(animationStyles)}>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, commodi.</p>
  </animated.main>
}
