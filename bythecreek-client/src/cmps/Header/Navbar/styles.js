import styled from 'styled-components';
import { animated } from 'react-spring';

const NavBar = styled(animated.nav)
`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  letter-spacing: 1.5px;
  box-shadow: 1px 1px 1px 4px rgb(170, 169, 169);
  background-image: linear-gradient(to bottom, #008983, #007b76, #006d69, #00605c, #005350);
  font-size: 1.4rem;
`;

const FlexContainer = styled.div `
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)
`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  
  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div `
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

export {
  NavBar,
  FlexContainer,
  NavLinks,
  BurgerWrapper
}