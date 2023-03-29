import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
const Header = () => {
  return (
    <>
   <div className="navbar bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90%">
  <div className="flex-1">
  <img className='w-20' src={logo}alt="logo" />
  </div>

    <ul className="menu menu-horizontal text-white lg:text-2xl font-semibold px-1">
      <li className=' hover:text-orange-300'><a href="/shop">Shop</a></li>
      <li className=' hover:text-orange-300' tabIndex={0}>
      <a href="/order">Order</a>
      </li>
      <li className=' hover:text-orange-300'><a href="/inventory">Inventory</a></li>
      <li className=' hover:text-orange-300'><a href="/login">Login</a></li>
    </ul>

</div>
    </>
  );
};

export default Header;