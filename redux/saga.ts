import { put, takeEvery, call } from 'redux-saga/effects';
import { GET_JOB_DETAILS, GET_JOBS, SET_JOBS } from './constants';
import { fetchJobDetails, fetchJobs } from './Services/JobService';

function* GetJobList() {
    try {
        const data: [] = yield call(fetchJobs);
        yield put({ type: SET_JOBS, data });
    } catch (error: any) {
        console.error("Error fetching jobs:", error.message);
    }
}

function* JobDetails(params: any) {
    try {
        const data:[] = yield call(fetchJobDetails, { params });
        yield put({ type: SET_JOBS, data });

    } catch (error: any) {
        console.error("Error fetching jobs:", error.message);
    }
}



function* JobSaga() {
    yield takeEvery(GET_JOBS, GetJobList);
    yield takeEvery(GET_JOB_DETAILS, JobDetails);
}

export default JobSaga;
