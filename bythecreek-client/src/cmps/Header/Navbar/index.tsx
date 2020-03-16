import React from 'react'
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
          {/* <Brand /> */}
          <NavLinks style={linkAnimation}>
            <a href="/">Home</a>
            <a href="/">News</a>
            <a href="/">Forum</a>
            <a href="/">Products</a>
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