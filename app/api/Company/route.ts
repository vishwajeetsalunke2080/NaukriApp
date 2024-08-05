import connect from "@/lib/db";
import Company from "@/lib/models/company";
import { NextResponse } from "next/server"

export const POST = async (req: any, { params }: { params: any }) => {
    try {
        await connect();
        const data = await req.json();
        const newCompany = await new Company(data);
        const res = await newCompany.save();

        return new NextResponse(JSON.stringify({ message: "company added successfully", data: res }));

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "Failed to get company", error: error.message }));
    }
}

export const GET = async () => {
    try {
        await connect();
        const res = await Company.find();
        return new NextResponse(JSON.stringify(res));
    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "Failed to get company", error: error.message }));
    }
}