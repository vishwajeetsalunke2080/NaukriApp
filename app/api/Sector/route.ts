import connect from "@/lib/db";
import Sector from "@/lib/models/sector";
import { NextResponse } from "next/server"

export const POST = async (req: any, { params }: { params: any }) => {
    try {
        await connect();
        const data = await req.json();
        const newSector = await new Sector(data);
        const res = await newSector.save();

        return new NextResponse(JSON.stringify({ message: "sector added successfully", data: res }));

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "Failed to add sectors", error: error.message }));
    }
}

export const GET = async () => {
    try {
        await connect();
        const res = await Sector.find();
        return new NextResponse(JSON.stringify(res));
    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "Failed to get company", error: error.message }));
    }
}