const JobApply = () => {
    const handleJobApply = (e)=>{
        e.preventDefault()
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(linkedin, github, resume)
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleJobApply} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Linkedin</span>
            </label>
            <input
              type="url"
              name="linkedin"
              placeholder="linkedin url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">GitHub</span>
            </label>
            <input
              type="url"
              name="github"
              placeholder="GitHub url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume</span>
            </label>
            <input
              type="url"
              name="resume"
              placeholder="Resume url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
