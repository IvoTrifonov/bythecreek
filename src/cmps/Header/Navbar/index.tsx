import React, { Fragment } from 'react';
import Logo from '../Logo';
import BurgerMenu from "../BurgerMenu";
import CollapseMenu from "../CollapseMenu";
import Search from '../Search';
import Links from '../Links';
import { NavBar, FlexContainer, NavLinks, BurgerWrapper } from './styles';
import { animation } from '../../animations/hof/animation';


import barAnimationStyles from '../../animations/styles/barAnimation';
import headerElementsAnimation from '../../animations/styles/headerElementsAnimation';

const Navbar = ({ navbarState, handleNavbar }): JSX.Element => {

  return (
    <Fragment>
      <NavBar style={animation(barAnimationStyles)}>
        <FlexContainer style={animation(headerElementsAnimation)}>
          <div style={{
            'display': 'flex',
          }}>
          <Logo />
          <Search />
          </div>
          <NavLinks>
            <Links />
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
    </Fragment>
  )
}

export default Navbar;