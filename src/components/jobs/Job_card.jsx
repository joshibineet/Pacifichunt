import React from "react";
import image18 from "../../assets/company3.svg";
import image19 from "../../assets/bookmark1.svg";
import image21 from "../../assets/clock.svg";
import image22 from "../../assets/location1.svg";


const Job_card = (props) => {
  return (
    <>
      <div className="job_card_container">
      <div className="job_content">
        <div className="job_top">
          <img src={props.logo} alt="" className="job_logo" />
          <button className="apply_now">Apply Now</button>
        </div>
        <div className="job_mid">
          <p className="job_institute">{props.jobname}</p>
          <div className="job_location">
            <div className="job_address">
              <img className="job_location_icon" src={image22} alt="" />
              <p className="address">{props.address}</p>
            </div>
            <div className="job_expires">
              <img src={image21} alt="" className="job_expires_icon" />
              <p className="expiry_days">Expires in 25 Days</p>
            </div>
          </div>
          <div className="job_detail">
            <div className="job_detail_top">
              <p>{props.type}</p>
              <ul>
                <li>{props.level}</li>
                <li>{props.types}</li>
              </ul>
            </div>
            <div className="job_detail_down">
              <p>Salary:{props.salary}</p>
            </div>
          </div>
        </div>
        <div className="job_bottom">
          <hr />
          <div className="company_name">
            <p>{props.compName}</p>
            <img src={image19} alt="" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Job_card;
