import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  console.log('fucking render');

  const handleCLick = (): void => {
    setShowMenu(!showMenu);
  }

  return (
    <div>
      <h3 onClick={handleCLick}>Menu</h3>

      {showMenu && <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/'>Forum</NavLink></li>
            <li><NavLink to='/'>Shop</NavLink></li>
          </ul>
        </nav>}
    </div>
  )
}
