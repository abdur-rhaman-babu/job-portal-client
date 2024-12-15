import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  // console.log(jobs.length)
  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Category</th>
            <th>View Application</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, idx) => (
            <tr key={job._id}>
              <th>{idx + 1}</th>
              <td>{job.title}</td>
              <td>{job.category}</td>
              <td>
                <Link to={`/viewApplications/${job._id}`}>
                  <button className="btn btn-link">View Application</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPostedJob;
