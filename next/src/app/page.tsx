import ProtectedLayout from "@/components/layouts/ProtectedLayout";
import Image from "next/image";

export default function Home() {
  return (
    <ProtectedLayout>
      <div className="flex justify-center bg-black w-full min-h-screen">

        <div className="flex flex-col items-center bg-white w-full rounded-t-[40px] min-h-screen mt-2">
          Test

        </div>

      </div>

    </ProtectedLayout>
  );
}
