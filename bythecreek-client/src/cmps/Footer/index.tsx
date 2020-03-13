import React from 'react';
import Animation from '../animations/hoc/animation'; 
import animationStyles from '../animations/styles/footer';

export const Footer = () => {
  return (
    <Animation styleProps={animationStyles}>
      <footer>Footer</footer>
    </Animation>
  )
}
