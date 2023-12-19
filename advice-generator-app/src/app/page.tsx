import Image from "next/image";
import AdviceCard from "./components/AdviceCard";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center border-2 border-red-600 bg-gradient-to-r from-[#1F2531] to-[#4f547d] ">
      <AdviceCard />
    </main>
  );
}
