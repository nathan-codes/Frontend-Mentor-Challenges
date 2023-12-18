import Image from "next/image";
import AdviceCard from "./components/AdviceCard";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center border-2 border-red-600">
      <AdviceCard />
    </main>
  );
}
