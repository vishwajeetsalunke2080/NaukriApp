"use client"
import JobDescription from "@/components/(Job Page)/JobDescription";
import { GetJobDetails } from "@/redux/JobAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const JobDetails = ({ params }: { params: any }) => {

    const { jobID } = params;
    const dispatch = useDispatch();
    const [JobInfo, setJobInfo] = useState([]);

    const details = useSelector((state:any)=>state.JobReducer)

    useEffect(() => {
        if (jobID != undefined) {
            dispatch(GetJobDetails(jobID));
        }
    }, []);

    useEffect(() => {
        if(details != undefined || details != null){
            setJobInfo(details);
        }
    }, [details]);


    const [formData, setformData] = useState({
        name: "",
        email: "",
        contact: "",
        resume: null,
        comments: ""
    });

    const handleNameChange = (e: any) => {
        setformData({ ...formData, name: e });
    }
    const handleContactChange = (e: any) => {
        setformData({ ...formData, contact: e });
    }
    const handleEmailChange = (e: any) => {
        setformData({ ...formData, email: e });
    }
    const handleResumeChange = (e: any) => {
        setformData({ ...formData, resume: e });
    }
    const handleCommentChange = (e: any) => {
        setformData({ ...formData, comments: e });
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);

    }

    return (<>
        {
            JobInfo.length != 0 ? ((
                <JobDescription
                    JobDetails={JobInfo}
                    comments={formData.comments}
                    contact={formData.contact}
                    email={formData.email}
                    name={formData.name}
                    handleCommentsChange={handleCommentChange}
                    handleContactChange={handleContactChange}
                    handleEmailChange={handleEmailChange}
                    handleNameChange={handleNameChange}
                    handleResumeChange={handleResumeChange}
                    handleSubmit={handleSubmit} />
            )) : ((<p>Details not Found</p>))
        }
    </>);
}

export default JobDetails;