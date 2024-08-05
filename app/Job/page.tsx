"use client";
import FilterMenu from "@/components/(Job Page)/FilterMenu";
import JobCard from "@/components/(Job Page)/JobCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import NotFound from "@/public/notFound.svg";
import { useDispatch, useSelector } from "react-redux";
import { JobAction } from "@/redux/JobAction";

const JobPage = () => {

  const [jobList, setJobList] = useState([]);

  const [FormData, setFormData] = useState({
    experience: [],
    duration: [],
    jobType: [],
    location: [],
    sector: [],
    minSalary: 0,
    maxSalary: 0,
  });

  const dispatch = useDispatch();
  const res = useSelector((state: any) => state.JobReducer);

  useEffect(() => {
    console.log("uef triggered");
    dispatch(JobAction());    
  }, []);

  useEffect(() => {
    if(res.length!=0)
    {
      console.log("res: ", res);
      setJobList(res);
    }
  }, [res]);

  const handleDurationChange = (e: any) => {
    setFormData({ ...FormData, duration: e });
  };
  const handleJobTypeChange = (e: any) => {
    setFormData({ ...FormData, jobType: e });
  };

  const handleExperienceChange = (e: any) => {
    setFormData({ ...FormData, experience: e });
  };

  const handleMaxSalaryChange = (e: any) => {
    setFormData({ ...FormData, maxSalary: e });
  };

  const handleMinSalaryChange = (e: any) => {
    setFormData({ ...FormData, minSalary: e });
  };

  const handleLocationChange = (e: any) => {
    setFormData({ ...FormData, location: e });
  };

  const handleSectorChange = (e: any) => {
    setFormData({ ...FormData, sector: e });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (jobList.length != 0 ? ((
    <div className="flex justify-center gap-[2em]">
      <FilterMenu duration={FormData.duration}
        experience={FormData.experience}
        handleDurationChange={handleDurationChange}
        jobType={FormData.jobType}
        sector={FormData.sector}
        handleExperienceChange={handleExperienceChange}
        handleJobTypeChange={handleJobTypeChange}
        handleLocationChange={handleLocationChange}
        handleMaxSalaryChange={handleMaxSalaryChange}
        handleMinSalaryChange={handleMinSalaryChange}
        handleSectorChange={handleSectorChange}
        handleSubmit={handleSubmit}
        minSalary={FormData.minSalary}
        maxSalary={FormData.maxSalary} />

      <JobCard JobList={jobList} />
    </div>
  )) : ((
    <div className="flex sm:flex-col lg:flex-row md:flex-row justify-center items-center h-screen w-screen gap-2">
      <Image src={NotFound} alt="Not Found" className="w-75 h-auto" priority />
      <p className="lg:text-[2em] md:text-[2em] font-bold ">No Jobs Found</p>
    </div>
  )));
}

export default JobPage;
