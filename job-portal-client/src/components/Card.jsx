import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";

const Card = ({ data }) => {
  const {
    companyName,
    companyLogo,
    minPrice,
    maxPrice,
    jobTitle,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
  } = data;
  return (
    <section className="card">
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} alt="" />
        <div className="">
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>
          <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
            <span className="flex items-center gap-2 text-sm">
              <FiMapPin size={18} className="text-gray-500" />
              {jobLocation}
            </span>
            <span className="flex items-center gap-2 text-sm">
              <FiClock size={18} className="text-gray-500" />
              {employmentType}
            </span>
            <span className="flex items-center gap-2 text-sm">
              <FiDollarSign size={18} className="text-gray-500" />
              {minPrice}--{maxPrice}k
            </span>
            <span className="flex items-center gap-2 text-sm">
              <FiCalendar size={18} className="text-gray-500" />
              {postingDate}
            </span>
          </div>
          <p className="text-base text-primary/70">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
