import React from 'react';
import './navbar.css';

function NavBar() {
  return (
    <div className='container-navbar'>
      <div>
        <label className='title-navbar'>NACHOL</label>
      </div>
      <div className='nav-menu'>
        <label className='li-menu active'>Home</label>
        <label className='li-menu'>About</label>
        <label className='li-menu'>Contact</label>
      </div>
    </div>
  )
}

export default NavBar
