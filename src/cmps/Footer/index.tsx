import React from 'react';
import Logo from '../Header/Logo';
import { NavLinks } from '../Header/Navbar/styles';
import Links from '../Header/Links';
import './styles.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className='logo-links-wrapper'>
        <Logo />
        <ul>
          <Links />
        </ul>
      </div>
      <p>© 2020 by the creek Corp.</p>
    </footer>
  );
}
