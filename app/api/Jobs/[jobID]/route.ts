import connect from "@/lib/db";
import Company from "@/lib/models/company";
import Experience from "@/lib/models/experience";
import Jobs from "@/lib/models/job";
import JobType from "@/lib/models/jobType";
import Recruiter from "@/lib/models/recruiter";
import Sector from "@/lib/models/sector";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: { params: { jobID: string } }) => {
    try {

        const { jobID } = params;
        const validID = Types.ObjectId.isValid(jobID);

        if (jobID === undefined || jobID === null) {
            return new NextResponse(JSON.stringify({ message: "Invalid Request - JobID is required" }));
        }

        if (!validID) {
            return new NextResponse(JSON.stringify({ message: "Invalid Request - JobID is invalid" }));
        }

        await connect();
        const jobDetails = await Jobs.find({ _id: new Types.ObjectId(jobID) })
            .populate([
                { path: 'sector', model: Sector, select: 'name ' },
                { path: 'jobType', model: JobType, select: 'name ' },
                { path: 'experience', model: Experience, select: 'name ' },
                { path: 'company', model: Company, select: 'name ' },
                { path: 'recruiter', model: Recruiter, select: 'name address email contact ' }
            ])

        if (!jobDetails) {
            return new NextResponse(JSON.stringify({ message: "Details Not Found" }));
        }

        return new NextResponse(JSON.stringify(jobDetails));
    }
    catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "Error getting job details", error: error.message }));
    }
}


export const PATCH = async (request: Request, { params }: { params: { jobID: string } }) => {
    try {

        const { jobID } = params;
        const { newDescription } = await request.json();
        const validID = Types.ObjectId.isValid(jobID);

        if (jobID === undefined || jobID === null) {
            return new NextResponse(JSON.stringify({ message: "Invalid Request - JobID is required" }));
        }

        if (newDescription === undefined || newDescription === null) {
            return new NextResponse(JSON.stringify({ message: "Invalid Request - newDescription is required" }));
        }

        if (!validID) {
            return new NextResponse(JSON.stringify({ message: "Invalid Request - JobID is invalid" }));
        }

        await connect();
        const jobDetails = await Jobs.findOneAndUpdate({ _id: new Types.ObjectId(jobID) }, {
            description: newDescription
        },
    {
        _new:true
    }).populate([
            { path: 'sector', model: Sector, select: 'name ' },
            { path: 'jobType', model: JobType, select: 'name ' },
            { path: 'experience', model: Experience, select: 'name ' },
            { path: 'company', model: Company, select: 'name ' },
            { path: 'recruiter', model: Recruiter, select: 'name address email contact ' }
        ])

        await jobDetails.save();

        if (!jobDetails) {
            return new NextResponse(JSON.stringify({ message: "Could not update job details" }));
        }

        return new NextResponse(JSON.stringify(jobDetails));
    }
    catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "Error updating job details", error: error.message }));
    }
}
