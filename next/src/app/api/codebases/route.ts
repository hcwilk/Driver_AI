import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
    try {
        const backendUrl = process.env.BACKEND_URL;
        const username = process.env.BASIC_AUTH_USERNAME;
        const password = process.env.BASIC_AUTH_PASSWORD;

        if (!backendUrl) {
            throw new Error("BACKEND_URL is not defined");
        }

        // Manually set the Authorization header
        const token = Buffer.from(`${username}:${password}`).toString('base64');

        const config: any = {
            headers: {
                Authorization: `Basic ${token}`,
                'Content-Type': 'text/plain', // Postman used this content type, adjust if necessary
            },
        };

        const response = await axios.get(backendUrl + "/users/", config); // Ensure the URL ends with a slash '/'
        return NextResponse.json(response.data, { status: 200 });
    } catch (e) {
        console.error('Error fetching data:', e);
        return NextResponse.json({ message: "Failed" }, { status: 400 });
    }
}

// The POST function remains unchanged if no modification is needed for it
export async function POST(request: NextRequest) {
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
