import React from "react";
import Navbar from "@/features/landing/components/navbar";
import Image from "next/image";

export default function ContestPage() {
  return (
    <div>
      <div className="mx-24">
        <Navbar />
      </div>
      <div className="mt-5 h-[350px] w-full bg-black text-white flex flex-col justify-center items-center">
        <Image src="/gold.jpeg" alt="gold" width={256} height={356} />
        <h1 className="text-4xl">CodeManic Contest</h1>
        <p>Contest every week. Compete and see your ranking </p>
      </div>
    </div>
  );
}
