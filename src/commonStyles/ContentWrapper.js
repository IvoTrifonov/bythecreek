import styled from 'styled-components';

const ContentWrapper = styled.div`
@keyframes slideAnimation {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  
  60% {
    transform: translateX(35px);
  }
  
  80% {
    transform: translateX(-15px);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

& {
  animation: 650ms ease-in-out 0ms 1 slideAnimation;
  padding: 1em 0;
} 
`;

export default ContentWrapper;