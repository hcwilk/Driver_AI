
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

export async function POST(request: NextRequest) {
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
