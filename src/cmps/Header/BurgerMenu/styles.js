import styled from 'styled-components';

const Wrapper = styled.div` 
  position: relative;
  padding-top: .4em;
  cursor: pointer;
  display: block;

  & span {
    background: #352a29;
    text-align: center;
    display: block;
    position: relative;
    width: 3.2rem;
    height: .4rem;
    margin-bottom: .6rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
      opacity: 0;
    }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }

`;

export {
  Wrapper
}