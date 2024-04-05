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

        // Manually set the Authorization header
        const token = Buffer.from(`${username}:${password}`).toString('base64');

        const config: any = {
            headers: {
                Authorization: `Basic ${token}`,
                'Content-Type': 'text/plain', // Postman used this content type, adjust if necessary
            },
        };

        const response = await axios.get(backendUrl + "/codebases/", config); // Ensure the URL ends with a slash '/'
        return NextResponse.json(response.data, { status: 200 });
    } catch (e) {
        console.error('Error fetching data:', e);
        return NextResponse.json({ message: "Failed" }, { status: 400 });
    }
}

// The POST function remains unchanged if no modification is needed for it
export async function POST(request: NextRequest) {
    try {
        const backendUrl = process.env.BACKEND_URL;
        const username = process.env.BASIC_AUTH_USERNAME;
        const password = process.env.BASIC_AUTH_PASSWORD;

        if (!backendUrl) {
            throw new Error("BACKEND_URL is not defined");
        }

        // Parse JSON body from the request
        const body = await request.json();

        // Manually set the Authorization header
        const token = Buffer.from(`${username}:${password}`).toString('base64');
        const config: any = {
            headers: {
                Authorization: `Basic ${token}`,
                'Content-Type': 'application/json', // Ensure correct Content-Type for JSON data
            },
        };

        // Send POST request to backend to create a new Codebase
        console.log('this is body', body)
        const response = await axios.post(backendUrl + "/codebases/", body, config);

        // Return success response
        return NextResponse.json(response.data, { status: response.status });
    } catch (e: any) {
        console.error('Error creating data:', e.response ? e.response.data : e);
        // Return error response
        return NextResponse.json({ message: "Failed to create codebase" }, { status: e.response ? e.response.status : 500 });
    }
}


export async function PUT(request: NextRequest) {
    try {
        const backendUrl = process.env.BACKEND_URL;
        const username = process.env.BASIC_AUTH_USERNAME;
        const password = process.env.BASIC_AUTH_PASSWORD;

        if (!backendUrl) {
            throw new Error("BACKEND_URL is not defined");
        }

        // Parse JSON body from the request
        const body = await request.json();

        // Manually set the Authorization header
        const token = Buffer.from(`${username}:${password}`).toString('base64');
        const config: any = {
            headers: {
                Authorization: `Basic ${token}`,
                'Content-Type': 'application/json', // Ensure correct Content-Type for JSON data
            },
        };

        // Send PUT request to backend to update a Codebase
        console.log('this is body', body)
        const response = await axios.put(backendUrl + "/codebases/", body, config);

        // Return success response
        return NextResponse.json(response.data, { status: response.status });
    } catch (e: any) {
        console.error('Error updating data:', e.response ? e.response.data : e);
        // Return error response
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

        // Parse JSON body from the request
        const url = new URL(request.url);
        console.log('this is url', url)
        const id = url.searchParams.get('id'); // Assuming your parameter name is 'id'



        // Manually set the Authorization header
        const token = Buffer.from(`${username}:${password}`).toString('base64');
        const config: any = {
            headers: {
                Authorization: `Basic ${token}`,
                'Content-Type': 'application/json', // Ensure correct Content-Type for JSON data
            },
        };

        // Send DELETE request to backend to delete a Codebase
        await axios.delete(backendUrl + `/codebases/${id}/`, config); // Ensure the URL ends with a slash '/

        // Return success response
        return new NextResponse(null, { status: 204 }); // Use null or '' for the response body

    } catch (e: any) {
        console.error('Error deleting data:', e.response ? e.response.data : e);
        // Return error response
        return NextResponse.json({ message: "Failed to delete codebase" }, { status: e.response ? e.response.status : 500 });
    }
}
