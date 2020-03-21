import styled from 'styled-components';

const SlideStyles = styled.div`
  width: ${props => props.width}px;
  background-image: url('${props => props.content}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default SlideStyles;