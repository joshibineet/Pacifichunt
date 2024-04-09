import React from "react";
import image22 from "../../assets/location1.svg";



const Companies_card = (props) => {
  return (
    <div className="company_jobs">
      <div className="job_content">
        <div className="job_top">
          <img src={props.companyLogo} alt="" className="high_job_logo" />
          <button className="available_jobs">{props.availablejobs} jobs available</button>
        </div>
        <div className="job_mid">
          <p className="high_job_institute">{props.companyName}</p>
          <div className="high_job_address">
            <img className="job_location_icon" src={image22} alt="" />
            <p className="high_address">{props.companyAddress}</p>
          </div>
          <div className="high_job_detail">
            <p className="infomation">Information Technology</p>
            <p className="tech">Fintech</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies_card;
