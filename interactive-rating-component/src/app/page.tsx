"use client";
import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";
import { useState } from "react";



export default function Home() {
 
  const [rating, setRating] = useState([1, 2, 3, 4, 5]);
  const [selected, setSelected] = useState(0);

 

  const handleSelect = (selectedrating: number) => {
    setSelected(selectedrating);
  };

  const handleSubmit = () => {
    if (selected === 0) {
      alert("Select a rating");
      return;
    }
    setSubmit(true);
  };

  const [submit, setSubmit] = useState(false);

  return (
    <main className="min-h-screen  flex flex-col items-center justify-center bg-[#131518]">
      {!submit ? (
        <RatingCard
          buttonRatings={rating}
          handleSelect={handleSelect}
          handleSubmit={handleSubmit}
        />
      ) : (
        <ThankYouCard selected={selected} />
      )}
    </main>
  );
}
