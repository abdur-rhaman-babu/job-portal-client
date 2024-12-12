import { MdOutlineLocationOn } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    _id,
    title,
    location,
    jobType,
    description,
    salaryRange,
    requirements,
    company_logo,
  } = job;
  // console.log(job);  
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
        <p>{description}</p>
        <div className="flex gap-2 items-center flex-wrap">
          {requirements.map((skill, idx) => (
            <p className="border p-1 rounded-lg" key={idx}>
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center">
            <p>Salary: ${salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
          <Link to={`/jobApply/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
