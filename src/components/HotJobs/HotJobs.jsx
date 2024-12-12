import { useEffect, useState } from "react";
import HotJobCard from "../HotJobCard/HotJobCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res=> res.json())
        .then(data=> setJobs(data))
    },[])

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                jobs.map(job=> <HotJobCard key={job._id} job={job}/>)
            }
        </div>
    );
};

export default HotJobs;