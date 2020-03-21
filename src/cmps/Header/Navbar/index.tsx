import React from 'react'
import BurgerMenu from "../BurgerMenu";
import CollapseMenu from "../CollapseMenu";
import Links from '../Links';
import { NavBar, FlexContainer, NavLinks, BurgerWrapper } from './styles';
import { animation } from '../../animations/hof/animation';

import barAnimationStyles from '../../animations/styles/barAnimation';
import linkAnimationStyles from '../../animations/styles/linkAnimation';

const Navbar = ({ navbarState, handleNavbar }) : JSX.Element => {
  
  return (
    <React.Fragment>
      <NavBar style={animation(barAnimationStyles)}>
        <FlexContainer>
          <NavLinks style={animation(linkAnimationStyles)}>
            <Links/>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={navbarState}
              handleNavbar={handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={navbarState}
        handleNavbar={handleNavbar}
      />
    </React.Fragment>
  )
}

export default Navbar;