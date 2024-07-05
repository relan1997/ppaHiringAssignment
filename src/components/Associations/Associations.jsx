import React from "react";
import "./Associations.css";
import Image from "next/image";
const Associations = () => {
  return (
    <div className="asso-body">
      <div className="asso-1">
        <div className="img-asso ">
          <Image src="./asso-1.svg" height={65} width={56} />
        </div>
        <div className="text-asso ">
          <h1>Membership<br/> Organisations</h1>
        </div>
        <div className="cap-asso ">
          Our membership management software provides full automation of
          membership renewals and payments
        </div>
      </div>
      <div className="asso-2">
        <div className="img-asso ">
          <Image src="./asso-2.svg" height={65} width={56} />
        </div>
        <div className="text-asso ">
          <h1>National<br/> Associations</h1>
        </div>
        <div className="cap-asso ">
          Our membership management software provides full automation of
          membership renewals and payments
        </div>
      </div>
      <div className="asso-3">
        <div className="img-asso ">
          <Image src="./asso-3.svg" height={65} width={56} />
        </div>
        <div className="text-asso ">
          <h1>Clubs And<br/> Groups</h1>
        </div>
        <div className="cap-asso ">
          Our membership management software provides full automation of
          membership renewals and payments
        </div>
      </div>
    </div>
  );
};

export default Associations;
