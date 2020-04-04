import styled from 'styled-components';
import { animated } from 'react-spring';

const SearchWrapper = styled(animated.div)`
  margin-left: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  span {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease-in;

    :hover {
      transform: scale(1.25);
    }
  }

  input {
    width: 0;
    visibility: hidden;
    width: 0;
    transition: all 0.25s ease-in;

    &.open {
      margin: 0 0.7em; 
      padding: 0.5em;
      width: 15rem;
      visibility: visible;

      @media (max-width: 460px) {
        width: 13rem;
      }

      @media (max-width: 430px) {
        width: 10rem;
      }

      @media (max-width: 380px) {
        width: 6.6rem;
      }
    }
  }

  
`;  

export default SearchWrapper;