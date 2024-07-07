import React from "react";
import "./Marketting.css";
import Image from "next/image";

const Marketting = () => {
  return (
    <div className="mrkt-body">
      <div className="text-mrkt">
        <h1>Caring is the new marketing</h1>
        <p>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read about
          how our community are increasing their membership income and lot&apos;s
          more.​
        </p>
      </div>
      <div className="main-mrkt">
        <div className="img-mrkt">
          <Image src="./mrkt-img1.svg" fill style={{ borderRadius: "8px" }} />
          <div className="ovr-the-img-mrkt">
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            <button>Read more</button>
          </div>
        </div>
        <div className="img-mrkt">
          <Image src="./mrkt-img-2.svg" fill style={{ borderRadius: "8px" }} />
          <div className="ovr-the-img-mrkt">
            <p>
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <button>Read more</button>
          </div>
        </div>
        <div className="img-mrkt">
          <Image src="./mrkt-img-3.svg" fill style={{ borderRadius: "8px" }} />
          <div className="ovr-the-img-mrkt">
            <p>Revamping the Membership Model with Triathlon Australia</p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketting;
