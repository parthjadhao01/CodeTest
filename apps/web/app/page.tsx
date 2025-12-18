import Navbar from "@/features/landing/components/navbar";
import Herosection from "@/features/landing/components/herosection";

export default function Home() {
  return (
    <div className=" h-full mx-24">
      <Navbar />
      <Herosection />
    </div>
  );
}
