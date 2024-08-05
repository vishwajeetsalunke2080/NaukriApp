import { SET_JOB_DETAILS, SET_JOBS } from "./constants";

export const JobReducer = (data = [], action: { type: any; data: any; }) => {

    switch (action.type) {
        case SET_JOBS:
            return action.data;
            
        case SET_JOB_DETAILS:
            return action.data;

        default:
            return data;
    }
}