import styled from 'styled-components';

const ArrowStyles = styled.div `
  display: flex;
  position: absolute;
  top: 50%;
  ${props => props.direction === 'right' ? `right: 25px` : `left: 25px`};
  filter: drop-shadow(0 0 0.2em black);
  height: 3.2rem;
  width: 3.2rem;
  user-select: none;
  justify-content: center;
  background: #e6e6e6;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  span {
    font-size: 2em;
    color: #5d5d5d;
    transform: translateX(${props => props.direction === 'left' ? '-2' : '2'}px);
    &:focus {
      outline: 0;
    }
  }
`;

export default ArrowStyles;