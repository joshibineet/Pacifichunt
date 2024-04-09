import "./home.css";
import React, { useState } from "react";
import image1 from "../../assets/check.svg";
import image2 from "../../assets/search.svg";
import image3 from "../../assets/location.svg";
import image4 from "../../assets/girl.png";
import image5 from "../../assets/devi.svg";
import image6 from "../../assets/facebook.svg";
import image7 from "../../assets/vacancy.svg";
import image8 from "../../assets/google.svg";
import image9 from "../../assets/arrow.svg";
import image10 from "../../assets/icon1.svg";
import image11 from "../../assets/icon2.svg";
import image12 from "../../assets/icon3.svg";
import image13 from "../../assets/icon4.svg";
import image14 from "../../assets/icon5.svg";
import image15 from "../../assets/icon6.svg";
import image16 from "../../assets/company1.svg";
import image17 from "../../assets/company2.svg";
import image18 from "../../assets/company3.svg";
import image19 from "../../assets/bookmark1.svg";
import image20 from "../../assets/bookmark2.svg";
import image21 from "../../assets/clock.svg";
import image22 from "../../assets/location1.svg";
import image23 from "../../assets/google2.svg";
import image24 from "../../assets/zoho.svg";
import image25 from "../../assets/airbnb.svg";
import image26 from "../../assets/microsoft.svg";
import image27 from "../../assets/clickup.svg";
import image28 from "../../assets/google3.svg";
import image29 from "../../assets/devi1.svg";
import image30 from "../../assets/skype.svg";
import image31 from "../../assets/facebook1.svg";
import image32 from "../../assets/apple.svg";
import image33 from "../../assets/twitter.svg";

import { Link } from "react-router-dom";
import "../navbar/navbar.css";

import Crousele from "./Crousele";

const Home = () => {
  const [menu, setMenu] = useState("");

  const setActiveMenu = (menuItem) => {
    setMenu(menuItem);
  };
  return (
    <>
      <div className="home">
        <div className="unlock_container">
          <div className="left">
            <div className="paragraph1">
              <img src={image1} alt="" />
              <p>Your Trusted Career Partner</p>
            </div>
            <p className="paragraph2">
              Unlock Your Dream <span className="career">Career</span>
            </p>
            <div className="paragraph3">
              Our platform is dedicated to empowering individuals, connecting
              talent with the right opportunities, and fostering professional
              growth.
            </div>
            <div className="search_container">
              <div className="job_search">
                <div className="search_icon">
                  <img src={image2} alt="" />
                  <input
                    id="search"
                    type="text"
                    placeholder="Job title,Keyword..."
                  />
                </div>

                <div className="location_icon">
                  <img src={image3} alt="" />
                  <input
                    id="location"
                    type="text"
                    placeholder=" Enter location"
                  />
                </div>
                <button className="search_job">Search Job</button>
              </div>
            </div>
            <p className="paragraph4">
              <span className="popular">Popular Searches:</span>
              Designer,Devloper,Programmer,Architect.
            </p>
          </div>
          <div className="right">
            <div className="social_media">
              <img src={image5} alt="" className="facebook" />
              <img src={image6} alt="" className="google" />
              <img src={image7} alt="" className="random" />
              <img src={image8} alt="" className="vacancy" />
              <img src={image4} alt="" className="girl" />
            </div>
          </div>
        </div>
        <div className="popular_categories">
          <div className="seemore">
            <p className="categories">Popular Categories</p>
            <button className="see_more">
              <p>See More</p>
              <img src={image9} alt="" />
            </button>
          </div>
          <div className="popular_content">
            <div className="popular_component">
              <img className="popular_icon" src={image10} alt="" />
              <div className="popular_paragraph">
                <p className="top_popular">Graphics & Design</p>
                <p className="down_popular">418 Open position</p>
              </div>
            </div>
            <div className="popular_component">
              <img className="popular_icon" src={image11} alt="" />
              <div className="popular_paragraph">
                <p className="top_popular">Graphics & Design</p>
                <p className="down_popular">418 Open position</p>
              </div>
            </div>
            <div className="popular_component">
              <img className="popular_icon" src={image12} alt="" />
              <div className="popular_paragraph">
                <p className="top_popular">Graphics & Design</p>
                <p className="down_popular">418 Open position</p>
              </div>
            </div>
            <div className="popular_component">
              <img className="popular_icon" src={image13} alt="" />
              <div className="popular_paragraph">
                <p className="top_popular">Graphics & Design</p>
                <p className="down_popular">418 Open position</p>
              </div>
            </div>
            <div className="popular_component">
              <img className="popular_icon" src={image14} alt="" />
              <div className="popular_paragraph">
                <p className="top_popular">Graphics & Design</p>
                <p className="down_popular">418 Open position</p>
              </div>
            </div>
            <div className="popular_component">
              <img className="popular_icon" src={image15} alt="" />
              <div className="popular_paragraph">
                <p className="top_popular">Graphics & Design</p>
                <p className="down_popular">418 Open position</p>
              </div>
            </div>
          </div>
        </div>

        <div className="job_opeaning">
          <div className="seemore">
            <p className="categories">Top Job Opeaning</p>
            <Link
              to="/Jobs"
              className={menu === 'Jobs' ? 'active' : ''} onClick={() => setActiveMenu('Jobs')}
            >
              <button className="see_more">
                <p>See More</p>
                <img src={image9} alt="" />
              </button>
            </Link>
          </div>
          <div className="job_container">
            <div className="job_content">
              <div className="job_top">
                <img src={image16} alt="" className="job_logo" />
                <button className="apply_now">Apply Now</button>
              </div>
              <div className="job_mid">
                <p className="job_institute">Deep Learning Engineer</p>
                <div className="job_location">
                  <div className="job_address">
                    <img className="job_location_icon" src={image22} alt="" />
                    <p className="address">Sydney,Australia</p>
                  </div>
                  <div className="job_expires">
                    <img src={image21} alt="" className="job_expires_icon" />
                    <p className="expiry_days">Expires in 25 Days</p>
                  </div>
                </div>
                <div className="job_detail">
                  <div className="job_detail_top">
                    <p>Remote</p>
                    <ul>
                      <li>Entry level</li>
                      <li>Full Time</li>
                    </ul>
                  </div>
                  <div className="job_detail_down">
                    <p>Salary:50K-80K AUD(Yearly)</p>
                  </div>
                </div>
              </div>
              <div className="job_bottom">
                <hr />
                <div className="company_name">
                  <p>Tesla Inc.</p>
                  <img src={image19} alt="" />
                </div>
              </div>
            </div>
            <div className="job_content">
              <div className="job_top">
                <img src={image17} alt="" className="job_logo" />
                <button className="apply_now">Apply Now</button>
              </div>
              <div className="job_mid">
                <p className="job_institute">Deep Learning Engineer</p>
                <div className="job_location">
                  <div className="job_address">
                    <img className="job_location_icon" src={image22} alt="" />
                    <p className="address">Sydney,Australia</p>
                  </div>
                  <div className="job_expires">
                    <img src={image22} alt="" className="job_expires_icon" />
                    <p className="expiry_days">Expires in 25 Days</p>
                  </div>
                </div>
                <div className="job_detail">
                  <div className="job_detail_top">
                    <p>Remote</p>
                    <ul>
                      <li>Entry level</li>
                      <li>Full Time</li>
                    </ul>
                  </div>
                  <div className="job_detail_down">
                    <p>Salary:50K-80K AUD(Yearly)</p>
                  </div>
                </div>
              </div>
              <div className="job_bottom">
                <hr />
                <div className="company_name">
                  <p>Tesla Inc.</p>
                  <img src={image19} alt="" />
                </div>
              </div>
            </div>
            <div className="job_content">
              <div className="job_top">
                <img src={image18} alt="" className="job_logo" />
                <button className="apply_now">Apply Now</button>
              </div>
              <div className="job_mid">
                <p className="job_institute">Deep Learning Engineer</p>
                <div className="job_location">
                  <div className="job_address">
                    <img className="job_location_icon" src={image22} alt="" />
                    <p className="address">Sydney,Australia</p>
                  </div>
                  <div className="job_expires">
                    <img src={image22} alt="" className="job_expires_icon" />
                    <p className="expiry_days">Expires in 25 Days</p>
                  </div>
                </div>
                <div className="job_detail">
                  <div className="job_detail_top">
                    <p>Remote</p>
                    <ul>
                      <li>Entry level</li>
                      <li>Full Time</li>
                    </ul>
                  </div>
                  <div className="job_detail_down">
                    <p>Salary:50K-80K AUD(Yearly)</p>
                  </div>
                </div>
              </div>
              <div className="job_bottom">
                <hr />
                <div className="company_name">
                  <p>Tesla Inc.</p>
                  <img src={image20} alt="" />
                </div>
              </div>
            </div>
            <div className="job_content">
              <div className="job_top">
                <img src={image16} alt="" className="job_logo" />
                <button className="apply_now">Apply Now</button>
              </div>
              <div className="job_mid">
                <p className="job_institute">Deep Learning Engineer</p>
                <div className="job_location">
                  <div className="job_address">
                    <img className="job_location_icon" src={image22} alt="" />
                    <p className="address">Sydney,Australia</p>
                  </div>
                  <div className="job_expires">
                    <img src={image22} alt="" className="job_expires_icon" />
                    <p className="expiry_days">Expires in 25 Days</p>
                  </div>
                </div>
                <div className="job_detail">
                  <div className="job_detail_top">
                    <p>Remote</p>
                    <ul>
                      <li>Entry level</li>
                      <li>Full Time</li>
                    </ul>
                  </div>
                  <div className="job_detail_down">
                    <p>Salary:50K-80K AUD(Yearly)</p>
                  </div>
                </div>
              </div>
              <div className="job_bottom">
                <hr />
                <div className="company_name">
                  <p>Tesla Inc.</p>
                  <img src={image20} alt="" />
                </div>
              </div>
            </div>
            <div className="job_content">
              <div className="job_top">
                <img src={image17} alt="" className="job_logo" />
                <button className="apply_now">Apply Now</button>
              </div>
              <div className="job_mid">
                <p className="job_institute">Deep Learning Engineer</p>
                <div className="job_location">
                  <div className="job_address">
                    <img className="job_location_icon" src={image22} alt="" />
                    <p className="address">Sydney,Australia</p>
                  </div>
                  <div className="job_expires">
                    <img src={image22} alt="" className="job_expires_icon" />
                    <p className="expiry_days">Expires in 25 Days</p>
                  </div>
                </div>
                <div className="job_detail">
                  <div className="job_detail_top">
                    <p>Remote</p>
                    <ul>
                      <li>Entry level</li>
                      <li>Full Time</li>
                    </ul>
                  </div>
                  <div className="job_detail_down">
                    <p>Salary:50K-80K AUD(Yearly)</p>
                  </div>
                </div>
              </div>
              <div className="job_bottom">
                <hr />
                <div className="company_name">
                  <p>Tesla Inc.</p>
                  <img src={image19} alt="" />
                </div>
              </div>
            </div>
            <div className="job_content">
              <div className="job_top">
                <img src={image18} alt="" className="job_logo" />
                <button className="apply_now">Apply Now</button>
              </div>
              <div className="job_mid">
                <p className="job_institute">Deep Learning Engineer</p>
                <div className="job_location">
                  <div className="job_address">
                    <img className="job_location_icon" src={image22} alt="" />
                    <p className="address">Sydney,Australia</p>
                  </div>
                  <div className="job_expires">
                    <img src={image22} alt="" className="job_expires_icon" />
                    <p className="expiry_days">Expires in 25 Days</p>
                  </div>
                </div>
                <div className="job_detail">
                  <div className="job_detail_top">
                    <p>Remote</p>
                    <ul>
                      <li>Entry level</li>
                      <li>Full Time</li>
                    </ul>
                  </div>
                  <div className="job_detail_down">
                    <p>Salary:50K-80K AUD(Yearly)</p>
                  </div>
                </div>
              </div>
              <div className="job_bottom">
                <hr />
                <div className="company_name">
                  <p>Tesla Inc.</p>
                  <img src={image19} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="renowned_companies">
          <p className="company_paragraph">
            Join in globally <span>renowned</span> companies
          </p>
          <div className="companies_logo">
            <img src={image23} alt="" />
            <img src={image24} alt="" />
            <img src={image25} alt="" />
            <div>
              <img src={image27} alt="" />
            </div>
            <img src={image26} alt="" />
          </div>
        </div>
        <div className="feature_companies">
          <div className="seemore">
            <p className="categories">Featured Companies</p>
            <Link to="/Companies">
            <button className="see_more">
              <p>See More</p>
              <img src={image9} alt="" />
            </button>
            </Link>
          </div>
            
          <div className="high_companies">
            <div className="job_content">
              <div className="job_top">
                <img src={image28} alt="" className="high_job_logo" />
                <button className="available_jobs">50 jobs available</button>
              </div>
              <div className="job_mid">
                <p className="high_job_institute">Google</p>
                <div className="high_job_address">
                  <img className="job_location_icon" src={image22} alt="" />
                  <p className="high_address">Perth,Australia</p>
                </div>
                <div className="high_job_detail">
                  <p className="infomation">Information Technology</p>
                  <p className="tech">Fintech</p>
                </div>
              </div>
            </div>
            <div className="job_content">
              <div className="job_top">
                <img src={image29} alt="" className="high_job_logo" />
                <button className="available_jobs">50 jobs available</button>
              </div>
              <div className="job_mid">
                <p className="high_job_institute">Prabodh Digital Production</p>
                <div className="high_job_address">
                  <img className="job_location_icon" src={image22} alt="" />
                  <p className="high_address">Perth,Australia</p>
                </div>
                <div className="high_job_detail">
                  <p className="infomation">Information Technology</p>
                  <p className="tech">Fintech</p>
                </div>
              </div>
            </div>
            <div className="job_content">
              <div className="job_top">
                <img src={image30} alt="" className="high_job_logo" />
                <button className="available_jobs">50 jobs available</button>
              </div>
              <div className="job_mid">
                <p className="high_job_institute">Skype</p>
                <div className="high_job_address">
                  <img className="job_location_icon" src={image22} alt="" />
                  <p className="high_address">Perth,Australia</p>
                </div>
                <div className="high_job_detail">
                  <p className="infomation">Information Technology</p>
                  <p className="tech">Fintech</p>
                </div>
              </div>
            </div>
            <div className="job_content">
              <div className="job_top">
                <img src={image31} alt="" className="high_job_logo" />
                <button className="available_jobs">50 jobs available</button>
              </div>
              <div className="job_mid">
                <p className="high_job_institute">Facebook</p>
                <div className="high_job_address">
                  <img className="job_location_icon" src={image22} alt="" />
                  <p className="high_address">Perth,Australia</p>
                </div>
                <div className="high_job_detail">
                  <p className="infomation">Information Technology</p>
                  <p className="tech">Fintech</p>
                </div>
              </div>
            </div>
            <div className="job_content">
              <div className="job_top">
                <img src={image32} alt="" className="high_job_logo" />
                <button className="available_jobs">50 jobs available</button>
              </div>
              <div className="job_mid">
                <p className="high_job_institute">Apple</p>
                <div className="high_job_address">
                  <img className="job_location_icon" src={image22} alt="" />
                  <p className="high_address">Perth,Australia</p>
                </div>
                <div className="high_job_detail">
                  <p className="infomation">Information Technology</p>
                  <p className="tech">Fintech</p>
                </div>
              </div>
            </div>
            <div className="job_content">
              <div className="job_top">
                <img src={image33} alt="" className="high_job_logo" />
                <button className="available_jobs">50 jobs available</button>
              </div>
              <div className="job_mid">
                <p className="high_job_institute">Twitter</p>
                <div className="high_job_address">
                  <img className="job_location_icon" src={image22} alt="" />
                  <p className="high_address">Perth,Australia</p>
                </div>
                <div className="high_job_detail">
                  <p className="infomation">Information Technology</p>
                  <p className="tech">Fintech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Crousele />
        
      </div>
    </>
  );
};

export default Home;
