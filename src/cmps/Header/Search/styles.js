import styled from 'styled-components';
import { animated } from 'react-spring';

const SearchWrapper = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  & span {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease-in;

    &:hover {
      transform: scale(1.25);
    }
  }

  & input {
    margin-right: 0.3rem;
    width: 0;
    border: 1px solid gray;
    border-radius: 0.3em;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease;

    &.open {
      padding: 0.7em;
      opacity: 1;
      visibility: visible;
      width: 13rem;
    }
  }
  
`;  

export default SearchWrapper;