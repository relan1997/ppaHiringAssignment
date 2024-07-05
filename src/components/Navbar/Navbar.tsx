import React from 'react';
import './Navbar.css';
import IconPpaHiring from '../../../public/Icon-ppaHiring.svg'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='navbar-body'>
      <div className='logo-navbar'>
        <Image
        alt='logo'
        src='/Icon-ppaHiring.svg'
        width={35}
        height={24}
        />
        <span>Nexcent</span>
      </div>
      <div className='main-navbar'>
      <div>Home</div>
      <div>Service</div>
      <div>Feature</div>
      <div>Product</div>
      <div>Testimonial</div>
      <div>FAQ</div>
      </div>
      <div className='btns-navbar'>
        <button className='login-navbar'>Login</button>
        <button className='sign-up-navbar'>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
