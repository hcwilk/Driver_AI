"use client";
import React, { useState, ReactNode, useEffect } from "react";
import Header from "../Header";
import { useAuth } from "@/lib/firebase/AuthProvider";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Loading from "../Loading";

export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const { currentUser, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !currentUser) {
            console.log("No user found");
            router.push('/auth/signin');
        }
    }, [currentUser, loading, router]);

    console.log("currentUser", currentUser);

    if (!currentUser) {
        return <Loading />; // Or a loading indicator component
    }
    return (
        <>
            <div className="flex justify-center flex-col bg-black w-full h-auto min-h-screen">
                <Header />
                <div className="w-full rounded-t-[40px] bg-white min-h-screen">

                    {children}
                </div>
            </div>
        </>
    );
}
