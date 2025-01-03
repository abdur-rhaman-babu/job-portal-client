import { useContext } from "react";
import { AuthContext } from "../../Context/Context";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("data successfully added");
        }
      });
  };

  return (
    <form onSubmit={handleAddJob} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Job Title</span>
        </label>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <input
          type="text"
          name="location"
          placeholder="location"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Job Type</span>
        </label>
        <select
          defaultValue="Pick a job type"
          className="select select-ghost w-full max-w-xs"
          name="jobType"
        >
          <option disabled>Pick a job type</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Intern</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Job Category</span>
        </label>
        <select
          defaultValue="Pick a job category"
          className="select select-ghost w-full max-w-xs"
          name="category"
        >
          <option disabled>Pick a job category</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Finance</option>
          <option>Teaching</option>
        </select>
      </div>
      {/* salary range */}
      <div className="grid lg:grid-cols-3 items-end gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Salary Range</span>
          </label>
          <input
            type="number"
            name="min"
            placeholder="min"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            name="max"
            placeholder="max"
            className="input input-bordered"
            required
          />
        </div>
        <select
          defaultValue="currency"
          className="select select-ghost w-full max-w-xs"
          name="currency"
        >
          <option disabled>Currency</option>
          <option>BDT</option>
          <option>USDT</option>
          <option>INR</option>
        </select>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Job Description</span>
        </label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Job Description"
          name="description"
        ></textarea>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Requirements</span>
        </label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="requirements"
          name="requirements"
        ></textarea>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Responsibilities</span>
        </label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="responsibilities"
          name="responsibilities"
        ></textarea>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Company Logo</span>
        </label>
        <input
          type="text"
          name="company_logo"
          placeholder="company_logo"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">HR Name</span>
        </label>
        <input
          type="text"
          name="hr_name"
          defaultValue={user?.displayName}
          placeholder="hr_name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">HR Email</span>
        </label>
        <input
          type="email"
          name="hr_email"
          defaultValue={user?.email}
          placeholder="hr_email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Deadline</span>
        </label>
        <input
          type="date"
          name="deadline"
          placeholder="deadline"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Add Job</button>
      </div>
    </form>
  );
};

export default AddJob;
