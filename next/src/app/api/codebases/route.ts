import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import exp from "constants";

export async function GET(request: NextRequest) {
    try {
        const backendUrl = process.env.BACKEND_URL;
        const username = process.env.BASIC_AUTH_USERNAME;
        const password = process.env.BASIC_AUTH_PASSWORD;

        if (!backendUrl) {
            throw new Error("BACKEND_URL is not defined");
        }

        const token = Buffer.from(`${username}:${password}`).toString('base64');

        const config: any = {
            headers: {
                Authorization: `Basic ${token}`,
                'Content-Type': 'text/plain',
            },
        };

        const response = await axios.get(backendUrl + "/codebases/", config);
        return NextResponse.json(response.data, { status: 200 });
    } catch (e) {
        console.error('Error fetching data:', e);
        return NextResponse.json({ message: "Failed" }, { status: 400 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const backendUrl = process.env.BACKEND_URL;
        const username = process.env.BASIC_AUTH_USERNAME;
        const password = process.env.BASIC_AUTH_PASSWORD;

        if (!backendUrl) {
            throw new Error("BACKEND_URL is not defined");
        }

        const body = await request.json();

        const token = Buffer.from(`${username}:${password}`).toString('base64');
        const config: any = {
            headers: {
                Authorization: `Basic ${token}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await axios.post(backendUrl + "/codebases/", body, config);

        return NextResponse.json(response.data, { status: response.status });
    } catch (e: any) {
        console.error('Error creating data:', e.response ? e.response.data : e);
        return NextResponse.json({ message: "Failed to create codebase" }, { status: e.response ? e.response.status : 500 });
    }
}


export async function PATCH(request: NextRequest) {
    try {
        const backendUrl = process.env.BACKEND_URL;
        const username = process.env.BASIC_AUTH_USERNAME;
        const password = process.env.BASIC_AUTH_PASSWORD;

        if (!backendUrl) {
            throw new Error("BACKEND_URL is not defined");
        }

        const body = await request.json();
        const url = new URL(request.url);
        const id = url.searchParams.get('id');

        const token = Buffer.from(`${username}:${password}`).toString('base64');
        const config = {
            headers: {
                Authorization: `Basic ${token}`,
                'Content-Type': 'application/json',
            }
        };

        const response = await axios.patch(`${backendUrl}/codebases/${id}/`, body, config);

        return NextResponse.json(response.data, { status: response.status });
    } catch (e: any) {
        console.error('Error updating data:', e.response ? e.response.data : e);
        return NextResponse.json({ message: "Failed to update codebase" }, { status: e.response ? e.response.status : 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const backendUrl = process.env.BACKEND_URL;
        const username = process.env.BASIC_AUTH_USERNAME;
        const password = process.env.BASIC_AUTH_PASSWORD;

        if (!backendUrl) {
            throw new Error("BACKEND_URL is not defined");
        }

        const url = new URL(request.url);
        const id = url.searchParams.get('id');



        const token = Buffer.from(`${username}:${password}`).toString('base64');
        const config: any = {
            headers: {
                Authorization: `Basic ${token}`,
                'Content-Type': 'application/json',
            },
        };

        await axios.delete(backendUrl + `/codebases/${id}/`, config);

        return new NextResponse(null, { status: 204 });

    } catch (e: any) {
        console.error('Error deleting data:', e.response ? e.response.data : e);
        return NextResponse.json({ message: "Failed to delete codebase" }, { status: e.response ? e.response.status : 500 });
    }
}
