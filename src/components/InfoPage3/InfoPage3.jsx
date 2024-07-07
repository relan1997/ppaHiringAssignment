import React from "react";
import "./InfoPage3.css";
import Image from "next/image";
const InfoPage3 = () => {
  return (
    <div className="info-3-body">
      <div className="img-info-3">
        <Image
          src="./Info3-main.svg"
          fill
          style={{ borderRadius: "8px" }}
        />
      </div>
      <div className="content-info-3">
        <div className="para-info-3">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
        </div>
        <div className="name-info-3">
            <h1>Tim Smith</h1>
            <p>British Dragon Boat Racing Association</p>
        </div>
        <div className="logo-info-3">
          <div className="logo-1-info-3">
            <Image
            src='./Info3-icon-1.svg'
            height={44}
            width={44}
            />
          </div>
          <div className="logo-2-info-3">
          <Image
            src='./Info3-icon-2.svg'
            height={44}
            width={44}
            />
          </div>
          <div className="logo-3-info-3">
          <Image
            src='./Info3-icon-3.svg'
            height={44}
            width={44}
            />
          </div>
          <div className="logo-4-info-3">
          <Image
            src='./Info3-icon-4.svg'
            height={44}
            width={44}
            />
          </div>
          <div className="logo-5-info-3">
          <Image
            src='./Info3-icon-5.svg'
            height={44}
            width={44}
            />
          </div>
          <div className="logo-6-info-3">
          <Image
            src='./Info3-icon-6.svg'
            height={44}
            width={44}
            />
          </div>
          <div className="logo-text-info-3">
            <span>Meet all Customers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage3;
