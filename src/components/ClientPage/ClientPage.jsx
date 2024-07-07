'use client';

import React, { useState, useEffect } from 'react';
import './ClientPage.css';

const ClientPage = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const targetNumber = 500;
    let currentNumber = 0;

    const increment = () => {
      if (currentNumber < targetNumber) {
        currentNumber++;
        setCounter(currentNumber);
      } else {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(increment, 1); // Adjust the interval speed as needed

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className='client-body'>
      <div className='text-client'>
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune {counter}+ clients</p>
      </div>
      <div></div>
    </div>
  );
}

export default ClientPage;
