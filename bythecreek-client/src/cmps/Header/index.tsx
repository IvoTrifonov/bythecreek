import React from 'react';
import { Spring } from 'react-spring/renderprops';
import animationStyles from '../animations/styles/header';
import './styles.scss';

export const Header = (): JSX.Element => {
  return <Spring {...animationStyles}>
    {props =>
      <header style={props}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae reiciendis totam enim autem ipsa libero.</p>
      </header>}
  </Spring>
}

