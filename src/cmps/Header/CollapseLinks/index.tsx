import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const CollaseLinks = ({ handleNavbar }): JSX.Element => {

  useEffect(() => {
    const handleNavLinks = (event) => {
      if (!event.target.classList.contains('navlinks')) {
        handleNavbar();
      }
    }

    window.addEventListener('click', handleNavLinks);
    return () => window.removeEventListener('click', handleNavLinks);
  }, []);

  return (
    <React.Fragment>
      <li>
        <NavLink onClick={handleNavbar} exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleNavbar} exact to="/newsfeed">
          News Feed
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleNavbar} exact to="/forum">
          Forum
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleNavbar} exact to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleNavbar} exact to="/signin">
          Sign In
        </NavLink>
      </li>
    </React.Fragment>
  )
}

export default CollaseLinks;