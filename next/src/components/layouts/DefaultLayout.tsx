"use client";
import React, { useState, ReactNode } from "react";
import Header from "@/components/Header";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <div className="flex justify-center flex-col bg-black w-full h-auto min-h-screen">

                <Header />
                {children}
            </div>
        </>
    );
}
