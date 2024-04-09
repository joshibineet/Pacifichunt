import React from "react";
import "./footer.css";
import image1 from "../../assets/footerlogo.svg";
import image2 from "../../assets/footerfb.svg";
import image3 from "../../assets/footertw.svg";
import image4 from "../../assets/footeryt.svg";
import image5 from "../../assets/footerlk.svg";
import image34 from "../../assets/person1.svg";

const Footer = () => {
  return (
    <>
      <div className="stay_connected">
        <div className="stay_connected_content">
          <p className="join_us">
            Join <span>Pacific Hunt</span> today. Connect,Grow,Succeed.
          </p>
          <p className="stay_paragraph1">
            Whether you're seeking your next career move or searching for top
            talent, our platform offers the perfect avenue to connect and
            thrive.
          </p>
          <div className="stay_button">
            <button className="jobseeker">Join as jobseeker</button>
            <button className="employer1">Join as employer</button>
          </div>
          <div className="image_outside">
            <img src={image34} alt="" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer_top">
          <div className="footer_left">
            <div className="footer_logo">
              <img src={image1} alt="" />
            </div>
            <p className="footer_paragraph">
              Lorem ipsum dolor sit amet consectetur. Nibh leo amet sed orci
              ipsum lectus pretium diam. Placerat ipsum volutpat commodo
              sodales.
            </p>
          </div>
          <div className="footer_right">
            <div>
              <p>Job Seeker</p>
              <ul className="footer_job">
                <li>
                  <a href="">Search Jobs</a>
                </li>
                <li>
                  <a href="">Explore Jobs</a>
                </li>
                <li>
                  <a href="">Saved Jobs</a>
                </li>
                <li>
                  <a href="">Applied Jobs</a>
                </li>
              </ul>
            </div>
            <div>
              <p>Employers</p>
              <ul className="footer_job">
                <li>
                  <a href="">Register</a>
                </li>
                <li>
                  <a href="">Post Jobs</a>
                </li>
                <li>
                  <a href="">Applications</a>
                </li>
                <li>
                  <a href="">My Job postings</a>
                </li>
              </ul>
            </div>
            <div>
              <p>Legal</p>
              <ul className="footer_job">
                <li>
                  <a href="">Cookies Policy</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms of Servive</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_down">
          <hr />
          <div className="footor_bottom">
            <p className="copyright">
              Copyright © 2024 Pacific Hunt. All rights reserved.
            </p>
            <div className="footer_social_medias">
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
              <img src={image5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
