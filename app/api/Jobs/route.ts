import connect from "@/lib/db";
import Company from "@/lib/models/company";
import Experience from "@/lib/models/experience";
import Jobs from "@/lib/models/job";
import JobType from "@/lib/models/jobType";
import Recruiter from "@/lib/models/recruiter";
import Sector from "@/lib/models/sector";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {

        await connect();
        const data = await Jobs.find()
            .populate([
                { path: 'sector', model: Sector },
                { path: 'jobType', model: JobType },
                { path: 'experience', model: Experience },
                { path: 'company', model: Company },
                { path: 'recruiter', model: Recruiter }
            ]);            
        return new NextResponse(JSON.stringify(data));

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "Unable to get jobs", error: error.message }));
    }

}


export const POST = async (request: any, { params }: { params: any }) => {
    try {
        await connect();
        const data = await request.json();
        console.log("data to create new job", data);
        
        const newJob = new Jobs(data)
        const res = await newJob.save();

        return new NextResponse(JSON.stringify({ message: "Job saved successfully", data: res }));

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "Unable to add job", error: error.message }));
    }

}