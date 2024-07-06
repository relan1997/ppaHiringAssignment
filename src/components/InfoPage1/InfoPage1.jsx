import React from "react";
import "./InfoPage1.css";
import Image from "next/image";
const InfoPage1 = () => {
  return (
    <div className="info-1-body">
      <div className="img-info">
        <Image src="./rafiki.svg" width={442} height={329} />
      </div>
      <div className="content-info">
        <div className="heading-info">
          <h1>The unseen of spending three years at Pixelgrade</h1>
        </div>
        <div className="cap-info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.</p>
        </div>
        <div className="btn-info">
          <button className="lrn-btn-info">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default InfoPage1;
