import React from "react";
import "./Footer.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="footer-body">
      <div className="logo-footer">
        <div className="name-footer">
          <Image src="/Icon.svg" height={30} width={43} />{" "}
          <Image src="./Nexcent.svg" width={139} height={26} />
        </div>
        <div className="cpywrt-footer">
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
        </div>
        <div className="socials-footer">
          <div className="socio-logo">
            <Image src="./BG.svg" width={17} height={17} />
          </div>
          <div className="socio-logo">
            <Image src="./bskt.svg" width={17} height={17} />
          </div>
          <div className="socio-logo">
            <Image src="./x.svg" width={17} height={17} />
          </div>
          <div className="socio-logo">
            <Image src="./yt.svg" width={17} height={17} />
          </div>
        </div>
      </div>
      <div className="support-footer">
        <div className="cmpy-footer">
            <h1>Company</h1>
            <ul>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
            </ul>
        </div>
        <div className="supp-footer">
            <h1>Support</h1>
            <ul>
                <li>Help Center</li>
                <li>Terms Of Service</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Status</li>
            </ul>
        </div>
      </div>
      <div className="email-footer">
        <h1>Stay up to date</h1>
        <input type="text" placeholder="Email Us"/>
      </div>
    </div>
  );
};

export default Footer;
