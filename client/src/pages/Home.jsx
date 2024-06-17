import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Sidebar from "../Sidebar/Sidebar";
import Jobs from "./Jobs";
import Card from "../components/Card";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [postingDate, setPostingDate] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // Handle input change
  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setCurrentPage(1); // Reset to first page
  };

  // Handle category change
  const handleChange = (event) => {
    if (event.target.name === "postingDate") {
      setPostingDate(event.target.value);
    } else {
      setSelectedCategory(event.target.value);
    }
    setCurrentPage(1); // Reset to first page
  };

  // Handle button click
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to first page
  };

  // Filter jobs based on the selected category and query
  const filterJobs = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // Filtering input items
    if (query) {
      filteredJobs = filteredJobs.filter(
        (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    // Category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }

    return filteredJobs;
  };

  // Filter jobs by posting date
  const filterByPostingDate = (jobs, postingDate) => {
    if (!postingDate) return jobs;
    return jobs.filter(
      (job) => new Date(job.postingDate) >= new Date(postingDate)
    );
  };

  // Calculate the index range
  const calculatePageRange = (filteredJobs) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredJobs.length);
    return { startIndex, endIndex };
  };

  // Function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get filtered jobs based on the selected category and query
  const filteredItems = filterJobs(jobs, selectedCategory, query);
  // Further filter jobs by posting date
  const finalFilteredItems = filterByPostingDate(filteredItems, postingDate);

  // Get paginated jobs
  const { startIndex, endIndex } = calculatePageRange(finalFilteredItems);
  const paginatedJobs = finalFilteredItems.slice(startIndex, endIndex);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className="col-span-2 bg-white p-4 rounded">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : paginatedJobs.length > 0 ? (
            <>
              <h3 className="text-lg font-bold mb-2">
                Showing {startIndex + 1} - {endIndex} of{" "}
                {finalFilteredItems.length} Jobs
              </h3>
              <Jobs
                result={paginatedJobs.map((data, i) => (
                  <Card key={i} data={data} />
                ))}
              />
            </>
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">
                {paginatedJobs.length} Jobs
              </h3>
              <p>No data found!</p>
            </>
          )}
          {/* Pagination */}
          {finalFilteredItems.length > 0 && (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                className="hover:text-blue focus:text-red-500 hover:underline"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(finalFilteredItems.length / itemsPerPage)}
              </span>
              <button
                className="hover:text-blue focus:text-red-500 hover:underline"
                onClick={nextPage}
                disabled={
                  currentPage ===
                  Math.ceil(finalFilteredItems.length / itemsPerPage)
                }
              >
                Next
              </button>
            </div>
          )}
        </div>
        <div className="bg-white p-4 rounded">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Home;
