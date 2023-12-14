import React from "react";
import hrImage from "../../../public/images/Rectangle.svg";
import Image from "next/image";
interface WordBreakProps {
  wordtype: string;
}

function WordBreak({ wordtype }: WordBreakProps) {
  return (

     
      <div className="w-full flex items-center space-x-2 justify-between my-5">
        <span className="text-zinc-800 dark:text-[#FFF] text-2xl font-bold pr-4">{wordtype}</span>
        <hr className="w-full h-[3px] mx-auto my-4 bg-gray-100 border-0 rounded " />
      </div>

  );
}

export default WordBreak;
