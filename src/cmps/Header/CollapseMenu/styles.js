import styled from 'styled-components';
import { animated } from 'react-spring';

const CollapseWrapper = styled(animated.div)
`
  background: #404a4d;
  position: fixed;
  top: 5.7em;
  left: 0;
  z-index: 1000;
  right: 0;
`;

const NavLinks = styled.ul `
  list-style-type: none;
  padding: 1em 4em;

  & li {
    text-align: center;
    border-bottom: 2px solid lightgray;
  }

  & a {
    transition: color 300ms linear 0s;
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
    }
  }
`;

export {
  CollapseWrapper,
  NavLinks
}