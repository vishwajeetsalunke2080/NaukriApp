import connect from "@/lib/db";
import Company from "@/lib/models/company";
import Recruiter from "@/lib/models/recruiter";
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        await connect();
        const data = await Recruiter.find({}).populate({ path: "company", model: Company })
        return new NextResponse(JSON.stringify(data));

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "failed to fetch recruiters", error: error.message }))
    }
}

export const POST = async (request: any) => {
    try {
        await connect();
        const data = await request.json();
        const newRecruiter = new Recruiter(data);
        newRecruiter.save();
        return new NextResponse(JSON.stringify({ message:"Recruiter added successfully",data:newRecruiter}))

    } catch (error:any) {
        return new NextResponse(JSON.stringify({ message: "failed to create record", error: error.message }))
    }
}