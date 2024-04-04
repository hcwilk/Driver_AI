'use client';
import CodeTable from "@/components/CodeTable/table";
import ProtectedLayout from "@/components/layouts/ProtectedLayout";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

    async function getCodebases() {
        const response = await fetch("/api/codebases");
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        getCodebases();
    }, []);
    return (
        <ProtectedLayout>

            <div className="flex flex-col items-center w-full flex-1 mt-[150px]">
                <div className="w-11/12 flex justify-end">
                    <button onClick={() => getCodebases()} className="hover:text-white w-[200px] cursor-pointer rounded-lg border border-primary bg-gradient-to-br from-zinc-100 to-zinc-500 p-2 text-black transition-all duration-300 ease-in-out hover:bg-gradient-to-bl hover:from-zinc-500 hover:to-zinc-700">
                        Add new Codebase
                    </button>
                </div>
                <CodeTable />

            </div>


        </ProtectedLayout>
    );
}
