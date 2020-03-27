import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = (props) : JSX.Element => {
  return (
    <React.Fragment>
      <li>
        <NavLink onClick={props.handleNavbar} activeClassName='active' exact to="/newsfeed">
          News Feed
        </NavLink>
      </li>
      <li>
        <NavLink onClick={props.handleNavbar} activeClassName='active' exact to="/forum">
          Forum
        </NavLink>
      </li>
      <li>
        <NavLink onClick={props.handleNavbar} activeClassName='active' exact to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink onClick={props.handleNavbar} activeClassName='active' exact to="/signin">
          Sign In
        </NavLink>
      </li>
    </React.Fragment>
  )
}

export default Links;