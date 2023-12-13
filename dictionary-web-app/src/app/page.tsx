"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { Alert } from "flowbite-react";

export default function Home() {
  return (
    <div className="p-5 md:max-w-screen-md mx-auto">
      {/* Header Section */}
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main>
      
      </main>

     

      <footer></footer>
    </div>
  );
}
