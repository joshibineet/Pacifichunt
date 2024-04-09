import React, { useState } from "react";
import "./companies.css";
import image19 from "../../assets/leftpegi.svg";
import image20 from "../../assets/rightpegi.svg";
import image2 from "../../assets/search.svg";
import image3 from "../../assets/location.svg";
import Companies_card from "./Companies_card";
import image16 from "../../assets/company1.svg";
import image28 from "../../assets/google3.svg";
import image29 from "../../assets/devi1.svg";
import image30 from "../../assets/skype.svg";
import image31 from "../../assets/facebook1.svg";
import image32 from "../../assets/apple.svg";
import image33 from "../../assets/twitter.svg";


const Companies = () => {
  const companyData = [
    {
      id: 1,
      companyLogo: image28,
      jobName: "Google",
      companyAddress: "Perth,Australia",
     jobsAvailable:"50",
    },
    {
      id: 2,
      companyLogo: image29,
      jobName: "Prabodh Digital Production",
      companyAddress: "Perth,Australia",
     jobsAvailable:"222",
    },
    {
      id: 3,
      companyLogo: image30,
      jobName: "Skype",
      companyAddress: "Perth,Australia",
     jobsAvailable:"115",
    },
    {
      id: 4,
      companyLogo: image31,
      jobName: "Facebook",
      companyAddress: "Perth,Australia",
     jobsAvailable:"97",
    },
    {
      id: 5,
      companyLogo: image32,
      jobName: "Apple",
      companyAddress: "Perth,Australia",
     jobsAvailable:"130",
    },
    {
      id: 6,
      companyLogo: image33,
      jobName: "Twitter",
      companyAddress: "Perth,Australia",
     jobsAvailable:"80",
    },
    {
      id: 1,
      companyLogo: image28,
      jobName: "Google",
      companyAddress: "Perth,Australia",
     jobsAvailable:"50",
    },
    {
      id: 2,
      companyLogo: image29,
      jobName: "Prabodh Digital Production",
      companyAddress: "Perth,Australia",
     jobsAvailable:"222",
    },
    {
      id: 3,
      companyLogo: image30,
      jobName: "Skype",
      companyAddress: "Perth,Australia",
     jobsAvailable:"115",
    },
    {
      id: 4,
      companyLogo: image31,
      jobName: "Facebook",
      companyAddress: "Perth,Australia",
     jobsAvailable:"97",
    },
    {
      id: 5,
      companyLogo: image32,
      jobName: "Apple",
      companyAddress: "Perth,Australia",
     jobsAvailable:"130",
    },
    {
      id: 6,
      companyLogo: image33,
      jobName: "Twitter",
      companyAddress: "Perth,Australia",
     jobsAvailable:"80",
    },
    {
      id: 1,
      companyLogo: image28,
      jobName: "Google",
      companyAddress: "Perth,Australia",
     jobsAvailable:"50",
    },
    {
      id: 2,
      companyLogo: image29,
      jobName: "Prabodh Digital Production",
      companyAddress: "Perth,Australia",
     jobsAvailable:"222",
    },
    {
      id: 3,
      companyLogo: image30,
      jobName: "Skype",
      companyAddress: "Perth,Australia",
     jobsAvailable:"115",
    },
    {
      id: 4,
      companyLogo: image31,
      jobName: "Facebook",
      companyAddress: "Perth,Australia",
     jobsAvailable:"97",
    },
    {
      id: 5,
      companyLogo: image32,
      jobName: "Apple",
      companyAddress: "Perth,Australia",
     jobsAvailable:"130",
    },
    {
      id: 6,
      companyLogo: image33,
      jobName: "Twitter",
      companyAddress: "Perth,Australia",
     jobsAvailable:"80",
    },
    {
      id: 1,
      companyLogo: image28,
      jobName: "Google",
      companyAddress: "Perth,Australia",
     jobsAvailable:"50",
    },
    {
      id: 2,
      companyLogo: image29,
      jobName: "Prabodh Digital Production",
      companyAddress: "Perth,Australia",
     jobsAvailable:"222",
    },
    {
      id: 3,
      companyLogo: image30,
      jobName: "Skype",
      companyAddress: "Perth,Australia",
     jobsAvailable:"115",
    },
    {
      id: 4,
      companyLogo: image31,
      jobName: "Facebook",
      companyAddress: "Perth,Australia",
     jobsAvailable:"97",
    },
    {
      id: 5,
      companyLogo: image32,
      jobName: "Apple",
      companyAddress: "Perth,Australia",
     jobsAvailable:"130",
    },
    {
      id: 6,
      companyLogo: image33,
      jobName: "Twitter",
      companyAddress: "Perth,Australia",
     jobsAvailable:"80",
    },
    {
      id: 1,
      companyLogo: image28,
      jobName: "Google",
      companyAddress: "Perth,Australia",
     jobsAvailable:"50",
    },
    {
      id: 2,
      companyLogo: image29,
      jobName: "Prabodh Digital Production",
      companyAddress: "Perth,Australia",
     jobsAvailable:"222",
    },
    {
      id: 3,
      companyLogo: image30,
      jobName: "Skype",
      companyAddress: "Perth,Australia",
     jobsAvailable:"115",
    },
    {
      id: 4,
      companyLogo: image31,
      jobName: "Facebook",
      companyAddress: "Perth,Australia",
     jobsAvailable:"97",
    },
    {
      id: 5,
      companyLogo: image32,
      jobName: "Apple",
      companyAddress: "Perth,Australia",
     jobsAvailable:"130",
    },
    {
      id: 6,
      companyLogo: image33,
      jobName: "Twitter",
      companyAddress: "Perth,Australia",
     jobsAvailable:"80",
    },
    {
      id: 1,
      companyLogo: image28,
      jobName: "Google",
      companyAddress: "Perth,Australia",
     jobsAvailable:"50",
    },
    {
      id: 2,
      companyLogo: image29,
      jobName: "Prabodh Digital Production",
      companyAddress: "Perth,Australia",
     jobsAvailable:"222",
    },
    {
      id: 3,
      companyLogo: image30,
      jobName: "Skype",
      companyAddress: "Perth,Australia",
     jobsAvailable:"115",
    },
    {
      id: 4,
      companyLogo: image31,
      jobName: "Facebook",
      companyAddress: "Perth,Australia",
     jobsAvailable:"97",
    },
    {
      id: 5,
      companyLogo: image32,
      jobName: "Apple",
      companyAddress: "Perth,Australia",
     jobsAvailable:"130",
    },
    {
      id: 6,
      companyLogo: image33,
      jobName: "Twitter",
      companyAddress: "Perth,Australia",
     jobsAvailable:"80",
    },
    
    
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  const totalPages = Math.ceil(companyData.length / jobsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = companyData.slice(indexOfFirstJob, indexOfLastJob);

  const availableCompany = currentJobs.map((item) => (
    <Companies_card
      
      availablejobs={item.jobsAvailable}
      companyLogo={item.companyLogo}
      companyName={item.jobName}
      companyAddress={item.companyAddress}
    />
  ));
  return (
    <div className="Companies">
      <p className="dream_job">
        Explore the <span>best</span> companies
      </p>
      <div className="Job_search_container">
        <div className="job_search">
          <div className="search_icon">
            <img src={image2} alt="" />
            <input
              id="company_search"
              type="text"
              placeholder="Job title,Keyword..."
            />
          </div>

          <div className="location_icon">
            <img src={image3} alt="" />
            <input
              id="company_location"
              type="text"
              placeholder=" Enter location"
            />
          </div>
          <div className="industry_type">
            <select id="countries">
              <option value="country" selected disabled>
               Industry type
              </option>
              <option value="nepal">Nepal</option>
              <option value="australia">Australia</option>
              <option value="india">India</option>
            </select>
          </div>
          <button className="search_companies">Search Companies</button>
        </div>
      </div>
      <div className="result_showing_job">
        <div className="available_result">
          <div className="available_paragraph">
            <p className="available_top">Showing result for</p>
            <p className="available_down">All available jobs(4512)</p>
          </div>
          <div className="available_sort">
            <p className="sort_by_available">Sort By:</p>
            <select id="fees">
              <option value="fee" selected disabled>
                Most Jobs
              </option>
              <option value="nepal">AED 20,000</option>
              <option value="australia">CAD 30,009</option>
              <option value="india">AUD 83,000</option>
            </select>
          </div>
        </div>
        <div className="underline">
          <hr />
        </div>
      </div>
      <div className="company_card_grid">
      {availableCompany}
      </div>
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          <img src={image19} alt="" />Previous
        </button>
        <ul className="pagination-list">
          {Array.from({ length: totalPages }, (_, i) => {
           
            if (
              i === 0 ||
              i === totalPages - 1 ||
              (i >= currentPage - 2 && i <= currentPage + 1)
            ) {
              return (
                <li key={i} className="pagination-item">
                  <button
                    onClick={() => handlePageChange(i + 1)}
                    className={`pagination-button ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    {i + 1}
                  </button>
                </li>
              );
            } else if (i === currentPage - 3 || i === currentPage + 2) {
              return (
                <li key={i} className="pagination-item">
                  <span className="ellipsis">...</span>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
        <button
          className="pagination-button"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next <img src={image20} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Companies;
