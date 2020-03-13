import React from 'react';
import Animation from '../animations/hoc/animation';
import './styles.scss';
import animationStyles from '../animations/styles/header';

export const Header = (): JSX.Element => {

  return (
    <Animation styleProps={animationStyles} >
      <header>
        <h1>Hello</h1>
      </header>
    </Animation>
  )
}

