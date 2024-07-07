'use client'
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Image from 'next/image';

const Navbar = () => {
  const [burgerFunc, setBurgerFunc] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 770) {
        setBurgerFunc(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className='burger-btn-navbar'>
          <button onClick={() => setBurgerFunc(!burgerFunc)}>
            <Image
            alt='burger btn'
            src='./burger.svg'
            height={24}
            width={24}
            />
          </button>
        </div>
      <div className={` ${burgerFunc ? 'navbar-body-brgr' : 'navbar-body'}`}>
        
        <div className={` ${burgerFunc ? 'logo-navbar-brgr' : 'logo-navbar'} `}>
          <Image
            alt='logo'
            src='/Icon-ppaHiring.svg'
            width={35}
            height={24}
          />
          <span>Nexcent</span>
        </div>
        <div className={` ${burgerFunc ? 'main-navbar-brgr' : 'main-navbar'} `}>
          <div>Home</div>
          <div>Service</div>
          <div>Feature</div>
          <div>Product</div>
          <div>Testimonial</div>
          <div>FAQ</div>
        </div>
        <div className={` ${burgerFunc ? 'btns-navbar-brgr' : 'btns-navbar'}`}>
          <button className={` ${burgerFunc ? 'login-navbar-brgr' : 'login-navbar'}`}>Login</button>
          <button className={` ${burgerFunc ? 'sign-up-navbar-brgr' : 'sign-up-navbar'}`}>Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
