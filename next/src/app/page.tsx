import ProtectedLayout from "@/components/layouts/ProtectedLayout";
import Image from "next/image";

export default function Home() {
  return (
    <ProtectedLayout>

      <div className="flex flex-col items-center w-full flex-1">
        Test

      </div>


    </ProtectedLayout>
  );
}
