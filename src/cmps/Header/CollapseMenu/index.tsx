import React from 'react';
import { NavLink } from 'react-router-dom';
import { CollapseWrapper, NavLinks } from './styles';
import { useSpring } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li><NavLink exact to="/home" onClick={props.handleNavbar}>Home</NavLink></li>
          <li><a href="/" onClick={props.handleNavbar}>News Feed</a></li>
          <li><a href="/" onClick={props.handleNavbar}>Forum</a></li>
          <li><a href="/" onClick={props.handleNavbar}>Products</a></li>
          <li><a href="/" onClick={props.handleNavbar}>Login</a></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;



