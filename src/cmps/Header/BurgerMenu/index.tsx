import React from 'react';
import { Wrapper } from './styles';

const Burgermenu = ({ navbarState, handleNavbar }) : JSX.Element => {
  return (
    <Wrapper onClick={handleNavbar}>
      <div className={ navbarState ? 'open' : '' }>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
}

export default Burgermenu;



