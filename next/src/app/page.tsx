'use client';
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
        Test

      </div>


    </ProtectedLayout>
  );
}
