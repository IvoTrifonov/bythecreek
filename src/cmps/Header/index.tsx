import React, { useState } from 'react';
import Navbar from './Navbar';

import './styles.scss';

export const Header = (): JSX.Element => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <header>
      <Navbar
        navbarState={navbarOpen}
        handleNavbar={handleNavbar}
      />
    </header>
  )
}

