import { useState } from "react";
import HotJobCard from "../../components/HotJobCard/HotJobCard";
import useJob from "../../components/useJob/useJob";

const AllJobs = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const { loading, jobs } = useJob(sort, search);

  if (loading) {
    return (
      <div className="flex items-center h-[50vh] justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">All Jobs</h1>
      <div className="gap-5 flex items-center">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-success"}`}
        >
          {sort ? "Sorted by Salary" : "Sort by Salary"}
        </button>

        <input
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg max-w-2xl"
          type="text"
          placeholder="search"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
