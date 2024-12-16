import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import axios from "axios";

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    // fetch(`http://localhost:3000/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setJobs(data));

    axios
      .get(`http://localhost:3000/job-application?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => setJobs(res.data));
  }, [user.email]);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, idx) => (
            <tr key={job._id}>
              <th>{idx + 1}</th>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>
                <button>x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyApplications;
