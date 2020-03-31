import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from "../BurgerMenu";
import CollapseMenu from "../CollapseMenu";
import Links from '../Links';
const loroUrl = require('../../../../public/siteLogo.png');
import { NavBar, FlexContainer, NavLinks, BurgerWrapper } from './styles';
import { animation } from '../../animations/hof/animation';

import barAnimationStyles from '../../animations/styles/barAnimation';
import linkAnimationStyles from '../../animations/styles/linkAnimation';

const Navbar = ({ navbarState, handleNavbar }): JSX.Element => {

  return (
    <React.Fragment>
      <NavBar style={animation(barAnimationStyles)}>
        <FlexContainer>
          <Link to='/'>
            <img className='site-logo' src={loroUrl.default}></img>
          </Link>
          <NavLinks style={animation(linkAnimationStyles)}>
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
    </React.Fragment>
  )
}

export default Navbar;