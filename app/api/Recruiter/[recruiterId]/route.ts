import { NextRequest, NextResponse } from "next/server";

export const POST = async (request:any, { params }: { params: any }) => {
    const { recruiterId } = params
    const data = await request.json();
    console.log(data);
    
    return new NextResponse(`Inside recruitment post request ${recruiterId}, data: ${JSON.stringify(data)}`)
}