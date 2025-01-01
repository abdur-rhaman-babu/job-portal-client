import axios from "axios";
import { useEffect, useState } from "react";

const useJob = (sort, search) => {
  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3000/jobs?sort=${sort}&search=${search}`)
    .then(res=>{
        setLoading(false)
        setJobs(res.data)
    })
  }, [sort, search]);

  return {jobs, loading}
};

export default useJob;
