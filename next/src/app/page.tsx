'use client';
import CodeTable from "@/components/CodeTable/table";
import ProtectedLayout from "@/components/layouts/ProtectedLayout";
import Modal from "@/components/modal/Modal";
import { useEffect, useState } from "react";

export default function Home() {

  const [open, setOpen] = useState(false);
  const [test, setTest] = useState(0);

  return (
    <ProtectedLayout>

      <div className="flex flex-col items-center w-full flex-1 mt-[150px]">
        <Modal open={open} setOpen={setOpen} setTest={setTest} />
        <div className="w-11/12 flex justify-end">
          <button onClick={() => { setOpen(!open) }} className="hover:text-white w-[200px] cursor-pointer rounded-lg border border-primary bg-gradient-to-br from-zinc-100 to-zinc-500 p-2 text-black transition-all duration-300 ease-in-out hover:bg-gradient-to-bl hover:from-zinc-500 hover:to-zinc-700">
            Add new Codebase
          </button>
        </div>
        <CodeTable test={test} setTest={setTest} />

      </div>


    </ProtectedLayout>
  );
}
