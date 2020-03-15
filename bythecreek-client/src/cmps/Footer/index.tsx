import React from 'react'; 
import animationStyles from '../animations/styles/footer';
import './styles.scss';
import { animated } from 'react-spring';
import { animation } from '../animations/hof/animation';

export const Footer = () => {
  return <animated.footer style={animation(animationStyles)}>

  </animated.footer>
}
