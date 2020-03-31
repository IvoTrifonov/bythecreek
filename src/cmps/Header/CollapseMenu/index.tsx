import React from 'react';
import CollapseLinks from '../CollapseLinks';
import { CollapseWrapper, NavLinks } from './styles';
import { useSpring } from 'react-spring';

const CollapseMenu = ({ navbarState, handleNavbar }): JSX.Element => {
  const { open } = useSpring({ open: navbarState ? 0 : 1 });

  return navbarState && (
    <CollapseWrapper style={{
      transform: open.interpolate({
        range: [0, 0.2, 0.3, 1],
        output: [0, -20, 0, -200],
      }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
    }}
    >
      <NavLinks className='navlinks'>
        <CollapseLinks handleNavbar={handleNavbar} />
      </NavLinks>
    </CollapseWrapper>
  );
  
};

export default CollapseMenu;



