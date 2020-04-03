import styled from 'styled-components';
import { animated } from 'react-spring';

const NavBar = styled(animated.nav)
`   
  background-color: #fae7d5;
  letter-spacing: 0.7px;
  box-shadow: 1px 1px 2px 2px rgb(170, 169, 169);
  font-size: 1.1rem;
`;

const FlexContainer = styled(animated.div)`
  display: flex;
  padding: 0.2em 1rem;
  height: 3.5rem;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled(animated.ul)
`
  margin: 0 0.7rem;
  display: flex;
  align-items: center;
  
  & .active {
    background-size: 100% 2px, auto;
    text-shadow: 0px 3px 13px rgba(150, 150, 150, 1);
  }

  & li a {
    padding: 0.5rem 0.1rem;
    text-transform: uppercase;
    font-weight: 600;
    white-space: nowrap;
    margin: 0 0.8rem;
    cursor: pointer;
    background-image: linear-gradient(#000000, #000000);
    background-size: 0 2px, auto;
    background-repeat: no-repeat;
    background-position: center bottom;
    transition: all .2s ease-out;

    &:hover {
      background-size: 100% 2px, auto;
      text-shadow: 0px 5px 13px rgba(150, 150, 150, 1);
    }

    @media (max-width: 750px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 750px) {
    display: none;
  }
`;

export {
  NavBar,
  FlexContainer,
  NavLinks,
  BurgerWrapper
}