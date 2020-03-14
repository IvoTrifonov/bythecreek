import React from 'react';
import { Spring } from 'react-spring/renderprops';
import animationStyles from '../animations/styles/main';
import './styles.scss';

export const Main = () => {
  return <Spring {...animationStyles}>
    {props =>
      <main style={props}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae necessitatibus praesentium, rerum atque dicta? Sed earum veritatis eius sequi optio porro, odit deleniti praesentium?</p>
      </main>
    }
  </Spring>
}
