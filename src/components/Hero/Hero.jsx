import React from 'react'
import './Hero.css'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='hero-body'>
        <div className='left-hero'>
            <div className='heading-hero'>
                Lessons and Insights <br/><span>from 8 years</span>
            </div>
            <div className='caption-hero'>Where to grow your business as a photographer:site or social media?</div>
            <div>
                <button className='button-hero'>Register</button>
            </div>
        </div>
        <div className='right-hero'>
            <Image
            src='/Illustration.svg'
            height={407}
            width={391}
            />
        </div>
    </div>
  )
}

export default Hero