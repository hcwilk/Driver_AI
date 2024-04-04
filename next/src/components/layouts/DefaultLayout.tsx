"use client";
import React, { useState, ReactNode } from "react";
import AuthHeader from "../AuthHeader";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <div className="flex justify-center flex-col bg-black w-full h-auto min-h-screen">
                <AuthHeader />


                {children}
            </div>
        </>
    );
}
