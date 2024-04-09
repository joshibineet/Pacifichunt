import React from "react";
import "./card.css";
import image34 from '../../assets/comma.svg'
import image35 from '../../assets/profile1.svg'

const Card = (props) => {
  return (
    <>
      <div className="what_card">
       
        <div className="card_content">
          <div className="card_top">
            <img src={image34} alt="" />
          </div>
          <p className="card_mid">
            This job portal has been instrumental in advancing my career. The
            interface is intuitive, making it easy to navigate through job
            listings and application processes. I've received numerous interview
            requests and job offers through this portal. I highly recommend it
            to anyone seeking new career opportunities.
          </p>
          <div className="card_bottom">
            <div className="profile_image">
              <img src={props.image} alt="" />
            </div>
            <div className="profile_description">
              <p className="profile_name">{props.name}</p>
              <p className="profile_job">{props.job}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
