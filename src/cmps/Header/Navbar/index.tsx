import React, { Fragment } from 'react';
import Logo from '../Logo';
import BurgerMenu from "../BurgerMenu";
import CollapseMenu from "../CollapseMenu";
import Search from '../Search';
import Links from '../Links';
import { NavBar, FlexContainer, NavLinks, BurgerWrapper } from './styles';

const Navbar = ({ navbarState, handleNavbar }): JSX.Element => {

  return (
    <Fragment>
      <NavBar>
        <Logo />
        <FlexContainer>
          <div style={{
            'display': 'flex',
          }}>
          </div>
          <NavLinks>
            <Links />
          </NavLinks>
          <Search />
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