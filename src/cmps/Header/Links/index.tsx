import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = (): JSX.Element => {
 
  return (
    <React.Fragment>
      <li>
        <NavLink activeClassName='active' exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' exact to="/newsfeed">
          News Feed
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' exact to="/forum">
          Forum
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' exact to="/signin">
          Sign In
        </NavLink>
      </li>
    </React.Fragment>
  )
}

export default Links;