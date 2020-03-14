import React from 'react'; 
import animationStyles from '../animations/styles/footer';
import './styles.scss';
import { Spring } from 'react-spring/renderprops';

export const Footer = () => {
  return <Spring {...animationStyles}>
    {props => 
      <footer style={props}>
        
      </footer>}
  </Spring>
}
