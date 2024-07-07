import React from "react";
import "./DataPage.css";
import Image from "next/image";
const DataPage = () => {
  return (
    <div className="data-pg-body">
      <div className="content-data">
        <h1>Helping a local<br/> <span>business reinvent itself</span></h1>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className="numbers-section-data">
        <div className="num-grp-data">
          <div className="num-data">
            <Image src="./data-1.svg" width={48} height={48} />
            <div className="content-div">
              <span className="numbers-data">2,245,341</span> <br />{" "}
              <span className="numbers-cap-data">Members</span>{" "}
            </div>
          </div>
          <div className="num-data">
            <Image src="/data-2.svg" width={48} height={48} style={{color:"#4CAF4F"}} />
            <div className="content-div">
              <span className="numbers-data">46,328</span> <br />{" "}
              <span className="numbers-cap-data">Clubs</span>{" "}
            </div>
          </div>
        </div>
        <div className="num-grp-data">
          <div className="num-data">
            <Image src="./data-3.svg" width={48} height={48} />
            <div className="content-div">
              <span className="numbers-data">828,867</span> <br />{" "}
              <span className="numbers-cap-data">Bookings</span>{" "}
            </div>
          </div>
          <div className="num-data">
            <Image src="./data-4.svg" width={48} height={48} />
            <div className="content-div">
              <span className="numbers-data">1,926,436</span> <br />{" "}
              <span className="numbers-cap-data">Payments</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPage;
