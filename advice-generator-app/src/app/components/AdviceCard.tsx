'use client'
import React from "react";
import Image from "next/image";
import IconDivider from "../../../public/images/pattern-divider-mobile.svg";
import BookmarkIcon from "../../../public/images/icon-dice.svg";
import axios from "axios";
import { useState,useEffect } from "react";


  interface quoteType  {
      slip: {
          advice: string,
          id: number
    };
  };

function AdviceCard() {

  


    const [advice, setAdvice] = useState<quoteType>({
        slip: {
            advice: "",
            id: 0
        }
    })

    useEffect(() => {
        
     getAdvice()
    }, [])
    
    const getAdvice = async () => {
        const result = await axios.get("https://api.adviceslip.com/advice");
        const advice = await result.data;
        setAdvice(advice);
    }



  return (
    <article className="m-4 py-10 px-4 rounded-[40px] max-w-[45rem] flex justify-center flex-col items-center  bg-gradient-to-r from-[#675a9b] to-[#000]">
      <div className="flex flex-col  items-center justify-between space-y-10">
        <h2 className="text-emerald-300 text-xl font-normal  tracking-[3px] italic uppercase md:text-2xl">
          Advice #{advice.slip.id}
        </h2>
        <h1 className="text-white text-2xl  text-center md:text-3xl">
          &quot; {advice.slip.advice}. &quot;
        </h1>

        <Image src={IconDivider} alt="Divider Icon" />
      </div>
      <div
        className="relative  bg-secondary p-6 rounded-full top-[4.6rem] cursor-pointer hover:drop-shadow-2xl"
        onClick={getAdvice}
      >
        <Image src={BookmarkIcon} alt="Bookmark icon" />
      </div>
    </article>
  );
}

export default AdviceCard;
