import React from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({ handleInputChange, query }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 md:py-20 py-14 px-4">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Discover Your <span className="text-blue">Next Tech</span> Adventure
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Step into the future with top-tier IT jobs waiting for you!
      </p>

      <form className="">
        <div className="flex justify-center md:flex-row flex-col md:gap-0 gap-4">
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              name="username"
              id="username"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="What position are you looking for ?"
              onChange={handleInputChange}
              value={query}
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>

          <button
            type="submit"
            className="bg-blue py-2 px-8 text-white md:rounded-e-md md:rounded-s-none rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
