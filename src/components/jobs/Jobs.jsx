import React, { useState } from "react";
import "./jobs.css";
import image2 from "../../assets/search.svg";
import image3 from "../../assets/location.svg";
import Job_card from "./Job_card";
import image16 from "../../assets/company1.svg";
import image17 from "../../assets/company2.svg";
import image18 from "../../assets/company3.svg";
import image19 from "../../assets/leftpegi.svg";
import image20 from "../../assets/rightpegi.svg";

const Jobs = () => {
  const jobData = [
    {
      id: 1,
      companyLogo: image16,
      jobName: "Deep Learning Engineer",
      companyAddress: "Sydney,Australia",
      jobType: "Remote",
      jobLevel: "Entry Level",
      jobTypes: "Full Time",
      salary: "50K-80K AUD",
      companyName: "Tesla Inc.",
    },
    {
      id: 2,
      companyLogo: image17,
      jobName: "Game Developer",
      companyAddress: "Melbourne,Australia",
      jobType: "Onsite",
      jobLevel: "Intermediate",
      jobTypes: "Internship",
      salary: "50K-90K AUD",
      companyName: "The Batman Corporation",
    },
    {
      id: 3,
      companyLogo: image18,
      jobName: "Ai Engineerr",
      companyAddress: "Perth,Australia",
      jobType: "Hybrid",
      jobLevel: "Experienced",
      jobTypes: "Full Time",
      salary: "20K-50K AUD",
      companyName: "Google",
    },
    {
      id: 4,
      companyLogo: image17,
      jobName: "Software Engineer",
      companyAddress: "Melbourne,Australia",
      jobType: "Onsite",
      jobLevel: "Intermediate",
      jobTypes: "Internship",
      salary: "50K-90K AUD",
      companyName: "The Batman Corporation",
    },
    {
      id: 5,
      companyLogo: image17,
      jobName: "Data Scientist",
      companyAddress: "Preth,Australia",
      jobType: "Hybrid",
      jobLevel: "Experienced",
      jobTypes: "Full Time",
      salary: "20K-50K AUD",
      companyName: "Google",
    },
    {
      id: 6,
      companyLogo: image16,
      jobName: "Product Designer",
      companyAddress: "Sydney,Australia",
      jobType: "Remote",
      jobLevel: "Entry Level",
      jobTypes: "Full Time",
      salary: "50K-80K AUD",
      companyName: "Tesla Inc.",
    },
    {
      id: 7,
      companyLogo: image16,
      jobName: "Deep Learning Engineer",
      companyAddress: "Sydney,Australia",
      jobType: "Remote",
      jobLevel: "Entry Level",
      jobTypes: "Full Time",
      salary: "50K-80K AUD",
      companyName: "Tesla Inc.",
    },
    {
      id: 8,
      companyLogo: image17,
      jobName: "Game Developer",
      companyAddress: "Melbourne,Australia",
      jobType: "Onsite",
      jobLevel: "Intermediate",
      jobTypes: "Internship",
      salary: "50K-90K AUD",
      companyName: "The Batman Corporation",
    },
    {
      id: 9,
      companyLogo: image18,
      jobName: "Ai Engineerr",
      companyAddress: "Perth,Australia",
      jobType: "Hybrid",
      jobLevel: "Experienced",
      jobTypes: "Full Time",
      salary: "20K-50K AUD",
      companyName: "Google",
    },
    {
      id: 10,
      companyLogo: image17,
      jobName: "Software Engineer",
      companyAddress: "Melbourne,Australia",
      jobType: "Onsite",
      jobLevel: "Intermediate",
      jobTypes: "Internship",
      salary: "50K-90K AUD",
      companyName: "The Batman Corporation",
    },
    {
      id: 11,
      companyLogo: image17,
      jobName: "Data Scientist",
      companyAddress: "Preth,Australia",
      jobType: "Hybrid",
      jobLevel: "Experienced",
      jobTypes: "Full Time",
      salary: "20K-50K AUD",
      companyName: "Google",
    },
    {
      id: 12,
      companyLogo: image16,
      jobName: "Product Designer",
      companyAddress: "Sydney,Australia",
      jobType: "Remote",
      jobLevel: "Entry Level",
      jobTypes: "Full Time",
      salary: "50K-80K AUD",
      companyName: "Tesla Inc.",
    },
    {
      id: 13,
      companyLogo: image16,
      jobName: "Deep Learning Engineer",
      companyAddress: "Sydney,Australia",
      jobType: "Remote",
      jobLevel: "Entry Level",
      jobTypes: "Full Time",
      salary: "50K-80K AUD",
      companyName: "Tesla Inc.",
    },
    {
      id: 14,
      companyLogo: image17,
      jobName: "Game Developer",
      companyAddress: "Melbourne,Australia",
      jobType: "Onsite",
      jobLevel: "Intermediate",
      jobTypes: "Internship",
      salary: "50K-90K AUD",
      companyName: "The Batman Corporation",
    },
    {
      id: 15,
      companyLogo: image18,
      jobName: "Ai Engineerr",
      companyAddress: "Perth,Australia",
      jobType: "Hybrid",
      jobLevel: "Experienced",
      jobTypes: "Full Time",
      salary: "20K-50K AUD",
      companyName: "Google",
    },
    {
      id: 16,
      companyLogo: image17,
      jobName: "Software Engineer",
      companyAddress: "Melbourne,Australia",
      jobType: "Onsite",
      jobLevel: "Intermediate",
      jobTypes: "Internship",
      salary: "50K-90K AUD",
      companyName: "The Batman Corporation",
    },
    {
      id: 17,
      companyLogo: image17,
      jobName: "Data Scientist",
      companyAddress: "Preth,Australia",
      jobType: "Hybrid",
      jobLevel: "Experienced",
      jobTypes: "Full Time",
      salary: "20K-50K AUD",
      companyName: "Google",
    },
    {
      id: 18,
      companyLogo: image16,
      jobName: "Product Designer",
      companyAddress: "Sydney,Australia",
      jobType: "Remote",
      jobLevel: "Entry Level",
      jobTypes: "Full Time",
      salary: "50K-80K AUD",
      companyName: "Tesla Inc.",
    },
    {
      id: 19,
      companyLogo: image16,
      jobName: "Deep Learning Engineer",
      companyAddress: "Sydney,Australia",
      jobType: "Remote",
      jobLevel: "Entry Level",
      jobTypes: "Full Time",
      salary: "50K-80K AUD",
      companyName: "Tesla Inc.",
    },
    {
      id: 20,
      companyLogo: image17,
      jobName: "Game Developer",
      companyAddress: "Melbourne,Australia",
      jobType: "Onsite",
      jobLevel: "Intermediate",
      jobTypes: "Internship",
      salary: "50K-90K AUD",
      companyName: "The Batman Corporation",
    },
    {
      id: 21,
      companyLogo: image18,
      jobName: "Ai Engineerr",
      companyAddress: "Perth,Australia",
      jobType: "Hybrid",
      jobLevel: "Experienced",
      jobTypes: "Full Time",
      salary: "20K-50K AUD",
      companyName: "Google",
    },
    {
      id: 22,
      companyLogo: image17,
      jobName: "Software Engineer",
      companyAddress: "Melbourne,Australia",
      jobType: "Onsite",
      jobLevel: "Intermediate",
      jobTypes: "Internship",
      salary: "50K-90K AUD",
      companyName: "The Batman Corporation",
    },
    {
      id: 23,
      companyLogo: image17,
      jobName: "Data Scientist",
      companyAddress: "Preth,Australia",
      jobType: "Hybrid",
      jobLevel: "Experienced",
      jobTypes: "Full Time",
      salary: "20K-50K AUD",
      companyName: "Google",
    },
    {
      id: 24,
      companyLogo: image16,
      jobName: "Product Designer",
      companyAddress: "Sydney,Australia",
      jobType: "Remote",
      jobLevel: "Entry Level",
      jobTypes: "Full Time",
      salary: "50K-80K AUD",
      companyName: "Tesla Inc.",
    },
    {
      id: 25,
      companyLogo: image16,
      jobName: "Deep Learning Engineer",
      companyAddress: "Sydney,Australia",
      jobType: "Remote",
      jobLevel: "Entry Level",
      jobTypes: "Full Time",
      salary: "50K-80K AUD",
      companyName: "Tesla Inc.",
    },
    {
      id: 26,
      companyLogo: image17,
      jobName: "Game Developer",
      companyAddress: "Melbourne,Australia",
      jobType: "Onsite",
      jobLevel: "Intermediate",
      jobTypes: "Internship",
      salary: "50K-90K AUD",
      companyName: "The Batman Corporation",
    },
    {
      id: 27,
      companyLogo: image18,
      jobName: "Ai Engineerr",
      companyAddress: "Perth,Australia",
      jobType: "Hybrid",
      jobLevel: "Experienced",
      jobTypes: "Full Time",
      salary: "20K-50K AUD",
      companyName: "Google",
    },
    {
      id: 19,
      companyLogo: image16,
      jobName: "Deep Learning Engineer",
      companyAddress: "Sydney,Australia",
      jobType: "Remote",
      jobLevel: "Entry Level",
      jobTypes: "Full Time",
      salary: "50K-80K AUD",
      companyName: "Tesla Inc.",
    },
    {
      id: 20,
      companyLogo: image17,
      jobName: "Game Developer",
      companyAddress: "Melbourne,Australia",
      jobType: "Onsite",
      jobLevel: "Intermediate",
      jobTypes: "Internship",
      salary: "50K-90K AUD",
      companyName: "The Batman Corporation",
    },
    {
      id: 21,
      companyLogo: image18,
      jobName: "Ai Engineerr",
      companyAddress: "Perth,Australia",
      jobType: "Hybrid",
      jobLevel: "Experienced",
      jobTypes: "Full Time",
      salary: "20K-50K AUD",
      companyName: "Google",
    },
    {
      id: 22,
      companyLogo: image17,
      jobName: "Software Engineer",
      companyAddress: "Melbourne,Australia",
      jobType: "Onsite",
      jobLevel: "Intermediate",
      jobTypes: "Internship",
      salary: "50K-90K AUD",
      companyName: "The Batman Corporation",
    },
    {
      id: 23,
      companyLogo: image17,
      jobName: "Data Scientist",
      companyAddress: "Preth,Australia",
      jobType: "Hybrid",
      jobLevel: "Experienced",
      jobTypes: "Full Time",
      salary: "20K-50K AUD",
      companyName: "Google",
    },
    {
      id: 24,
      companyLogo: image16,
      jobName: "Product Designer",
      companyAddress: "Sydney,Australia",
      jobType: "Remote",
      jobLevel: "Entry Level",
      jobTypes: "Full Time",
      salary: "50K-80K AUD",
      companyName: "Tesla Inc.",
    },
    {
      id: 25,
      companyLogo: image16,
      jobName: "Deep Learning Engineer",
      companyAddress: "Sydney,Australia",
      jobType: "Remote",
      jobLevel: "Entry Level",
      jobTypes: "Full Time",
      salary: "50K-80K AUD",
      companyName: "Tesla Inc.",
    },
    {
      id: 26,
      companyLogo: image17,
      jobName: "Game Developer",
      companyAddress: "Melbourne,Australia",
      jobType: "Onsite",
      jobLevel: "Intermediate",
      jobTypes: "Internship",
      salary: "50K-90K AUD",
      companyName: "The Batman Corporation",
    },
    {
      id: 27,
      companyLogo: image18,
      jobName: "Ai Engineerr",
      companyAddress: "Perth,Australia",
      jobType: "Hybrid",
      jobLevel: "Experienced",
      jobTypes: "Full Time",
      salary: "20K-50K AUD",
      companyName: "Google",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 12; 


  const totalPages = Math.ceil(jobData.length / jobsPerPage);


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
  const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);

  const availableJobs = currentJobs.map((item) => (
    <Job_card
      logo={item.companyLogo}
      jobname={item.jobName}
      address={item.companyAddress}
      type={item.jobType}
      level={item.jobLevel}
      types={item.jobTypes}
      salary={item.salary}
      compName={item.companyName}
    />
  ));

  return (
    <div className="jobs">
      <p className="dream_job">
        Find your dream <span>job</span>
      </p>
      <div className="Job_search_container">
        <div className="job_search">
          <div className="search_icon">
            <img src={image2} alt="" />
            <input
              id="job_search"
              type="text"
              placeholder="Job title,Keyword..."
            />
          </div>

          <div className="location_icon">
            <img src={image3} alt="" />
            <input
              id="job_location"
              type="text"
              placeholder=" Enter location"
            />
          </div>
          <button className="search_job">Search Job</button>
        </div>
      </div>
      <div className="job_selection">
        <div class="job_options">
          <select id="countries">
            <option value="country" selected disabled>
              Job Type
            </option>
            <option value="nepal">Nepal</option>
            <option value="australia">Australia</option>
            <option value="india">India</option>
          </select>
          <select id="cources">
            <option value="course" selected disabled>
              Salary Range
            </option>
            <option value="nepal">Java</option>
            <option value="australia">Html/css</option>
            <option value="india">Data mining</option>
          </select>
          <select id="degree">
            <option value="deg" selected disabled>
              Category
            </option>
            <option value="nepal">SEE</option>
            <option value="australia">Bachelor</option>
            <option value="india">Masters</option>
          </select>
          <select id="duration">
            <option value="dur" selected disabled>
              Experience Level
            </option>
            <option value="nepal">1 month</option>
            <option value="australia">3 month</option>
            <option value="india">1 year</option>
          </select>
          <select id="fees">
            <option value="fee" selected disabled>
              Work Location
            </option>
            <option value="nepal">AED 20,000</option>
            <option value="australia">CAD 30,009</option>
            <option value="india">AUD 83,000</option>
          </select>
        </div>
        <hr />
      </div>
      <div className="result_showing_job">
        <div className="available_result">
          <div className="available_paragraph">
            <p className="available_top">Showing result for</p>
            <p className="available_down">All available jobs(112)</p>
          </div>
          <div className="available_sort">
            <p className="sort_by_available">Sort By:</p>
            <select id="fees">
              <option value="fee" selected disabled>
                Most Relevant
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
      <div className="job_giving_company">{availableJobs}</div>
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

export default Jobs;
