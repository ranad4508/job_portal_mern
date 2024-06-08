import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // Handle input change
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setCurrentPage(1); // Reset to first page
  };

  // Radio based filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to first page
  };

  // Button based filtering
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
          postingDate,
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

  // Get paginated jobs
  const { startIndex, endIndex } = calculatePageRange(filteredItems);
  const paginatedJobs = filteredItems.slice(startIndex, endIndex);

  return (
    <div className="sm:mx-8 mx-5 lg:mx-0">
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* Main contents */}
      <div className="bg-[]#fafafa md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* Left side */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        {/* Job cards */}
        <div className="col-span-2 bg-white p-4 rounded">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : paginatedJobs.length > 0 ? (
            <>
              <h3 className="text-lg font-bold mb-2">
                Showing {startIndex + 1} - {endIndex} of {filteredItems.length}{" "}
                Jobs
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
          {filteredItems.length > 0 && (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                className="hover:text-blue focus:text-red-500"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                className="hover:text-blue focus:text-red-500"
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
              >
                Next
              </button>
            </div>
          )}
        </div>
        {/* Right side */}
        <div className="bg-white p-4 rounded">Right</div>
      </div>
    </div>
  );
};

export default Home;
