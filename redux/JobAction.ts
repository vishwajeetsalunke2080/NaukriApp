import { GET_JOB_DETAILS, GET_JOBS } from "./constants";

export const JobAction = () => {
    return {
        type: GET_JOBS,
    }
}

export const GetJobDetails = (data:String) => {
    return {
        type: GET_JOB_DETAILS,
        data
    }
}