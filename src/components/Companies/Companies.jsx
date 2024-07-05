import React from "react";
import "./Companies.css";
import Image from "next/image";
const Companies = () => {
  return (
    <div className="cmp-body">
      <div className="img-1-cmp">
        <Image src="./Logo-cmp1.svg" height={48} width={48} />
      </div>
      <div className="img-2-cmp">
        <Image src="./Logo-cmp2.svg" height={48} width={48} />
      </div>
      <div className="img-3-cmp">
        <Image src="./Logo-cmp3.svg" height={48} width={48} />
      </div>
      <div className="img-4-cmp">
        <Image src="./Logo-cmp4.svg" height={48} width={48} />
      </div>
      <div className="img-5-cmp">
        <Image src="./Logo-cmp5.svg" height={48} width={48} />
      </div>
      <div className="img-6-cmp">
        <Image src="./Logo-cmp6.svg" height={48} width={48} />
      </div>
      <div className="img-7-cmp">
        <Image src="./Logo-cmp7.svg" height={48} width={48} />
      </div>
    </div>
  );
};

export default Companies;
