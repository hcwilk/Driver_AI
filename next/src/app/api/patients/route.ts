
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
    try {
        const backendUrl = process.env.BACKEND_URL;
        if (!backendUrl) {
            throw new Error("BACKEND_URL is not defined");
        }
        const response = await axios.get(backendUrl + "users");
        return NextResponse.json(response.data, { status: 200 });
    } catch (e) {
        console.error('Error fetching data:', e);
        return NextResponse.json({ message: "Hello World" }, { status: 200 });
    }
}

export async function POST(request: NextRequest) {
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
