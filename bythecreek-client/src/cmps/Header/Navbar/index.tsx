import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSpring, config } from "react-spring";
import { NavBar, FlexContainer, NavLinks, BurgerWrapper } from './styles';
import BurgerMenu from "../BurgerMenu";
import CollapseMenu from "../CollapseMenu";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <React.Fragment>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <NavLinks style={linkAnimation}>
            <NavLink activeClassName='active' exact to='/'>Home</NavLink>
            <NavLink activeClassName='active' to="/newsfeed">News Feed</NavLink>
            <NavLink activeClassName='active' to="/forum">Forum</NavLink>
            <NavLink activeClassName='active' to="/products">Products</NavLink>
            <NavLink activeClassName='active' to="/login">Login</NavLink>
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