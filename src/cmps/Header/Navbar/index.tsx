import React from 'react'
import { NavLink } from 'react-router-dom';
import { NavBar, FlexContainer, NavLinks, BurgerWrapper } from './styles';
import BurgerMenu from "../BurgerMenu";
import CollapseMenu from "../CollapseMenu";
import { animation } from '../../animations/hof/animation';
import barAnimationStyles from '../../animations/styles/barAnimation';
import linkAnimationStyles from '../../animations/styles/linkAnimation';

const Navbar = (props) => {
  
  return (
    <React.Fragment>
      <NavBar style={animation(barAnimationStyles)}>
        <FlexContainer>
          <NavLinks style={animation(linkAnimationStyles)}>
            <NavLink activeClassName='active' exact to='/'>Home</NavLink>
            <NavLink activeClassName='active' to="/newsfeed">News Feed</NavLink>
            <NavLink activeClassName='active' to="/forum">Forum</NavLink>
            <NavLink activeClassName='active' to="/products">Products</NavLink>
            <NavLink activeClassName='active' to="/login">Login</NavLink>
            {/* <span>
              <AiOutlineSearch></AiOutlineSearch>
            </span> */}
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </React.Fragment>
  )
}

export default Navbar;