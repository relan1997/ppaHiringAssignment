import React from "react";
import "./InfoPage2.css";
import Image from "next/image";
const InfoPage2 = () => {
  return (
    <div className="info-2-body">
      <div className="img-info-2">
        <Image src="./pana.svg" fill />
      </div>
      <div className="content-info-2">
        <div className="heading-info-2">
          <h1>How to design your site footer like we did</h1>
        </div>
        <div className="cap-info-2">
          <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
        </div>
        <div className="btn-info-2">
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default InfoPage2;
