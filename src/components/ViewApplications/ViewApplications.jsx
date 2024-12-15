import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const applications = useLoaderData();
  const handleChangeStatus = (e, id) => {
    console.log(e.target.value, id);

    const data = {
      status: e.target.value,
    };

    fetch(`http://localhost:3000/job-applications/${id}`, {
        method:'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            alert('Updated Status')
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, idx) => (
            <tr key={app._id}>
              <th>{idx + 1}</th>
              <td>{app.application_email}</td>
              <td>Quality Control Specialist</td>
              <td>
                <select
                  onChange={(e) => handleChangeStatus(e, app._id)}
                  defaultValue={app.status || "Change Status"}
                  className="select select-bordered select-xs w-full max-w-xs"
                >
                  <option disabled>Change Status</option>
                  <option>Under Review</option>
                  <option>Hired</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplications;
