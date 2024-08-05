import connect from "@/lib/db";
import JobType from "@/lib/models/jobType";
import { NextResponse } from "next/server"

export const POST = async (req: any, { params }: { params: any }) => {
    try {
        await connect();
        const data = await req.json();
        const newJobType = await new JobType(data);
        const res = await newJobType.save();

        return new NextResponse(JSON.stringify({ message: "JobType added successfully", data: res }));

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "Failed to add JobType", error: error.message }));
    }
}

export const GET = async () => {
    try {
        await connect();
        const res = await JobType.find();
        return new NextResponse(JSON.stringify(res));
    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "Failed to get JobTypes", error: error.message }));
    }
}