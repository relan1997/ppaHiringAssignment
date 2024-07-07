'use client'
import React, { useState, useEffect } from 'react';
import './Hero.css';
import Image from 'next/image';

const Hero = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const targetNumber = 8;
    let currentNumber = 0;

    const increment = () => {
      if (currentNumber < targetNumber) {
        currentNumber++;
        setCounter(currentNumber);
      } else {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(increment, 50); // Adjust the interval speed as needed

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className='hero-body'>
      <div className='left-hero'>
        <div className='heading-hero'>
          Lessons and Insights <br /><span>from {counter} years</span>
        </div>
        <div className='caption-hero'>Where to grow your business as a photographer: site or social media?</div>
        <div>
          <button className='button-hero'>Register</button>
        </div>
      </div>
      <div className='right-hero'>
        <Image
          src='/Illustration.svg'
          fill
          alt='Illustration'
        />
      </div>
    </div>
  );
}

export default Hero;
