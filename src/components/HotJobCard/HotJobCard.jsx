import PropTypes from "prop-types";
import { MdOutlineLocationOn } from "react-icons/md";

const HotJobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    category,
    salaryRange,
    requirements,
    company_logo,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex items-center gap-2 m-2">
        <figure className="w-16">
          <img src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <p className="font-bold">{jobType}</p>
          <p className="flex items-center gap-1">
            {" "}
            <MdOutlineLocationOn />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{category}</p>
        <div className="flex gap-2 items-center flex-wrap">
          {requirements.map((skill, idx) => (
            <p className="border p-1 rounded-lg" key={idx}>
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center">
            <p>Salary: ${salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
          <button className="btn btn-primary">Apply</button>
        </div>
      </div>
    </div>
  );
};

HotJobCard.propTypes = {
  job: PropTypes.object.isRequired,
};
export default HotJobCard;
