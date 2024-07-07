'use client';

import React, { useState, useEffect, useRef } from "react";
import "./DataPage.css";
import Image from "next/image";

const DataPage = () => {
  const [members, setMembers] = useState(0);
  const [clubs, setClubs] = useState(0);
  const [bookings, setBookings] = useState(0);
  const [payments, setPayments] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const animateValue = (setValue, targetValue, duration) => {
      let start = 0;
      const increment = targetValue / (duration / 10);
      const interval = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          setValue(targetValue);
          clearInterval(interval);
        } else {
          setValue(Math.floor(start));
        }
      }, 10);
    };

    if (isVisible) {
      animateValue(setMembers, 2245341, 2000);
      animateValue(setClubs, 46328, 2000);
      animateValue(setBookings, 828867, 2000);
      animateValue(setPayments, 1926436, 2000);
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="data-pg-body" ref={sectionRef}>
      <div className="content-data">
        <h1>Helping a local<br/><span>business reinvent itself</span></h1>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className="numbers-section-data">
        <div className="num-grp-data">
          <div className="num-data">
            <Image src="./data-1.svg" width={48} height={48} alt="data-1" />
            <div className="content-div">
              <span className="numbers-data">{members.toLocaleString()}</span> <br />
              <span className="numbers-cap-data">Members</span>
            </div>
          </div>
          <div className="num-data">
            <Image src="/data-2.svg" width={48} height={48} alt="data-2" style={{ color: "#4CAF4F" }} />
            <div className="content-div">
              <span className="numbers-data">{clubs.toLocaleString()}</span> <br />
              <span className="numbers-cap-data">Clubs</span>
            </div>
          </div>
        </div>
        <div className="num-grp-data">
          <div className="num-data">
            <Image src="./data-3.svg" width={48} height={48} alt="data-3" />
            <div className="content-div">
              <span className="numbers-data">{bookings.toLocaleString()}</span> <br />
              <span className="numbers-cap-data">Bookings</span>
            </div>
          </div>
          <div className="num-data">
            <Image src="./data-4.svg" width={48} height={48} alt="data-4" />
            <div className="content-div">
              <span className="numbers-data">{payments.toLocaleString()}</span> <br />
              <span className="numbers-cap-data">Payments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPage;
