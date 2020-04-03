import styled from 'styled-components';
const direction = Math.round(Math.random()); 

const ContentWrapper = styled.div`
@keyframes slideAnimation {
  0% {
    opacity: 0;
    transform: translateX(${direction && '-'}100%);
  }
  
  60% {
    transform: translateX(${!direction && '-'}35px);
  }
  
  80% {
    transform: translateX(${direction && '-'}15px);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

& {
  animation: 650ms ease-in-out 0ms 1 slideAnimation;
  box-shadow: 1px 1px 3px 3px rgb(170, 169, 169);
  background-color: #DADADA;
  padding: 0.8em;
} 
`;

export default ContentWrapper;