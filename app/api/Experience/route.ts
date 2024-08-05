import connect from "@/lib/db";
import Experience from "@/lib/models/experience";
import { NextResponse } from "next/server"

export const POST = async (req: any, { params }: { params: any }) => {
    try {
        await connect();
        const data = await req.json();
        const newExperience = await new Experience(data);
        const res = await newExperience.save();

        return new NextResponse(JSON.stringify({ message: "Experience added successfully", data: res }));

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "Failed to get experiences", error: error.message }));
    }
}

export const GET = async () => {
    try {
        await connect();
        const res = await Experience.find();
        return new NextResponse(JSON.stringify(res));
    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "Failed to get experiences", error: error.message }));
    }
}