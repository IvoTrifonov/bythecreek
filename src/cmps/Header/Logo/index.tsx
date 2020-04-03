import React from 'react'
import styled from 'styled-components';
import logoUrl from '../../../../public/site-logo.png';
import { Link } from 'react-router-dom';

const LogoStyle = styled.div`
  background: url(${logoUrl}) no-repeat center;
  background-size: contain;
  height: 3.6rem;
  width: 15rem;

  @media (max-width: 850px) {
    width: 11rem;
    height: 3.1rem;
  }
`;

const Logo = () => {
  return (
    <Link to='/'>
      <LogoStyle />
    </Link>
  )
}

export default Logo;
