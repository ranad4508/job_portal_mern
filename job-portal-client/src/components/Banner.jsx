import { CiSearch } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
const Banner = ({ query, handleInputChange }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Discover Your <span className="text-blue">Next Tech</span> Adventure
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Step into the future with top-tier IT jobs waiting for you!
      </p>

      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
          <div className="flex md:rounded-md rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What position you are looking for?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={query}
            />
            <CiSearch
              size={23}
              className="absolute my-1.5 mx-2  text-gray-400"
            />
          </div>
          <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
              value={""}
            />
            <FiMapPin
              size={18}
              className="absolute my-2.5 mx-2  text-gray-400"
            />
          </div>
          <button
            type="submit"
            className="bg-blue py-2 px-8 text-white md:rounded-s-none rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
